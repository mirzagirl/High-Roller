import { put, takeLatest } from "redux-saga/effects";

import cmsService from "../../../services/cms";
import {
  getCMSDataFailure,
  getCMSDataStart,
  getCMSDataSuccess,
} from "../../redux/cms";
import { showErrorMessage } from "../../redux/toast";

function* cmsWatcher() {
  yield takeLatest(getCMSDataStart.type, cmsDataWorker);
}

function* cmsDataWorker() {
  try {
    const { data, error } = yield cmsService.getCMSData();
    if (!error) yield put(getCMSDataSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getCMSDataFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

export default cmsWatcher;
