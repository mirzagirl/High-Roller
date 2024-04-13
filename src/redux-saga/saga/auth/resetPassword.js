import { put, takeLatest } from "redux-saga/effects";

import userProfileService from "../../../services/user";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
} from "../../redux/auth/resetPassword";
import { showSuccessMessage, showErrorMessage } from "../../redux/toast";

function* resetPasswordWatcher() {
  yield takeLatest(resetPasswordStart.type, resetPasswordWorker);
}

function* resetPasswordWorker(action) {
  try {
    const { data, error } = yield userProfileService.resetPassword(
      action.payload
    );
    if (data) {
      yield put(
        showSuccessMessage({ tKey: "CHANGE_PASSWORD.PASSWORD_CHANGE_SUCCESS" })
      );
      yield put(resetPasswordSuccess());
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(resetPasswordFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(resetPasswordFailure());
  }
}

export default resetPasswordWatcher;
