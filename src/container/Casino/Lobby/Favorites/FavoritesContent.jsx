import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getFavoritesStart } from "../../../../redux-saga/redux/casino/lobby/games";
import { CASINO_LOBBY_GAMES_LIMIT } from "../../../../utils/constants";
import useStyles from "../Lobby.styles";
import { formatCategoryName } from "../../../../utils/helper";
import Game from "../../Game";

const FavoritesContent = () => {
  const classes = useStyles();
  const { favorites, favoritesCount } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      getFavoritesStart({ limit: CASINO_LOBBY_GAMES_LIMIT, isMobile, page: 1 })
    );
  }, [dispatch]);

  return (
    <>
      {favorites && favorites?.length > 0 ? (
        <Grid className={classes.contentWrap}>
          <Grid className={classes.innerHeading}>
            <Grid className={classes.innerHeadingLeft}>
              <img
                src="/images/heart-icon-filled.png"
                className={classes.heartIcon}
                alt="Star Icon"
              />
              <Typography variant="h6" gutterBottom>
                {t("COMMON.FAVORITES")}
              </Typography>
            </Grid>
            {favoritesCount > CASINO_LOBBY_GAMES_LIMIT && (
              <Link to="/favorites" className={classes.btnSecondary}>
                {t("COMMON.VIEW_ALL")}
              </Link>
            )}
          </Grid>
          <Grid container spacing={2} className="gamesOuter">
            {favorites?.map((game, index) => (
              <Game
                categoryName={formatCategoryName(
                  game?.MasterGameSubCategory?.name
                )}
                providerName={game.MasterCasinoProvider?.name}
                key={`${game.masterCasinoGameId}${index}`}
                thumbnailUrl={game.thumbnailUrl}
                name={game.name}
                gameId={game.masterCasinoGameId}
                gameTag={game.tags}
                isFavorite={!!game.isFavorite}
                recallFav={CASINO_LOBBY_GAMES_LIMIT}
              />
            ))}
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default FavoritesContent;
