import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  myBets: [],
  transactions: [],
  totalPages: 0,
  betsTotalPages: 0,
  currentPage: 1,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getTransactionsStart: (state, action) => {
      state.loading = true;
    },
    getTransactionsSuccess: (state, action) => {
      state.loading = false;
      state.transactions = action.payload.transactionList;
      state.totalPages = action.payload.totalPage;
    },
    getTransactionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMyBetsStart: (state, action) => {
      state.loading = true;
    },
    getMyBetsSuccess: (state, action) => {
      state.loading = false;
      state.myBets = action.payload.transactionList;
      state.betsTotalPages = action.payload.totalPage;
      state.currentPage = action.payload.currentPage;
    },
    getMyBetsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetBets: (state) => {
      state.myBets = initialState.myBets;
    },
    resetTransaction: (state) => {
      state.transactions = initialState.transactions;
    },
  },
});

export const {
  resetTransaction,
  resetBets,
  getTransactionsStart,
  getTransactionsSuccess,
  getTransactionsFailure,
  getMyBetsStart,
  getMyBetsSuccess,
  getMyBetsFailure,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
