import React from "react";

import { List, MenuItem, TextField, Grid } from "@mui/material";

import useStyles from "./Deposit.styles";

const Wallet = () => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.modalList}>
        <div className={classes.topIcon}>
          <img src="/images/top-icon.svg" alt="" />
        </div>

        <Grid className={classes.modalInputWrap}>
          <TextField
            autoComplete="off"
            autoCorrect="off"
            InputLabelProps={{
              style: {
                color: "#4D4D5B",
                fontWeight: "400",
                lineHeight: "8px",
                fontSize: "16px",
                overflow: "visible",
              },
            }}
            placeholder="Search for Token"
            className={classes.modalInput}
          />
          <img
            src="/images/search.svg"
            alt="search"
            className={classes.searchIcon}
          />
        </Grid>

        <MenuItem value={1}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
        <MenuItem value={1}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
        <MenuItem value={2}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
        <MenuItem value={1}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
        <MenuItem value={2}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
        <MenuItem value={2}>
          <span className={classes.currencyIcon}>
            {" "}
            <img src="/images/b-curruncey.svg" alt="b-curruncey icon" /> Stack
          </span>
          <span>
            {" "}
            <small>0</small>.000000
          </span>
        </MenuItem>
      </List>

      <Grid className={classes.walletBottom}>
        <div>
          <p>ETH Prices test:</p>
          <p>View in USD</p>
        </div>

        <div>
          <p>
            <span>$0</span>
            .000000
          </p>
          <p>Hide Small</p>
        </div>
      </Grid>
    </>
  );
};

export default Wallet;
