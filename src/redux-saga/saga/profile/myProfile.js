import { put, takeLatest } from "redux-saga/effects";

import userProfileService from "../../../services/user";
import { connectMetamaskSuccess } from "../../redux/auth/authentication";
import {
  getUserProfileDetailsStart,
  getUserProfileDetailsSuccess,
  getUserProfileDetailsFailure,
  updateUserProfileStart,
  updateUserProfileSuccess,
  updateUserProfileFailure,
  getWalletBalanceSuccess,
  getUserGameHistoryStart,
  getUserGameHistoryError,
  getUserGameHistorySuccess,
} from "../../redux/profile/myProfile";
import { showSuccessMessage, showErrorMessage } from "../../redux/toast";

function* userProfileWatcher() {
  yield takeLatest(getUserGameHistoryStart.type, userGameHistoryWorker);
  yield takeLatest(getUserProfileDetailsStart.type, userProfileWorker);
  yield takeLatest(updateUserProfileStart.type, updateUserProfileWorker);
}

function* userProfileWorker() {
  try {
    const { data, error } = yield userProfileService.getUserProfile();
    if (!error) {
      yield put(getWalletBalanceSuccess(data?.Wallet?.totalAmount));
      yield put(getUserProfileDetailsSuccess(data));
      if (data?.metamaskAddress) {
        yield put(
          connectMetamaskSuccess({
            walletAddress: data?.metamaskAddress,
          })
        );
      }
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getUserProfileDetailsFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getUserProfileDetailsFailure());
  }
}
function* userGameHistoryWorker() {
  try {
    const { data, error } = yield userProfileService.getGameHistory();
    if (!error) {
      yield put(getUserGameHistorySuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getUserGameHistoryError());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getUserGameHistoryError());
  }
}

function* updateUserProfileWorker(action) {
  try {
    const { data, error } = yield userProfileService.updateUserProfile(
      action.payload
    );
    if (!error) {
      yield put(
        showSuccessMessage({ tKey: "MYPROFILE.USER_DETAIL_UPDATE_SUCCESS" })
      );
      yield put(updateUserProfileSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(updateUserProfileFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(updateUserProfileFailure());
  }
}

export default userProfileWatcher;
