import { put, takeLatest } from "redux-saga/effects";

import authenticationService from "../../../services/authentication";
import Metamask from "../../../services/metamask";
import session from "../../../utils/session";
import {
  connectMetamaskFailure,
  connectMetamaskStart,
  connectMetamaskSuccess,
  forgotPasswordFailure,
  forgotPasswordStart,
  forgotPasswordSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  refreshLoginFailure,
  refreshLoginStart,
  refreshLoginSuccess,
  refreshMetamaskLoginStart,
  refreshMetamaskLoginSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
  uploadSelfieeFailure,
  uploadSelfieeStart,
  uploadSelfieeSuccess,
  verifyEmailFailure,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyKycFailure,
  verifyKycStart,
  verifyKycSuccess,
  verifyPasswordTokenFailure,
  verifyPasswordTokenStart,
  verifyPasswordTokenSuccess,
  resendOtpStart,
  resendOtpFail,
  resendOttpSuccess,
} from "../../redux/auth/authentication";
import {
  metamaskLoginFailure,
  metamaskLoginStart,
  metamaskLoginSuccess,
} from "../../redux/auth/authentication";
import { showErrorMessage, showSuccessMessage } from "../../redux/toast";
import { getUserProfileDetailsStart } from "../../redux/profile/myProfile";

function* authenticationWatcher() {
  yield takeLatest(loginStart.type, loginWorker);
  yield takeLatest(refreshLoginStart.type, refreshLoginWorker);
  yield takeLatest(refreshMetamaskLoginStart.type, refreshLoginWorker);
  yield takeLatest(connectMetamaskStart.type, connectedMetamaskWorker);
  yield takeLatest(metamaskLoginStart.type, metamaskLoginWorker);
  yield takeLatest(signUpStart.type, signUpWorker);
  yield takeLatest(logoutStart.type, logoutWorker);
  yield takeLatest(verifyEmailStart.type, verifyEmailWorker);
  yield takeLatest(verifyKycStart.type, verifyKycWorker);
  yield takeLatest(forgotPasswordStart.type, forgotPasswordWorker);
  yield takeLatest(verifyPasswordTokenStart.type, verifyPasswordTokenWorker);
  yield takeLatest(uploadSelfieeStart.type, uploadSelfieeWorker);
  yield takeLatest(resendOtpStart.type, resendOtpWorker);
}

function* loginWorker(action) {
  try {
    const { data, error } = yield authenticationService.login(action.payload);
    if (data) {
      const { token, resToken, isMetaMaskUser, userId } = data;
      session.saveSessionCred({
        token,
        resToken,
        isMetaMaskUser,
        userId,
      });
      yield put(showSuccessMessage({ tKey: "HEADER.LOGIN_SUCCESS" }));
      yield put(loginSuccess(userId));
      yield put(getUserProfileDetailsStart());
    }

    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(loginFailure(error.data));
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(loginFailure(error));
  }
}

function* refreshLoginWorker() {
  try {
    const { data, error } = yield authenticationService.refreshLogin();
    if (data) {
      const { token, resToken, isMetaMaskUser, walletAddress } = data;
      const { id } = JSON.parse(atob(token.split(".")[1]));
      session.saveSessionCred({
        token,
        resToken,
        isMetaMaskUser,
        userId: id,
      });
      if (isMetaMaskUser) {
        yield put(refreshMetamaskLoginSuccess({ walletAddress }));
      } else {
        yield put(refreshLoginSuccess({ id, walletAddress }));
      }
    }

    if (error) {
      yield put(refreshLoginFailure(error.message));
    }
  } catch (error) {
    yield put(refreshLoginFailure(error.message));
  }
}

