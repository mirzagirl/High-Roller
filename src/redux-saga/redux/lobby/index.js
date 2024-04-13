import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: false,
  providers: [],
};

const lobbySlice = createSlice({
  name: "lobby",
  initialState,
  reducers: {
    getProvidersStart: (state, action) => {
      state.loading = true;
    },
    getProvidersSuccess: (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
      state.providers = action.payload;
    },
    getProvidersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProvidersStart, getProvidersSuccess, getProvidersFailure } =
  lobbySlice.actions;

export default lobbySlice.reducer;
