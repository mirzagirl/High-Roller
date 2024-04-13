import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: false,
  topBets: [],
  latestBet: null,
};

const liveTableSlice = createSlice({
  name: "liveTable",
  initialState,
  reducers: {
    getTopBetsStart: (state, action) => {
      state.loading = true;
    },
    getTopBetsSuccess: (state, action) => {
      state.loading = false;
      state.topBets = action.payload;
    },
    getTopBetsFailure: (state, action) => {
      state.loading = false;
    },
    updateBetData: (state, action) => {
      if (action.payload?.betsDataObj)
        state.latestBet = action.payload?.betsDataObj;
    },
    startGetBet: () => {},
    clearLatestBet: (state) => {
      state.latestBet = "";
    },
  },
});

export const {
  getLatestBet,
  getTopBetsFailure,
  getTopBetsStart,
  getTopBetsSuccess,
  startGetBet,
  updateBetData,
  clearLatestBet,
} = liveTableSlice.actions;

export default liveTableSlice.reducer;
