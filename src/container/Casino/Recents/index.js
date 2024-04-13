import React, { useEffect } from "react";

import { Grid, Typography, CircularProgress, Collapse } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import useStyles from "./Recents.styles";
import Game from "../Game";
import { getRecentsGamesStart } from "../../../redux-saga/redux/casino/lobby/games";

const Recents = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { recentsGames, loading } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getRecentsGamesStart());
  }, [dispatch]);

  return (
    <div className={classes.gamesWrapper}>
      <Grid className={classes.contentWrap}>
        <div className={classes.favHeading}>
          <Typography variant="h5">{t("COMMON.RECENTS")}</Typography>
        </div>
        <Grid className={classes.viewAllContentWrap}>
          <Collapse in={true}>
            <Grid container spacing={2}>
              {recentsGames?.length > 0
                ? recentsGames.map((game, index) => (
                    <Game
                      providerName={game?.MasterCasinoProvider?.name || null}
                      key={`${game.masterCasinoGameId}${index}`}
                      thumbnailUrl={game.MasterCasinoGame?.thumbnailUrl}
                      name={game.MasterCasinoGame?.name}
                      gameId={game.MasterCasinoGame?.masterCasinoGameId}
                      isFavorite={!!game?.MasterCasinoGame?.isFavorite}
                    />
                  ))
                : !loading && (
                    <Grid
                      className={classes.noGamesMsg}
                      justifyContent="center"
                    >
                      <h2>{t("LOBBY.NO_GAMES_MSG")}</h2>
                    </Grid>
                  )}
            </Grid>
          </Collapse>
          <Grid textAlign="center">
            {loading && (
              <Typography>
                <CircularProgress
                  className={classes.moreGamesLoader}
                  size={50}
                />
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Recents;
