import { put, takeLatest } from "redux-saga/effects";

import chatService from "../../../services/chatbox";
import {
  getUserListStart,
  getUserListSuccess,
  getUserListFailure,
  getPreviousChatsStart,
  getPreviousChatsSuccess,
  getPreviousChatsFailure,
  updateUnseenCountStart,
  updateUnseenCountFailure,
  updateUnseenCountSuccess,
} from "../../redux/chatbox";
import { showErrorMessage } from "../../redux/toast";

function* chatboxWatcher() {
  yield takeLatest(getUserListStart.type, getUserListWorker);
  yield takeLatest(getPreviousChatsStart.type, getChatListWorker);
  yield takeLatest(updateUnseenCountStart.type, updateUnseenCountWorkder);
}

function* getUserListWorker(action) {
  try {
    const { search } = action && action.payload;
    const { data, error } = yield chatService.getUsersList({ search });
    if (!error) yield put(getUserListSuccess(data?.users));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getUserListFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateUnseenCountWorkder(action) {
  try {
    const { error } = yield chatService.updateUnseenCount();
    if (!error) yield put(updateUnseenCountSuccess());
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(updateUnseenCountFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

function* getChatListWorker() {
  try {
    const { data, error } = yield chatService.getPrevousChatsList({
      language: "en",
    });
    if (!error) yield put(getPreviousChatsSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getPreviousChatsFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

export default chatboxWatcher;