function* connectedMetamaskWorker(action) {
  try {
    const { data, error } = yield Metamask.connectToMetamask(action.payload);
    if (data) {
      yield put(
        showSuccessMessage({ tKey: "HEADER.METAMASK_CONNECT_SUCCESS" })
      );
      yield put(connectMetamaskSuccess());
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(connectMetamaskFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(connectMetamaskFailure());
  }
}

function* metamaskLoginWorker(action) {
  try {
    const { data, error } = yield Metamask.requestAccount(action.payload);
    if (data) {
      const { token, resToken, isMetaMaskUser, walletAddress } = data;
      session.saveSessionCred({
        token,
        resToken,
        isMetaMaskUser,
      });
      yield put(showSuccessMessage({ tKey: "HEADER.METAMASK_LOGIN_SUCCESS" }));
      yield put(metamaskLoginSuccess(walletAddress));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(metamaskLoginFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(metamaskLoginFailure());
  }
}

function* signUpWorker(action) {
  try {
    const { data, error } = yield authenticationService.signUp(action.payload);
    if (data) {
      localStorage.setItem("signId", data.userId);
      yield put(showSuccessMessage({ tKey: "HEADER.EMAIL_SUCCESS" }));
      yield put(signUpSuccess());
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(signUpFailure());
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(signUpFailure());
  }
}

function* verifyEmailWorker(action) {
  try {
    const { data, error, message } = yield authenticationService.verifyEmail(
      action.payload
    );
    if (data?.emailVerified) {
      yield put(verifyEmailSuccess());
      yield put(
        showSuccessMessage({ msg: message || "Email verified Succfully" })
      );
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(verifyEmailFailure(error.message));
    }
  } catch (error) {
    yield put(verifyEmailFailure(error.message));
  }
}

function* forgotPasswordWorker(action) {
  try {
    const { data, error } = yield authenticationService.forgotPassword(
      action.payload
    );
    if (data) {
      yield put(
        showSuccessMessage({ tKey: "HEADER.FORGOT_PASSWORD_EMAIL_MSG" })
      );
      yield put(forgotPasswordSuccess());
    }
    if (error) {
      yield put(forgotPasswordFailure(error.message));
    }
  } catch (error) {
    yield put(forgotPasswordFailure(error.message));
  }
}

function* verifyPasswordTokenWorker(action) {
  try {
    const { data, error } = yield authenticationService.verifyPasswordToken(
      action.payload
    );
    if (data) {
      yield put(
        showSuccessMessage({ tKey: "CHANGE_PASSWORD.PASSWORD_CHANGE_SUCCESS" })
      );
      yield put(verifyPasswordTokenSuccess());
    }
    if (error) {
      yield put(verifyPasswordTokenFailure(error.message));
    }
  } catch (error) {
    yield put(verifyPasswordTokenFailure(error.message));
  }
}

function* logoutWorker() {
  try {
    session.clearSessionCred();
    yield put(showSuccessMessage({ tKey: "SIDEBAR.LOG_OUT_SUCCESS" }));
    yield put(logoutSuccess());
    window.location.reload();
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

function* verifyKycWorker(action) {
  try {
    const { data, error, message } = yield authenticationService.verifyKyc(
      action.payload
    );
    if (data) {
      yield put(verifyKycSuccess());
      yield put(showSuccessMessage({ msg: message || "Kyc updated success" }));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(verifyKycFailure(error.message));
    }
  } catch (error) {
    yield put(verifyKycFailure(error.message));
  }
}

function* uploadSelfieeWorker(action) {
  try {
    const { data, error, message } =
      yield authenticationService.uploadSelfieeCall(action.payload);
    if (data) {
      yield put(uploadSelfieeSuccess());
      yield put(showSuccessMessage({ msg: message }));
    }
    if (error) {
      yield put(showErrorMessage({ msg: error.message }));
      yield put(uploadSelfieeFailure(error.message));
    }
  } catch (error) {
    yield put(showErrorMessage({ msg: error.message }));
    yield put(uploadSelfieeFailure(error.message));
  }
}
function* resendOtpWorker(action) {
  try {
    const { data, error, message } = yield authenticationService.resendOtp(
      action.payload
    );
    if (data) {
      showSuccessMessage({ tKey: "HEADER.RESEND_OTP_SUCCESS" });
      yield put(resendOttpSuccess());
      yield put(showSuccessMessage({ msg: message }));
    }
    if (error) {
      yield put(showErrorMessage({ tKey: "HEADER.RESEND_OTP_FAIL" }));
      yield put(resendOtpFail({ msg: error.message }));
    }
  } catch (error) {
    yield put(showErrorMessage({ tKey: "HEADER.RESEND_OTP_FAIL" }));
    yield put(resendOtpFail(error.message));
  }
}
export default authenticationWatcher;
