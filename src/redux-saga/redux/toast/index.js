import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  error: false,
  msg: "",
  tKey: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showSuccessMessage: (state, action) => {
      if (action.payload.tKey) {
        state.tKey = action.payload.tKey;
      }
      if (action.payload.msg) {
        state.msg = action.payload.msg;
      }
      state.success = true;
    },
    showErrorMessage: (state, action) => {
      if (action.payload.tKey) {
        state.tKey = action.payload.tKey;
      }
      if (action.payload.msg) {
        state.msg = action.payload.msg;
      }
      state.error = true;
    },
    resetState: (state, action) => {
      state.success = false;
      state.error = false;
      state.msg = "";
      state.tKey = "";
    },
    navigateTarget: (state, action) => {
      if (action.payload) {
        state.target = action.payload;
      }
    },
  },
});

export const {
  showSuccessMessage,
  showErrorMessage,
  resetState,
  navigateTarget,
} = toastSlice.actions;

export default toastSlice.reducer;
