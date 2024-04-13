import { put, takeLatest } from "redux-saga/effects";

import currencyService from "../../../services/currencies";
import {
  getCurrenciesFailure,
  getCurrenciesStart,
  getCurrenciesSuccess,
} from "../../redux/currencies/currencies";
import { showErrorMessage } from "../../redux/toast";

function* currencyWatcher() {
  yield takeLatest(getCurrenciesStart, currencyWorker);
}

function* currencyWorker() {
  try {
    const { data, error } = yield currencyService.getCurrencies();
    if (!error) {
      yield put(getCurrenciesSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getCurrenciesFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getCurrenciesFailure());
  }
}

export default currencyWatcher;
