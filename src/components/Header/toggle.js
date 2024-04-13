import { toggleSidebar } from "../../redux-saga/redux/settings/themeSettings";

export const toggleSlider = (dispatch, sidebarOpen) => {
  if (sidebarOpen) {
    dispatch(toggleSidebar(false));
  } else {
    dispatch(toggleSidebar(true));
  }
};
