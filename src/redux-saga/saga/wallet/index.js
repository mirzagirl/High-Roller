import { put, takeLatest } from "redux-saga/effects";

import walletService from "../../../services/wallet";
import {
  getWalletDataFailure,
  getWalletDataStart,
  getWalletDataSuccess,
  updateWalletDataStart,
  updateWalletDataSuccess,
  updateWalletDataFailure,
  searchWalletDataStart,
  searchWalletDataSuccess,
  searchWalletDataFailure,
} from "../../redux/wallet";
import { showErrorMessage } from "../../redux/toast";
import { getGameLinkStart } from "../../redux/casino/lobby";

function* multipleWalletWatcher() {
  yield takeLatest(getWalletDataStart.type, walletDataWorker);
  yield takeLatest(updateWalletDataStart.type, updateWalletDataWorker);
  yield takeLatest(searchWalletDataStart.type, searchWalletDataWorker);
}

function* walletDataWorker() {
  try {
    const { data, error } = yield walletService.getWalletData();
    if (!error) yield put(getWalletDataSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getWalletDataFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateWalletDataWorker(action) {
  try {
    const { currentGame, isGamePlaying } = action && action.payload;
    const { data, error } = yield walletService.updateWalletData(
      action.payload.params
    );
    if (!error) {
      yield put(updateWalletDataSuccess(data));
      if (isGamePlaying && Object.keys(currentGame).length !== 0) {
        yield put(getGameLinkStart(currentGame));
      }
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(updateWalletDataFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

function* searchWalletDataWorker(action) {
  try {
    const { data, error } = yield walletService.searchWalletData(
      action.payload
    );
    if (!error) yield put(searchWalletDataSuccess(data));
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(searchWalletDataFailure());
    }
  } catch (error) {
    console.log(error);
  }
}
export default multipleWalletWatcher;
