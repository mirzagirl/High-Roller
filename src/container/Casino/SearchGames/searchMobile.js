import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { DialogContent, Grid, TextField } from "@mui/material";

import Modal from "../../../../src/hoc/modal/Modal";
import useStyles from "./SearchGames.styles";
import SearchModalContent from "./SearchModalContent";
import { resetSearchGames } from "../../../redux-saga/redux/casino/lobby";
import { toggleGamesSearchBox } from "../../../redux-saga/redux/settings/themeSettings";

const SearchGames = () => {
  const classes = useStyles();
  const { isGamesSearchBoxOpen } = useSelector((state) => state.themeSettings);
  const handleSearchBox = () => {
    dispatch(toggleGamesSearchBox(!isGamesSearchBoxOpen));
  };

  const dispatch = useDispatch();
  return (
    <>
      <Grid
        className={classes.customSearchbar}
        onClick={() => {
          dispatch(resetSearchGames());
          handleSearchBox();
        }}
      >
        {isMobile ? (
          <TextField
            autoComplete="off"
            autoCorrect="off"
            id="outlined-basic"
            variant="outlined"
            placeholder={"Search"}
            onChange={() => {
              dispatch(resetSearchGames());
              handleSearchBox();
            }}
            value="Search"
          />
        ) : (
          <TextField
            autoComplete="off"
            autoCorrect="off"
            id="outlined-basic"
            variant="outlined"
            placeholder={"Search for Game"}
            onChange={() => {
              dispatch(resetSearchGames());
              handleSearchBox();
            }}
            value="Search for Games"
          />
        )}

        <img src="/images/search.png" alt="Search" />
      </Grid>

      <Modal
        isShowing={isGamesSearchBoxOpen}
        className={classes.dialogcontainer}
        content={
          <DialogContent>
            <SearchModalContent handleSearchBox={handleSearchBox} />
          </DialogContent>
        }
        hide={() => {
          handleSearchBox();
          dispatch(resetSearchGames());
        }}
      />
    </>
  );
};

export default SearchGames;
