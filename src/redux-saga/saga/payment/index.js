import { toast } from "react-hot-toast";
import { put, takeLatest } from "redux-saga/effects";

import paymentService from "../../../services/payment";
import {
  generateAddressFailure,
  generateAddressStart,
  generateAddressSuccess,
  getCoinsFailure,
  getCoinsStart,
  getCoinsSuccess,
  getConvertedWithdrawBalanceStart,
  getConvertedWithdrawBalanceSuccess,
  getConvertedWithdrawBalanceFailure,
  getConvertedDespositBalanceSuccess,
  getConvertedDepositBalanceStart,
  getConvertedDepositBalanceFailure,
  getCurrencyListFailure,
  getCurrencyListStart,
  getCurrencyListSuccess,
  withdrawalRequestFailure,
  withdrawalRequestStart,
  withdrawalRequestSuccess,
  validateAddressStart,
  validateAddressSuccess,
  validateAddressError,
} from "../../redux/payment";
import { showErrorMessage } from "../../redux/toast";

function* paymentWatcher() {
  yield takeLatest(getCoinsStart.type, coinWorker);
  yield takeLatest(getCurrencyListStart.type, currencyWorker);
  yield takeLatest(generateAddressStart.type, generateAddressWorker);
  yield takeLatest(
    getConvertedDepositBalanceStart.type,
    convertedDepositBalanceWorker
  );
  yield takeLatest(
    getConvertedWithdrawBalanceStart.type,
    convertedWithdrawBalanceWorker
  );
  yield takeLatest(withdrawalRequestStart.type, withdrawalRequestWorker);
  yield takeLatest(validateAddressStart.type, validateAddressWorker);
}

function* validateAddressWorker(action) {
  try {
    const data = yield paymentService.validateAddress(action?.payload);
    if (data.status) yield put(validateAddressSuccess(data));
    else yield put(validateAddressError());
  } catch (error) {
    yield put(validateAddressError());
  }
}
function* coinWorker() {
  try {
    const { data } = yield paymentService.getCoins();
    yield put(getCoinsSuccess(data));
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getCoinsFailure(error.message));
  }
}

function* currencyWorker(action) {
  try {
    const { data } = yield paymentService.getAllCurrency(action.payload);
    yield put(getCurrencyListSuccess(data));
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getCurrencyListFailure(error.message));
  }
}

function* generateAddressWorker(action) {
  try {
    const { data } = yield paymentService.generateAddress(action.payload);
    yield put(generateAddressSuccess(data));
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(generateAddressFailure(error.message));
  }
}

function* convertedDepositBalanceWorker(action) {
  try {
    const { data } = yield paymentService.getConvertedBalance(action.payload);
    yield put(getConvertedDespositBalanceSuccess(data));
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getConvertedDepositBalanceFailure(error.message));
  }
}

function* convertedWithdrawBalanceWorker(action) {
  try {
    const { data } = yield paymentService.getConvertedBalance(action.payload);
    yield put(getConvertedWithdrawBalanceSuccess(data));
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getConvertedWithdrawBalanceFailure(error.message));
  }
}

function* withdrawalRequestWorker(action) {
  try {
    const { data } = yield paymentService.withdrawalRequest(action.payload);
    if (data.status === "pending") {
      toast.success("Your withdraw request has been processed successfully!");
      toast.success("It may takes about one hour to reflect in your wallet.");
      yield put(withdrawalRequestSuccess(data));
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(withdrawalRequestFailure(error.message));
  }
}

export default paymentWatcher;
