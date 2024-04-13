import { put, takeLatest } from "redux-saga/effects";

import promotionsServices from "../../../services/promotions";
import {
  getPromotionsStart,
  getPromotionsSuccess,
  getPromotionsFailure,
} from "../../redux/promotions";
import { showErrorMessage } from "../../redux/toast";

function* promotionsWatcher() {
  yield takeLatest(getPromotionsStart.type, promotionsWorker);
}

function* promotionsWorker() {
  try {
    const { data, error } = yield promotionsServices.getPromotions();

    if (!error) yield put(getPromotionsSuccess(data));

    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getPromotionsFailure());
    }
  } catch (error) {
    console.log(error);
  }
}
export default promotionsWatcher;
