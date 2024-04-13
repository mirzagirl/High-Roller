import React, { useEffect, useState } from "react";

import { CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import useEffectOnce from "../../utils/useEffectOnce";
import {
  resetError,
  verifyEmailStart,
} from "../../redux-saga/redux/auth/authentication";
import useStyles from "./VerifyEmail.styles";

const VerifyEmail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showText, setShowText] = useState("");

  const { loading, success, error } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    if (!token || !id) {
      setShowText("Token and Id required");
      return;
    }

    dispatch(
      verifyEmailStart({
        token,
        id,
      })
    );
  }, [dispatch, searchParams]);

  useEffectOnce(() => {
    if (error && typeof error === "string") {
      setShowText(error);
    }

    if (error) {
      dispatch(resetError());
    }
  }, [dispatch, error, navigate, success]);

  return (
    <div className={classes.verifyEmail}>
      <Grid className={classes.verifyEmailContainer}>
        <Typography variant="h4" gutterBottom>
          EMAIL VERIFICATION
        </Typography>
        <Grid className={classes.content}>
          <Grid className={classes.verifyEmailWrap}>
            <Grid container spacing={2}>
              <Grid item sm={12} textAlign={"center"}>
                {loading ? (
                  <CircularProgress color="secondary" size="2rem" />
                ) : null}
                {!loading && success ? (
                  <Typography>Your email has been verified.</Typography>
                ) : null}

                {!loading && showText ? (
                  <Typography>{showText}</Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VerifyEmail;
