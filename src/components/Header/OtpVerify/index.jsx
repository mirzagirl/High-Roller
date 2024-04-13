import React, { useEffect, useState } from "react";

import OtpInput from "react-otp-input";
import { Box, Grid, Button, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import useStyles from "./OtpVerify.styles";
import {
  verifyEmailStart,
  resendOtpStart,
  resetAuthenticationState,
} from "../../../redux-saga/redux/auth/authentication";
export default function OtpVerify({ closeOtpModel, openKycModel }) {
  const [otp, setOtp] = useState("");
  const { success, loading } = useSelector((state) => state.authentication);
  const handleOpneKycModel = () => {
    closeOtpModel();
    openKycModel();
  };
  const classes = useStyles();
  const handleChange = (otp) => {
    setOtp(otp);
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOtpSubmit = () => {
    if (otp?.length < 6) {
      toast.error("Please enter complete OTP", { id: "otp" });
      return;
    }
    dispatch(
      verifyEmailStart({
        otp: parseInt(otp),
        id: localStorage.getItem("signId"),
      })
    );
  };
  const handleResendOtp = () => {
    dispatch(resendOtpStart({ id: localStorage.getItem("signId") }));
  };
  useEffect(() => {
    if (success) {
      handleOpneKycModel();
    }
  }, [dispatch, success]);

  useEffect(() => {
    return () => {
      dispatch(resetAuthenticationState());
    };
  }, []);

  const { darkMode } = useSelector((state) => state.themeSettings);
  return (
    <div>
      <div className={classes.userForm}>
        <Box className={classes.closeIconWrap}>
          <CloseIcon onClick={closeOtpModel} style={{ cursor: "pointer" }} />
        </Box>
        {darkMode ? (
          <img src="/images/modal-banner.png" alt="modal banner img" />
        ) : (
          <img src="/images/light-modal-banner.png" alt="modal banner img" />
        )}
      </div>

      <Grid className={classes.signupFromWrap}>
        <div className={classes.loginSignupGrp}>
          <ul>
            <li>
              <Link to="/">{t("HEADER.LOGIN")}</Link>
            </li>

            <li className={classes.active}>
              <Link to="/">{t("HEADER.SIGN_UP")}</Link>
            </li>
          </ul>
        </div>

        <Grid className={classes.verifyHeading}>
          <p>Verify Your Email</p>
        </Grid>

        <Grid className={classes.verifyParagraph}>
          <p>
            We have sent the code to your email, please enter code to the field
            below.
          </p>
        </Grid>

        <Grid className={classes.textArea}>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            // separator={<span>-</span>}
          />
        </Grid>

        <Grid className={classes.sendCode}>
          <p>
            Not received code?
            <Link onClick={handleResendOtp}>Send code again</Link>
          </p>
        </Grid>

        <Grid className={classes.authBtnWrap}>
          <Button className={classes.btnPrimary} onClick={handleOtpSubmit}>
            {loading ? <CircularProgress /> : "Enter Code"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
