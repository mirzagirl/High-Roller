import React from "react";

import { Grid } from "@mui/material";

import useStyles from "./Livecasino.style";

const Livecasino = () => {
  const classes = useStyles();

  return (
    <div className={classes.casinoWrap}>
      <Grid className={classes.casinoBanner}>
        <img src="/images/casino-banner-1.jpg" alt="Casino" />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Grid className={classes.casinoCard}>
            <img src="/images/casino-banner-2.png" alt="Casino Card" />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid className={classes.casinoCardRight}>
            <Grid className={classes.casinoCardRightCard}>
              <img src="/images/casino-banner-3.png" alt="Casino Card" />
            </Grid>
            <Grid className={classes.casinoCardRightCard}>
              <img src="/images/casino-banner-4.png" alt="Casino Card" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Livecasino;
