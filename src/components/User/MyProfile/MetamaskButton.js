import React from "react";

import { Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./MyProfile.styles";
import { connectMetamaskStart } from "../../../redux-saga/redux/auth/authentication";

const MetamaskButton = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { metamaskConnected, metamaskConnectLoading, userId } = useSelector(
    (state) => state.authentication
  );

  const handleLoginMetamask = () => {
    dispatch(connectMetamaskStart(userId));
  };

  return (
    <>
      {!metamaskConnected ? (
        <Typography align="center">
          <Button
            className={classes.metamaskBtn}
            varient="contained"
            color="primary"
            onClick={() => handleLoginMetamask()}
          >
            {metamaskConnectLoading ? (
              <CircularProgress />
            ) : (
              "Connect with Metamask"
            )}
          </Button>
        </Typography>
      ) : null}
    </>
  );
};

export default MetamaskButton;
