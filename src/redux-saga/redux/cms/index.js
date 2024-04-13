import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  cmsData: [],
};

const cmsSlice = createSlice({
  name: "cms",
  initialState,
  reducers: {
    getCMSDataStart: (state) => {
      state.loading = true;
    },
    getCMSDataSuccess: (state, action) => {
      state.loading = false;
      state.cmsData = action.payload;
    },
    getCMSDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCMSDataStart, getCMSDataSuccess, getCMSDataFailure } =
  cmsSlice.actions;

export default cmsSlice.reducer;
