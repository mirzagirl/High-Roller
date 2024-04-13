import { call, fork, put, race, take, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { io } from "socket.io-client";

import {
  getUserProfileDetailsStart,
  startPoll,
} from "../../redux/profile/myProfile";
import { showErrorMessage } from "../../redux/toast";
import { logoutStart } from "../../redux/auth/authentication";
import session from "../../../utils/session";
import { updateBalanceStart } from "../../redux/wallet";

function connect() {
  const user = session.getSessionCred;
  const socket = io(`${process.env.REACT_APP_BALANCE_URL}/getBalance`, {
    transports: ["polling", "websocket"],
    auth: {
      "access-token": `${user.token}`,
    },
  });

  return new Promise((resolve) => {
    try {
      socket.on("connect", () => {
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
    const getBalanceSe = (data) => {
      emitter(updateBalanceStart(data));
      emitter(getUserProfileDetailsStart());
      return;
    };
    socket.on("balance", getBalanceSe);
    return () => {};
  });
}

function* walletWatcher() {
  yield takeLatest(startPoll.type, walletWorker);
}

function* walletWorker(action) {
  try {
    const socket = yield call(connect);
    yield fork(read, socket, action.payload);
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(startPoll());
  }
}

export default walletWatcher;
