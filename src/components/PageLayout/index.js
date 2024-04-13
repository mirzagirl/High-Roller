import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import i18n from "i18next";
import { isMobile } from "react-device-detect";

import OpenSidebar from "./OpenSidebar";
import CloseSidebar from "./CloseSidebar";
import { changeTheme } from "../../redux-saga/redux/settings/themeSettings";
import { toggleSlider } from "../Header/toggle";
import { getFeaturedGamesStart } from "../../redux-saga/redux/casino/lobby/games";

export default function PageLayout() {
  const dispatch = useDispatch();
  const { sidebarOpen, darkMode } = useSelector((state) => state.themeSettings);
  const [gameList, setGamesList] = useState([]);

  useEffect(() => {
    dispatch(getFeaturedGamesStart());
  }, []);

  const { featuredGames, loading } = useSelector((state) => state.favorites);

  const [one, setOne] = useState(true);

  useEffect(() => {
    if (featuredGames?.length > 0 && one) {
      setGamesList(featuredGames);
      setOne(false);
    }
  }, [featuredGames]);

  const handleCloseLanguage = (value) => {
    i18n.changeLanguage(value);
    if (isMobile) toggleSlider(dispatch, sidebarOpen);
  };

  const switchTheme = () => {
    dispatch(changeTheme(!darkMode));
    if (isMobile) toggleSlider(dispatch, sidebarOpen);
  };

  return (
    <>
      {sidebarOpen ? (
        <OpenSidebar
          handleCloseLanguage={handleCloseLanguage}
          switchTheme={switchTheme}
          loading={loading}
          games={gameList}
        />
      ) : (
        !isMobile && (
          <CloseSidebar
            handleCloseLanguage={handleCloseLanguage}
            switchTheme={switchTheme}
            games={gameList}
            loading={loading}
          />
        )
      )}
    </>
  );
}
