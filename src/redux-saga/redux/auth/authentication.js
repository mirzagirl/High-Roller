import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  metamaskLoading: false,
  metamaskConnectLoading: false,
  isLoggedIn: false,
  metamaskLoggedIn: false,
  metamaskConnected: false,
  success: false,
  metamaskSuccess: false,
  metamaskConnectSuccess: false,
  signup: false,
  error: null,
  loginFailure: null,
  walletAddress: "",
  userId: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resendOtpStart: (state, action) => {
      state.loading = true;
    },
    resendOtpFail: (state, action) => {
      state.loading = false;
    },
    resendOttpSuccess: (state, action) => {
      state.loading = false;
    },
    refreshLoginStart: (state, action) => {
      state.loading = true;
    },
    refreshMetamaskLoginStart: (state, action) => {
      state.metamaskLoading = true;
    },
    refreshMetamaskLoginSuccess: (state, action) => {
      state.metamaskConnectLoading = false;
      state.metamaskLoggedIn = true;
      state.walletAddress = action.payload.walletAddress;
    },
    refreshLoginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.metamaskConnected = action.payload.walletAddress ?? false;
      state.userId = action.payload.id;
      state.walletAddress = action.payload.walletAddress;
    },
    refreshLoginFailure: (state, action) => {
      state.loading = false;
      state.metamaskConnectLoading = false;
      state.error = action.payload;
    },
    loginStart: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.isLoggedIn = true;
      state.loginFailure = null;
      state.userId = action.payload;
    },
    loginFailure: (state, action) => {
      state.loginFailure = action.payload;
      state.loading = false;
      localStorage.setItem("signId", action?.payload?.userId);
    },
    connectMetamaskStart: (state, action) => {
      state.metamaskConnectLoading = true;
    },
    connectMetamaskSuccess: (state, action) => {
      state.metamaskConnectLoading = false;
      state.metamaskConnectSuccess = true;
      state.metamaskConnected = true;
      if (action.payload?.walletAddress) {
        state.walletAddress = action.payload.walletAddress;
      }
    },
    connectMetamaskFailure: (state, action) => {
      state.metamaskConnectLoading = false;
    },
    signUpStart: (state, action) => {
      state.loginFailure = null;
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.signup = true;
      state.success = true;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
    },
    logoutStart: (state, action) => {
      state.loading = true;
      state.success = false;
      localStorage.removeItem("signId");
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.metamaskLoading = false;
      state.success = true;
      state.isLoggedIn = false;
      state.metamaskConnected = false;
      state.metamaskLoggedIn = false;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
    },
    metamaskLoginStart: (state, action) => {
      state.metamaskLoading = true;
    },
    metamaskLoginSuccess: (state, action) => {
      state.metamaskLoading = false;
      state.walletAddress = action.payload;
      state.metamaskLoggedIn = true;
      state.metamaskSuccess = true;
    },
    metamaskLoginFailure: (state, action) => {
      state.metamaskLoading = false;
    },
    metamaskLogoutStart: (state, action) => {
      state.metamaskLoading = true;
    },
    metamaskLogoutSuccess: (state, action) => {
      state.metamaskLoading = false;
      state.metamaskLoggedIn = false;
    },
    metamaskLogoutFailure: (state, action) => {
      state.loading = false;
    },
    verifyEmailStart: (state, action) => {
      state.loading = true;
    },
    verifyEmailSuccess: (state, action) => {
      state.loading = false;
      (state.loginFailure ??= {}).steps = 1;
      state.success = true;
    },
    verifyEmailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgotPasswordStart: (state, action) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    forgotPasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    verifyPasswordTokenStart: (state, action) => {
      state.loading = true;
    },
    verifyPasswordTokenSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    verifyPasswordTokenFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetSuccess: (state, action) => {
      state.success = false;
      state.signup = false;
    },
    resetError: (state, action) => {
      state.error = null;
    },
    verifyKycStart: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    verifyKycSuccess: (state, action) => {
      state.loading = false;
      state.loginFailure = null;
      state.success = true;
    },
    verifyKycFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    uploadSelfieeStart: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    uploadSelfieeSuccess: (state, action) => {
      state.loading = false;
      state.loginFailure = null;
      state.success = true;
    },
    uploadSelfieeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    selfieSuccessStep: (state, action) => {
      state.loginFailure = null;
      state.success = true;
    },
    resetAuthenticationState: () => initialState,
    setReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
  },
});

export const {
  selfieSuccessStep,
  resendOtpStart,
  resendOtpFail,
  resendOttpSuccess,
  refreshLoginStart,
  refreshLoginSuccess,
  refreshLoginFailure,
  refreshMetamaskLoginStart,
  refreshMetamaskLoginSuccess,
  refreshMetamaskLoginFailure,
  loginStart,
  loginFailure,
  loginSuccess,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  verifyPasswordTokenStart,
  verifyPasswordTokenSuccess,
  verifyPasswordTokenFailure,
  metamaskLoginStart,
  metamaskLoginSuccess,
  metamaskLoginFailure,
  connectMetamaskStart,
  connectMetamaskSuccess,
  connectMetamaskFailure,
  resetError,
  resetSuccess,
  verifyKycStart,
  verifyKycSuccess,
  verifyKycFailure,
  uploadSelfieeStart,
  uploadSelfieeSuccess,
  uploadSelfieeFailure,
  resetAuthenticationState,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
