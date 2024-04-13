import { put, takeLatest } from "redux-saga/effects";

import lobbyService from "../../../services/lobby";
import {
  getProvidersStart,
  getProvidersSuccess,
  getProvidersFailure,
} from "../../redux/lobby";
import { showErrorMessage } from "../../redux/toast";

function* lobbyWatcher() {
  yield takeLatest(getProvidersStart.type, lobbyWorker);
}

function* lobbyWorker() {
  try {
    const { data, error } = yield lobbyService.getProviders();
    if (!error) {
      yield put(getProvidersSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getProvidersFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getProvidersFailure());
  }
}

export default lobbyWatcher;
