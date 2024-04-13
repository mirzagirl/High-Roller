import React, { useEffect, useState } from "react";

import { CircularProgress, Grid, Link, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./Header.styles";
import { startPoll } from "../../redux-saga/redux/profile/myProfile";
import { resetSuccess } from "../../redux-saga/redux/auth/authentication";
import { getWalletDataStart } from "../../redux-saga/redux/wallet";
import { toggleDepositWithdraw } from "../../redux-saga/redux/settings/themeSettings";

const Wallet = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { darkMode } = useSelector((state) => state.themeSettings);

  const [wallet, setWallet] = useState([]);

  const { metamaskLoggedIn, isLoggedIn, success, metamaskSuccess } =
    useSelector((state) => state.authentication);

  const { isDepositWithdrawOpen } = useSelector((state) => state.themeSettings);

  const { walletData, loading, updatedBalance } = useSelector(
    (state) => state.wallet
  );

  useEffect(() => {
    if (metamaskLoggedIn || isLoggedIn) {
      dispatch(startPoll());
      dispatch(resetSuccess());
    }
  }, [dispatch, isLoggedIn, metamaskLoggedIn, metamaskSuccess, success]);

  useEffect(() => {
    if (updatedBalance) {
      setWallet((state) => {
        return state.map((e) => {
          return {
            ...e,
            total_amount: parseFloat(updatedBalance.balance),
          };
        });
      });
    }
  }, [updatedBalance]);

  useEffect(() => {
    if (!loading && walletData) {
      setWallet(walletData);
    }
  }, [walletData]);

  let paramId = localStorage.getItem("paramId");

  useEffect(() => {
    dispatch(getWalletDataStart());
    return () => {
      localStorage.removeItem("paramId");
    };
  }, [dispatch, paramId]);

  const handleWallet = (event) => {
    dispatch(getWalletDataStart());
    dispatch(toggleDepositWithdraw(!isDepositWithdrawOpen));
  };

  return (
    <Grid className={classes.balanceBtnWrap}>
      <Typography component="span" className={classes.btnPrimary}>
        <span className={classes.currencyIcon}>
          {" "}
          <img src="/images/Dollar.svg" alt="Dollar" />{" "}
        </span>

        {wallet
          ?.filter((a) => a.default === 1)
          ?.map((wallet) => (
            <>
              {loading ? (
                <CircularProgress size={25} />
              ) : wallet?.total_amount ? (
                `$${wallet.total_amount.toFixed(2)}`
              ) : (
                "$0.0"
              )}
            </>
          ))}
        <Link onClick={handleWallet}>
          <span className={classes.balanceIcon}>
            {" "}
            {darkMode ? (
              <img src="/images/wallet.svg" alt="Wallet icon" />
            ) : (
              <img src="/images/wallet.svg" alt="Wallet icon" />
            )}
          </span>
        </Link>
      </Typography>
    </Grid>
  );
};

export default Wallet;
