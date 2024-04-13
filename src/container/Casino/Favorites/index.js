import React, { useEffect, useRef, useState } from "react";

import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  Collapse,
  LinearProgress,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

import useStyles from "./Favorites.styles";
import { formatCategoryName } from "../../../utils/helper";
import { VIEW_ALL_GAMES_LIMIT } from "../../../utils/constants";
import Game from "../Game";
import { getFavoritesStart } from "../../../redux-saga/redux/casino/lobby/games";

const Favorites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const pageNumber = useRef(1);
  const [gameProgress, setGameProgress] = useState(0);
  const { favorites, loading, loadMoreFavorites, favoritesCount } = useSelector(
    (state) => state.favorites
  );
  useEffect(() => {
    if (favorites?.length != 0 && favoritesCount) {
      const gameProgressV = (favorites?.length / favoritesCount) * 100;
      setGameProgress(gameProgressV);
    }
  }, [favorites]);
  useEffect(() => {
    dispatch(
      getFavoritesStart({ limit: VIEW_ALL_GAMES_LIMIT, page: 1, isMobile })
    );
  }, [dispatch]);

  const handleMoreGames = () => {
    pageNumber.current += 1;
    dispatch(
      getFavoritesStart({
        limit: VIEW_ALL_GAMES_LIMIT,
        page: pageNumber.current,
        loadMoreFavorites: true,
        isMobile,
      })
    );
  };
  return (
    <div className={classes.gamesWrapper}>
      <Grid className={classes.contentWrap}>
        <div className={classes.favHeading}>
          <Typography variant="h5">{t("COMMON.FAVORITES")}</Typography>
        </div>
        <Grid className={classes.viewAllContentWrap}>
          <Collapse in={true}>
            <Grid container spacing={2}>
              {favorites?.length > 0
                ? favorites.map((game, index) => (
                    <>
                      <Game
                        key={`${game.masterCasinoGameId}${index}`}
                        thumbnailUrl={game.thumbnailUrl}
                        name={game.name}
                        gameId={game.masterCasinoGameId}
                        providerName={game?.MasterCasinoProvider?.name || null}
                        gameTag={game.tags}
                        categoryName={formatCategoryName(
                          game?.MasterGameSubCategory?.name
                        )}
                        isFavorite={!!game.isFavorite}
                        recallFav={VIEW_ALL_GAMES_LIMIT}
                      />
                    </>
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
          <Grid
            container
            textAlign="center"
            justifyContent="center"
            className={classes.favSection}
          >
            {!loadMoreFavorites &&
              !loading &&
              favoritesCount !== 0 &&
              favoritesCount > favorites?.length &&
              gameProgress !== 100 && (
                <>
                  <Grid className={classes.loadMoreBar}>
                    <Grid className={classes.ShowMoreBar}>
                      <Box className={classes.more}>
                        <LinearProgress
                          thickness={6}
                          value={gameProgress}
                          variant="determinate"
                          className={classes.headerLinearBar}
                        />
                        <p style={{ textAlign: "center" }}>
                          Displaying {favorites?.length} of {favoritesCount}
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              )}
            <Grid textAlign="center">
              {!loadMoreFavorites &&
                !loading &&
                favoritesCount !== 0 &&
                favoritesCount > favorites?.length && (
                  <Button
                    onClick={() => handleMoreGames()}
                    className={`${classes.btnPrimary} ${classes.loadMoreButton}`}
                  >
                    {"Show More"}
                  </Button>
                )}
              {loadMoreFavorites &&
                loading &&
                favoritesCount !== 0 &&
                favoritesCount > favorites?.length && (
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
      </Grid>
    </div>
  );
};

export default Favorites;
