import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  userDetails: {},
  walletAmount: "",
  walletLoading: false,
  userGameHistory: {},
  socketInstance: null,
};

const myProfileSlice = createSlice({
  name: "myProfile",
  initialState,
  reducers: {
    getUserGameHistoryStart: (state, action) => {
      state.loading = true;
    },
    getUserGameHistoryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUserGameHistorySuccess: (state, action) => {
      state.loading = false;
      state.userGameHistory = action.payload;
    },
    getUserProfileDetailsStart: (state, action) => {
      state.loading = true;
    },
    getUserProfileDetailsSuccess: (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
    },
    getUserProfileDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserProfileStart: (state, action) => {
      state.loading = true;
    },
    updateUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userDetails = action.payload;
    },
    updateUserProfileFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    getWalletBalanceSuccess: (state, action) => {
      state.walletLoading = false;
      state.walletAmount = action.payload;
    },
    startPoll: () => {},
    resetMyProfileState: (state) => {
      state.userDetails = initialState.userDetails;
      state.walletAmount = initialState.walletAmount;
      state.userGameHistory = initialState.userGameHistory;
    },
    setSocketBalanceInstance: (state, action) => {
      state.socketInstance = action.payload;
    },
  },
});

export const {
  setSocketBalanceInstance,
  getUserProfileDetailsStart,
  getUserProfileDetailsSuccess,
  getUserProfileDetailsFailure,
  updateUserProfileStart,
  updateUserProfileSuccess,
  updateUserProfileFailure,
  getWalletBalanceSuccess,
  startPoll,
  resetMyProfileState,
  getUserGameHistoryStart,
  getUserGameHistoryError,
  getUserGameHistorySuccess,
} = myProfileSlice.actions;

export default myProfileSlice.reducer;
