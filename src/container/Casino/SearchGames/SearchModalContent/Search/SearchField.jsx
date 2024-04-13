import React, { useCallback } from "react";

import { Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import useStyles from "./Search.styles";
import {
  getSearchedGamesStart,
  resetSearchGames,
} from "../../../../../redux-saga/redux/casino/lobby";

const SearchField = ({
  searchInput,
  offset,
  setSearch,
  makeProviderCategoryFilter,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChangeSearch = useCallback(
    (event) => {
      offset.current = 1;
      const searchValue = event.target.value;
      setSearch(searchValue);
      const providerCategoryFilter = makeProviderCategoryFilter();
      if (
        !providerCategoryFilter.providerId &&
        !providerCategoryFilter.categoryId &&
        !searchValue?.length
      ) {
        dispatch(resetSearchGames());
        return;
      }
      dispatch(
        getSearchedGamesStart({
          page: 1,
          limit: 12,
          search: (searchValue && searchValue.trim()) || null,
          ...providerCategoryFilter,
        })
      );
    },
    [dispatch, makeProviderCategoryFilter, offset, setSearch]
  );

  return (
    <Grid className={classes.headerSearch}>
      <TextField
        autoComplete="off"
        autoCorrect="off"
        id="outlined-basic"
        variant="outlined"
        placeholder="Search all games"
        onChange={handleChangeSearch}
        value={searchInput}
        inputProps={{
          maxLength: 40, // Set the maximum character limit
        }}
      />
      <img src="/images/search.png" alt="Search" />
    </Grid>
  );
};

export default SearchField;
