import { put, takeLatest } from "redux-saga/effects";

import kycVerificationService from "../../../services/kycVerification";
import {
  getCountriesStart,
  getCountriesSuccess,
  getCountriesFailure,
  getStatesStart,
  getStatesSuccess,
  getStatesFailure,
  getCitiesStart,
  getCitiesSuccess,
  getCitiesFailure,
  getUserKycDetailsSuccess,
  getUserKycDetailsError,
  getUserKycDetailsStart,
} from "../../redux/kycVerification/index";
import { showErrorMessage } from "../../redux/toast";

function* kycVerificationWatcher() {
  yield takeLatest(getCountriesStart.type, getCountriesWorker);
  yield takeLatest(getStatesStart.type, getStatesWorker);
  yield takeLatest(getCitiesStart.type, getCitiesWorker);
  yield takeLatest(getUserKycDetailsStart.type, getUserKycDetailWorker);
}

function* getCountriesWorker() {
  try {
    const { data, error } = yield kycVerificationService.getCountries();
    if (!error) {
      yield put(getCountriesSuccess(data));
    }
    if (error) {
      yield put(getCountriesFailure());
      yield put(showErrorMessage({ msg: error.message }));
    }
  } catch (error) {
    yield put(getCountriesFailure());
    yield put(showErrorMessage({ msg: error.message }));
  }
}
function* getUserKycDetailWorker(action) {
  try {
    const { id } = action && action.payload;
    const { data, error } = yield kycVerificationService.getKycDetails({ id });
    if (!error) {
      if (data?.kycDetails?.userId) {
        yield put(getUserKycDetailsSuccess({ data, isUpdateKycData: true }));
      } else {
        yield put(getUserKycDetailsSuccess({ data, isUpdateKycData: false }));
      }
    }
    if (error) {
      yield put(getUserKycDetailsError());
      yield put(showErrorMessage({ msg: error.message }));
    }
  } catch (error) {
    yield put(getUserKycDetailsError());
    yield put(showErrorMessage({ msg: error.message }));
  }
}

function* getStatesWorker(action) {
  try {
    const { countryId } = action && action.payload;
    const { data, error } = yield kycVerificationService.getStates(countryId);
    if (!error) {
      yield put(getStatesSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getStatesFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getStatesFailure());
  }
}

function* getCitiesWorker(action) {
  try {
    const { stateId } = action && action.payload;
    const { data, error } = yield kycVerificationService.getCities(stateId);
    if (!error) {
      yield put(getCitiesSuccess(data));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(getCitiesFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(getCitiesFailure());
  }
}

export default kycVerificationWatcher;
