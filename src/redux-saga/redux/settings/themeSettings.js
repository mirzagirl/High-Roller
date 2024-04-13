import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatBoxOpen: false,
  darkMode: localStorage.getItem("theme") === "light" ? false : true,
  sidebarOpen: false,
  isGamesSearchBoxOpen: false,
  isDepositWithdrawOpen: false,
};

const themeSettingsSlice = createSlice({
  name: "themeSettings",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.darkMode = action.payload;
      if (action.payload) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    },
    toggleSidebar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleChatBox: (state, action) => {
      state.isChatBoxOpen = action.payload;
    },
    toggleGamesSearchBox: (state, action) => {
      state.isGamesSearchBoxOpen = action.payload;
    },
    toggleDepositWithdraw: (state, action) => {
      state.isDepositWithdrawOpen = action.payload;
    },
  },
});

export const {
  changeTheme,
  toggleSidebar,
  toggleChatBox,
  toggleGamesSearchBox,
  toggleDepositWithdraw,
} = themeSettingsSlice.actions;

export default themeSettingsSlice.reducer;
