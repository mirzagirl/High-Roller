import { put, takeLatest } from "redux-saga/effects";

import transactionsService from "../../../services/transactions/index.js";
import {
  getTransactionsStart,
  getTransactionsSuccess,
  getTransactionsFailure,
  getMyBetsStart,
  getMyBetsSuccess,
  getMyBetsFailure,
} from "../../redux/transaction";
import { showErrorMessage } from "../../redux/toast";

function* transactionsWatcher() {
  yield takeLatest(getTransactionsStart.type, getTransactionsWorker);
  yield takeLatest(getMyBetsStart.type, getMyBetsWorker);
}

function* getTransactionsWorker(action) {
  try {
    const { data, error } = yield transactionsService.getTransactions(
      action.payload
    );
    if (!error) {
      yield put(getTransactionsSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getTransactionsFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getTransactionsFailure());
  }
}

function* getMyBetsWorker(action) {
  try {
    const { data, error } = yield transactionsService.getMyBets(action.payload);
    if (!error) {
      yield put(getMyBetsSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getMyBetsFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getMyBetsFailure());
  }
}

export default transactionsWatcher;
