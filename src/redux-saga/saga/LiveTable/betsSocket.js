import { call, fork, put, race, take, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { io } from "socket.io-client";

import { startGetBet, updateBetData } from "../../redux/LiveTable";
import { showErrorMessage } from "../../redux/toast";
import { logoutStart } from "../../redux/auth/authentication";

function connect() {
  const socket = io(`${process.env.REACT_APP_BALANCE_URL}/getBets`);
  return new Promise((resolve) => {
    try {
      socket.on("connect", () => {
        socket.emit("bets", "bets");
        resolve(socket);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  });
}

function* read(socket, userId) {
  try {
    const channel = yield call(subscribe, socket, userId);
    while (true) {
      let { logoutAction, socketAction } = yield race({
        logoutAction: take(logoutStart.type),
        socketAction: take(channel),
      });
      if (logoutAction) {
        channel.close();
        socket.close();
      } else {
        yield put(socketAction);
      }
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
  }
}

function subscribe(socket, userId) {
  return eventChannel((emitter) => {
    const addBetData = (data) => {
      emitter(updateBetData(data));
      return;
    };
    socket.on("betsData", addBetData);
    return () => {};
  });
}

function* recentBetWatcher() {
  yield takeLatest(startGetBet.type, recentBetWorker);
}

function* recentBetWorker(action) {
  try {
    const socket = yield call(connect);
    yield fork(read, socket, action.payload);
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(startGetBet());
  }
}

export default recentBetWatcher;
