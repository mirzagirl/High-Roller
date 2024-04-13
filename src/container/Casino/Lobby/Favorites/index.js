import React from "react";

import { useSelector } from "react-redux";

import FavoritesContent from "./FavoritesContent";

const Favorites = () => {
  const { isLoggedIn, metamaskLoggedIn } = useSelector(
    (state) => state.authentication
  );
  if (isLoggedIn || metamaskLoggedIn) {
    return <FavoritesContent />;
  }
  return <></>;
};

export default Favorites;
