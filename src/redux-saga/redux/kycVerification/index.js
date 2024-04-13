import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  loading: false,
  loadKycData: false,
  kycData: null,
  selfieImage: null,
  isUpdateKycData: false,
  success: false,
  error: false,
  countries: [],
  states: [],
  cities: [],
};

const kycVerificationSlice = createSlice({
  name: "kycVerification",
  initialState,
  reducers: {
    getCountriesStart: (state) => {
      state.loading = true;
    },
    getCountriesSuccess: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    getCountriesFailure: (state) => {
      state.loading = false;
    },
    getStatesStart: (state) => {
      state.loading = true;
    },
    getStatesSuccess: (state, action) => {
      state.loading = false;
      state.states = action.payload;
    },
    getStatesFailure: (state) => {
      state.loading = false;
    },
    getCitiesStart: (state) => {
      state.loading = true;
    },
    getCitiesSuccess: (state, action) => {
      state.loading = false;
      state.cities = action.payload;
    },
    getCitiesFailure: (state) => {
      state.loading = false;
    },
    getUserKycDetailsStart: (state, action) => {
      state.loading = true;
    },
    getUserKycDetailsError: (state, action) => {
      state.loading = false;
    },
    getUserKycDetailsSuccess: (state, action) => {
      state.loading = false;
      state.kycData = action.payload.data;
      state.selfieImage = action.payload?.data?.profileImage;
      state.isUpdateKycData = action.payload.isUpdateKycData;
    },
    resetKycDetails: (state) => {
      state.kycData = null;
    },
    resetSelfieDetails: (state) => {
      state.selfieImage = null;
    },
    resetUpdateState: (state, action) => {
      toast.success(
        "Profile completed suceessfully wait for admin to approve your account"
      );
      state.isUpdateKycData = false;
    },
  },
});

export const {
  resetUpdateState,
  resetSelfieDetails,
  resetKycDetails,
  getCountriesStart,
  getCountriesSuccess,
  getCountriesFailure,
  getStatesStart,
  getStatesSuccess,
  getStatesFailure,
  getCitiesStart,
  getCitiesSuccess,
  getCitiesFailure,
  getUserKycDetailsSuccess,
  getUserKycDetailsError,
  getUserKycDetailsStart,
} = kycVerificationSlice.actions;

export default kycVerificationSlice.reducer;
