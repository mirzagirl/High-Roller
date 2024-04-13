import React from "react";

import { List, MenuItem, Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import useStyles from "./Deposit.styles";

const Currency = ({ wallet }) => {
  const classes = useStyles();
  const { loading, nonCash } = useSelector((state) => state.wallet);

  return (
    <>
      <List className={classes.modalList}>
        {loading ? (
          <Grid className={classes.loading}>
            <CircularProgress size={25} />
          </Grid>
        ) : (
          wallet?.map((wallet) => {
            return (
              <>
                <MenuItem key={wallet.id} value={wallet.id}>
                  <span className={classes.currencyIcon}>
                    {" "}
                    <img src="/images/tetherr.png" alt="Tether icon" />{" "}
                    {"Available Balance"}
                  </span>
                  <span>
                    {" "}
                    <small>
                      {wallet?.amount
                        ? `$${wallet.amount.toFixed(2)}`
                        : "$0.00"}
                    </small>
                  </span>
                </MenuItem>
              </>
            );
          })
        )}
        {!loading && (
          <>
            <MenuItem key={nonCash?.id}>
              <span className={classes.currencyIcon}>
                {" "}
                <img src="/images/Dollar.svg" alt="Dollar icon" />{" "}
                {"Available Bonus"}
              </span>

              <p>
                {" "}
                <small>
                  {nonCash?.amount ? `$${nonCash.amount.toFixed(2)}` : "$0.00"}
                </small>
              </p>
            </MenuItem>
          </>
        )}
      </List>
    </>
  );
};

export default Currency;
