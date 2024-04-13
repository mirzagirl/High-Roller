import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: false,
  promotions: [],
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    getPromotionsStart: (state, action) => {
      state.loading = true;
    },
    getPromotionsSuccess: (state, action) => {
      state.loading = false;
      state.promotions = action.payload;
    },
    getPromotionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getPromotionsStart,
  getPromotionsSuccess,
  getPromotionsFailure,
} = promotionsSlice.actions;

export default promotionsSlice.reducer;
