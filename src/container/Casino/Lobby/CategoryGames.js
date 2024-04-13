import React, { useEffect, useCallback } from "react";

import {
  Grid,
  Typography,
  CircularProgress,
  debounce,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import useStyles from "./Lobby.styles";
import { carouselGameLimit } from "../../../utils/constants";
import { getGamesStart } from "../../../redux-saga/redux/casino/lobby";
import { formatCategoryName } from "../../../utils/helper";
import Game from "../Game";
import Provider from "../Provider";
import LiveTable from "../../../components/LiveTable";

const Games = ({ searchValue }) => {
  const classes = useStyles();
  const { games, loading } = useSelector((state) => state.casinoLobby);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getGamesStart({
        limit: 21,
        isMobile: isMobile,
        isFeatured: true,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    searchGames(searchValue);
  }, [searchValue]);

  const searchGames = useCallback(
    debounce((searchValue) => {
      dispatch(
        getGamesStart({
          limit: 21,
          isMobile: isMobile,
          isFeatured: true,
          search: searchValue,
        })
      );
    }, 500),
    []
  );

  const LeftButton = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.leftArrow} onClick={() => scrollPrev()}>
        <KeyboardArrowLeftTwoToneIcon />
      </Button>
    );
  };

  const RightButton = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.rightArrow} onClick={() => scrollNext()}>
        <NavigateNextTwoToneIcon />
      </Button>
    );
  };

  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <>
      <Grid className={classes.wrap}>
        {loading ? (
          <Grid textAlign="center">
            <CircularProgress className={classes.categoryLoader} size={50} />
          </Grid>
        ) : games?.length > 0 ? (
          games?.map((gameType) => {
            return gameType?.MasterCasinoGames?.length > 0 ? (
              <Grid key={gameType.name} className={classes.contentWrap}>
                <Grid className={classes.innerHeading}>
                  <Grid className={classes.innerHeadingLeft}>
                    {darkMode ? (
                      <img
                        src={
                          gameType?.iconName
                            ? gameType?.iconName
                            : "/images/star-icon.svg"
                        }
                        alt="Star Icon"
                      />
                    ) : (
                      <img
                        src={
                          gameType?.iconName
                            ? gameType?.iconName
                            : "/images/light-star-icon.svg"
                        }
                        alt="Star Icon"
                      />
                    )}
                    <Typography variant="h6" gutterBottom>
                      {formatCategoryName(gameType.name) || ""}
                    </Typography>
                  </Grid>

                  {gameType?.MasterCasinoGames?.length > 6 && (
                    <Link
                      to={`/view-all/false/${gameType.masterGameSubCategoryId}/${gameType.name}`}
                      className={classes.btnSecondary}
                    >
                      See all
                    </Link>
                  )}
                </Grid>
                <Grid
                  className={`${classes.filterWrap} ${classes.filterWrapSlider}`}
                >
                  <ScrollMenu
                    LeftArrow={
                      gameType?.MasterCasinoGames?.length > carouselGameLimit &&
                      LeftButton
                    }
                    RightArrow={
                      gameType?.MasterCasinoGames?.length > carouselGameLimit &&
                      RightButton
                    }
                    wrapperClassName="horizontalScrollWrapper"
                  >
                    {gameType?.MasterCasinoGames?.map((game, index) => (
                      <Game
                        providerName={game?.MasterCasinoProvider?.name || null}
                        key={`${game.masterCasinoGameId}${index}`}
                        thumbnailUrl={game.thumbnailUrl}
                        name={game.name}
                        gameId={game.masterCasinoGameId}
                        filterBy={"Category"}
                        filterName={formatCategoryName(gameType.name)}
                        searchGame={false}
                        isFavorite={!!game.isFavorite}
                      />
                    ))}
                  </ScrollMenu>
                </Grid>
              </Grid>
            ) : null;
          })
        ) : (
          <h1 className={classes.noGamesMsg}>No Games Found</h1>
        )}
      </Grid>

      <Grid>
        <Provider />
      </Grid>

      <Grid>
        <LiveTable />
      </Grid>
    </>
  );
};

export default Games;
