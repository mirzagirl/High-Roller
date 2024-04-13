import React from "react";

import { Grid, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import FavoriteButton from "../Lobby/FavoriteButton/FavoriteButton";
import useStyles from "../Lobby/Lobby.styles";

const Game = ({
  thumbnailUrl,
  name,
  gameId,
  handleSearchBox,
  searchGame,
  isFavorite = null,
  providerName,
  recallFav = null,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const Navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.authentication);

  const handleGameLaunch = (e) => {
    if (!isLoggedIn) {
      toast.error(t("GAME.GAME_LOGIN_MSG"), {
        id: "GAME_LOGIN_MSG",
      });
      return;
    }
    if (searchGame) {
      handleSearchBox();
    }
    Navigate(`/game/${gameId}`);
  };
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent potential infinite loop if the default image also fails to load.
    e.target.src = "/images/HRD.png"; // Replace with the path to your default image.
    e.target.alt = "Default Image"; //
  };
  return (
    <Grid item className={classes.sliderGame}>
      <Grid className={classes.casinoCard}>
        <Grid to={`/game/${gameId}`} style={{ height: "100%" }}>
          <img
            src={thumbnailUrl || "/images/HR.png"}
            onError={handleImageError}
            alt="Casino Card"
          />
          <Box className={classes.imageHover}>
            {isLoggedIn && (
              <FavoriteButton
                isFavorite={isFavorite}
                favBtnClass={classes.favIconWrap}
                gameId={gameId}
                recallFav={recallFav}
              />
            )}
            <Button
              type="button"
              className="playBtn"
              onClick={() => handleGameLaunch()}
            >
              <img
                src="/images/play-btn.svg"
                alt="play btn"
                className={classes.playBtn}
              />
              <p>{name}</p>
              <p className={classes.providerName}>
                {providerName || "provider"}
              </p>
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid className={classes.casinoOverlay}>
        <Typography>{name || "Game"}</Typography>
      </Grid>
    </Grid>
  );
};

export default Game;
