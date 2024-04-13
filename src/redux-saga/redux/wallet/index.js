import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  walletData: [],
  id: null,
  updatedBalance: null,
  nonCash: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    getWalletDataStart: (state) => {
      state.loading = true;
    },
    getWalletDataSuccess: (state, action) => {
      state.loading = false;
      state.walletData = action.payload?.userWallets;
      state.nonCash = action.payload?.nonCashWallets;
    },
    getWalletDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateWalletDataStart: (state) => {
      state.loading = true;
    },
    updateWalletDataSuccess: (state, action) => {
      state.loading = false;
      state.id = action.payload;
    },
    updateWalletDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    searchWalletDataStart: (state) => {
      state.loading = true;
    },
    searchWalletDataSuccess: (state, action) => {
      state.loading = false;
      state.walletData = action.payload;
    },
    searchWalletDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateBalanceStart: (state, action) => {
      state.updatedBalance = action.payload;
    },
  },
});

export const {
  getWalletDataStart,
  getWalletDataSuccess,
  getWalletDataFailure,
  updateWalletDataStart,
  updateWalletDataSuccess,
  updateWalletDataFailure,
  searchWalletDataStart,
  searchWalletDataSuccess,
  searchWalletDataFailure,
  updateBalanceStart,
} = walletSlice.actions;

export default walletSlice.reducer;
