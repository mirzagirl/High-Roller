import { put, takeLatest } from "redux-saga/effects";

import liveTableService from "../../../services/liveTable";
import {
  getTopBetsFailure,
  getTopBetsStart,
  getTopBetsSuccess,
} from "../../redux/LiveTable";
import { showErrorMessage } from "../../redux/toast";

function* LiveTableWatcher() {
  yield takeLatest(getTopBetsStart.type, liveTableWorker);
}

function* liveTableWorker() {
  try {
    const { data, error } = yield liveTableService.getTopBets();
    if (!error) {
      yield put(getTopBetsSuccess(data));
    }
    if (error) {
      yield put(
        showErrorMessage({ msg: error.message || "Error fetching bets" })
      );
      yield put(getTopBetsFailure());
    }
  } catch (error) {
    yield put(
      showErrorMessage({ msg: error.message || "Error fetching bets" })
    );
    yield put(getTopBetsFailure());
  }
}

export default LiveTableWatcher;
