import React, { useCallback } from "react";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Game from "../../../Game";
import useStyles from "./Search.styles";
import { getSearchedGamesStart } from "../../../../../redux-saga/redux/casino/lobby";

const GamesSection = ({
  selectedCategory,
  selectedProvider,
  searchInput,
  offset,
  makeProviderCategoryFilter,
  handleSearchBox,
}) => {
  const classes = useStyles();
  const { searchGames, searchLoading, searchCount, moreSearchLoading } =
    useSelector((state) => state.casinoLobby);
  const dispatch = useDispatch();

  const handleMoreGames = () => {
    offset.current += 1;
    const providerCategoryFilter = makeProviderCategoryFilter();

    dispatch(
      getSearchedGamesStart({
        page: offset.current,
        limit: 12,
        search: searchInput?.length ? searchInput : null,
        loadMoreSeachedGames: true,
        ...providerCategoryFilter,
      })
    );
  };

  const getFilterMsg = useCallback(() => {
    let msg = "No Results Found";
    if (
      !Object.keys(selectedProvider).length &&
      !Object.keys(selectedCategory).length &&
      !searchInput?.length
    ) {
      msg = "Please select one or more filters to search for games";
    }

    return (
      <Typography variant="h6" align="justify">
        {msg}
      </Typography>
    );
  }, [searchInput, selectedCategory, selectedProvider]);

  return (
    <>
      <Grid className={classes.gamesWrapper}>
        <Grid
          container
          className={!searchGames?.length ? classes.searchGames : ""}
        >
          {searchLoading ? (
            <Grid textAlign="center">
              <CircularProgress />
            </Grid>
          ) : searchGames?.length > 0 ? (
            searchGames.map((game, index) => (
              <Game
                key={`${game.masterCasinoGameId}${index}`}
                thumbnailUrl={game.thumbnailUrl}
                name={game.name}
                gameId={game.masterCasinoGameId}
                handleSearchBox={handleSearchBox}
                searchGame={true}
                providerName={game?.MasterCasinoProvider?.name}
                categoryName={game?.MasterGameSubCategory?.name}
                isFavorite={!!game.isFavorite}
              />
            ))
          ) : (
            <Grid className={classes.searchImg}>{getFilterMsg()}</Grid>
          )}
        </Grid>
        <Grid textAlign="center">
          {!!(
            searchGames?.length &&
            !moreSearchLoading &&
            !searchLoading &&
            searchCount > searchGames?.length
          ) && (
            <Button
              onClick={() => handleMoreGames()}
              className={`${classes.btnPrimary} ${classes.loadMoreButton}`}
            >
              Load More Games
            </Button>
          )}
          {moreSearchLoading && (
            <Typography>
              <CircularProgress className={classes.moreGamesLoader} size={50} />
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default GamesSection;
