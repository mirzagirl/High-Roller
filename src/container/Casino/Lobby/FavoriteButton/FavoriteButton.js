import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import {
  addRemoveFavoritesStart,
  resetSuccess,
} from "../../../../redux-saga/redux/casino/lobby/games";

const FavoriteButton = ({
  isFavorite = null,
  gameId,
  recallFav = null,
  classes = null,
}) => {
  const { favStatus } = useSelector((state) => state.favorites);
  const { metamaskLoggedIn, isLoggedIn } = useSelector(
    (state) => state.authentication
  );
  const [FavBtnActive, setFavBtnActive] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const addRemoveFavorite = () => {
    if (!(metamaskLoggedIn || isLoggedIn)) {
      toast.error(t("GAME.GAME_LOGIN_MSG"), {
        id: "GAME_LOGIN_MSG",
      });
      return;
    }
    dispatch(
      addRemoveFavoritesStart({
        gameId: parseInt(gameId),
        favStatus: FavBtnActive,
        recallFav,
      })
    );
  };

  useEffect(() => {
    if (favStatus?.gameId === parseInt(gameId)) {
      setFavBtnActive((current) => !current);
      dispatch(resetSuccess());
    }
  }, [favStatus, dispatch, gameId]);

  useEffect(() => {
    if (isFavorite) {
      setFavBtnActive(true);
    } else {
      setFavBtnActive(false);
    }
  }, [isFavorite]);

  return (
    <>
      <Button className="favBtnClass" onClick={addRemoveFavorite}>
        {FavBtnActive ? (
          <FavoriteOutlinedIcon />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </Button>
    </>
  );
};

export default FavoriteButton;
