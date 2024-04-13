import React from "react";

import { Grid, Typography } from "@mui/material";

import useStyles from "./GameList.styles";

const GameList = () => {
  const classes = useStyles();
  return (
    <div className={classes.gameListWrap}>
      <Grid className={classes.gameListBg}>
        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>

        <Grid>
          <img src="/images/gameimg.png" alt="gameimg" />
          <Typography>Hilo</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default GameList;
