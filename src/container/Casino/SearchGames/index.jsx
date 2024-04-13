import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { CircularProgress, debounce, Grid, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useStyles from "./SearchGames.styles";
import {
  resetSearchGames,
  getSearchedGamesStart,
} from "../../../redux-saga/redux/casino/lobby";
import { toggleGamesSearchBox } from "../../../redux-saga/redux/settings/themeSettings";
import Game from "../Game";

const SearchGames = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const { searchGames, searchLoading } = useSelector(
    (state) => state.casinoLobby
  );
  const { isGamesSearchBoxOpen } = useSelector((state) => state.themeSettings);

  const handleSearchBox = () => {
    dispatch(toggleGamesSearchBox(!isGamesSearchBoxOpen));
    dispatch(resetSearchGames());
  };
  const searchGamesDebounced = useCallback(
    debounce((searchValue) => {
      dispatch(
        getSearchedGamesStart({
          page: 1,
          limit: 10,
          search: searchValue ? searchValue : null,
        })
      );
    }, 500),
    []
  );
  const handleSearch = (e) => {
    if (e?.target?.value?.length > 20) return;
    setSearchValue(e?.target?.value);
    searchGamesDebounced(e?.target?.value);
    handleSearchBox();
  };
  const handleSearchClose = () => {
    setSearchValue("");
  };
  const dispatch = useDispatch();
  return (
    <>
      <Grid className={classes.customSearchbar}>
        {isMobile ? (
          <TextField
            autoComplete="off"
            autoCorrect="off"
            id="outlined-basic"
            variant="outlined"
            placeholder={"Search"}
            onChange={(e) => {
              handleSearch(e);
            }}
            value={""}
          />
        ) : (
          <TextField
            autoComplete="off"
            autoCorrect="off"
            s
            id="outlined-basic"
            variant="outlined"
            placeholder={"Search for Game"}
            onChange={(e) => {
              handleSearch(e);
            }}
            value={searchValue}
          />
        )}

        <img src="/images/search.png" alt="Search" />
      </Grid>

      {searchValue && !isMobile ? (
        <Grid className={classes.searchResult}>
          {searchLoading ? (
            <Grid textAlign="center">
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <Grid className={classes.gameResult}>
                {searchGames?.map((game, index) => (
                  <Game
                    key={`${game.masterCasinoGameId}${index}`}
                    thumbnailUrl={game.thumbnailUrl}
                    name={game.name}
                    gameId={game.masterCasinoGameId}
                    handleSearchBox={
                      isMobile ? handleSearchBox : handleSearchClose
                    }
                    searchGame={true}
                    providerName={game?.MasterCasinoProvider?.name}
                    categoryName={game?.MasterGameSubCategory?.name}
                    isFavorite={!!game.isFavorite}
                  />
                ))}
                {!searchLoading && searchGames?.length === 0 && (
                  <Grid display={"flex"} className={classes.noGames}>
                    <p>No games Found</p>
                  </Grid>
                )}
              </Grid>
              <CloseIcon
                onClick={() => setSearchValue("")}
                style={{ cursor: "pointer" }}
              />
            </>
          )}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchGames;
