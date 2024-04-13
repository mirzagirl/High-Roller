import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  convertLoading: false,
  generateLoading: false,
  withdrawLoading: false,
  withdrawSuccess: false,
  success: false,
  currencyList: [],
  generateAddress: null,
  coinList: [],
  convertedDepositBalance: null,
  convertedWithdrawBalance: null,
  selectedCurrency: null,
  successWithdraw: false,
  selectedCoin: null,
  error: null,
  isValidate: false,
  validateLoad: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    validateAddressStart: (state, action) => {
      state.validateLoad = true;
    },
    validateAddressSuccess: (state, action) => {
      state.validateLoad = false;
      state.isValidate = true;
    },
    validateAddressError: (state, action) => {
      state.validateLoad = false;
      state.isValidate = false;
    },
    getCurrencyListStart: (state, action) => {
      state.loading = true;
      state.currencyList = [];
      state.selectedCurrency = null;
    },
    getCurrencyListSuccess: (state, action) => {
      state.loading = false;
      state.currencyList = action.payload;
    },
    getCurrencyListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCoinsStart: (state, action) => {
      state.loading = true;
      state.coinList = [];
      state.currencyList = [];
    },
    getCoinsSuccess: (state, action) => {
      state.loading = false;
      state.coinList = action.payload?.data;
    },
    getCoinsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    generateAddressStart: (state, action) => {
      state.generateLoading = true;
    },
    generateAddressSuccess: (state, action) => {
      state.generateLoading = false;
      state.generateAddress = action.payload?.pay_address;
    },
    generateAddressFailure: (state, action) => {
      state.generateLoading = false;
      state.error = action.payload;
    },
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
      state.generateAddress = null;
    },
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
      state.generateAddress = null;
    },
    getConvertedWithdrawBalanceStart: (state, action) => {
      state.convertLoading = true;
    },
    getConvertedWithdrawBalanceSuccess: (state, action) => {
      state.convertLoading = false;
      state.convertedWithdrawBalance = action.payload;
    },
    getConvertedWithdrawBalanceFailure: (state, action) => {
      state.convertLoading = false;
    },
    getConvertedDespositBalanceSuccess: (state, action) => {
      state.convertLoading = false;
      state.convertedDepositBalance = action.payload;
    },
    getConvertedDepositBalanceStart: (state, action) => {
      state.convertLoading = true;
    },
    getConvertedDepositBalanceFailure: (state, action) => {
      state.convertLoading = false;
    },
    withdrawalRequestStart: (state, action) => {
      state.withdrawLoading = true;
      state.withdrawSuccess = false;
    },
    withdrawalRequestSuccess: (state, action) => {
      state.withdrawLoading = false;
      state.convertedBalance = null;
      state.withdrawSuccess = true;
    },
    withdrawalRequestFailure: (state, action) => {
      state.withdrawLoading = false;
      state.error = action.payload;
    },
    resetConvertedBalance: (state, action) => {
      state.convertedBalance = null;
    },
    resetPaymentState: (state) => {
      state.coinList = initialState.coinList;
      state.currencyList = initialState.currencyList;
      state.generateAddress = initialState.generateAddress;
      state.convertedBalance = initialState.convertedBalance;
      state.selectedCurrency = initialState.selectedCurrency;
      state.selectedCoin = initialState.selectedCoin;
    },
    clearDepositData: (state) => {
      state.coinList = initialState.coinList;
      state.currencyList = initialState.currencyList;
      state.generateAddress = initialState.generateAddress;
      state.convertedBalance = initialState.convertedBalance;
      state.selectedCurrency = initialState.selectedCurrency;
      state.selectedCoin = initialState.selectedCoin;
      state.convertedDepositBalance = initialState.convertedDepositBalance;
      state.convertedWithdrawBalance = initialState.convertedDepositBalance;
    },
    clearConvetedDepositCurrency: (state) => {
      state.convertedDepositBalance = initialState.convertedDepositBalance;
    },
    clearConvetedWithdrawCurrency: (state) => {
      state.convertedWithdrawBalance = initialState.convertedWithdrawBalance;
    },
  },
});

export const {
  clearDepositData,
  getCurrencyListStart,
  getCurrencyListSuccess,
  getCurrencyListFailure,
  generateAddressStart,
  generateAddressSuccess,
  generateAddressFailure,
  getCoinsStart,
  getCoinsSuccess,
  getCoinsFailure,
  setSelectedCoin,
  setSelectedCurrency,
  getConvertedBalanceStart,
  getConvertedBalanceSuccess,
  getConvertedBalanceFailure,
  withdrawalRequestStart,
  withdrawalRequestSuccess,
  withdrawalRequestFailure,
  resetConvertedBalance,
  resetPaymentState,
  getConvertedWithdrawBalanceStart,
  getConvertedWithdrawBalanceSuccess,
  getConvertedWithdrawBalanceFailure,
  getConvertedDespositBalanceSuccess,
  getConvertedDepositBalanceStart,
  getConvertedDepositBalanceFailure,
  clearConvetedDepositCurrency,
  clearConvetedWithdrawCurrency,
  validateAddressStart,
  validateAddressSuccess,
  validateAddressError,
} = paymentSlice.actions;

export default paymentSlice.reducer;
