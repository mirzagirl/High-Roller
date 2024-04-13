import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  currencies: [],
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    getCurrenciesStart: (state) => {
      state.loading = true;
    },
    getCurrenciesSuccess: (state, action) => {
      state.loading = false;
      state.currencies = action.payload;
    },
    getCurrenciesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCurrenciesStart,
  getCurrenciesSuccess,
  getCurrenciesFailure,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
