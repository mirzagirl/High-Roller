import React, { useEffect, useState } from "react";

import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

import {
  forgotPasswordStart,
  resetError,
  resetSuccess,
} from "../../../../redux-saga/redux/auth/authentication";
import useStyles from "./ForgotPasswordModal.styles";
import { validateEmail } from "../../../../utils/helper";

const ForgotPasswordModal = ({
  handleCloseLogin,
  handleGoToForgotPassword,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [userNameOrEmail, setuserNameOrEmail] = useState("");

  const { loading, success, error } = useSelector(
    (state) => state.authentication
  );

  const handleEmail = (e) => {
    setuserNameOrEmail(e.target.value);
  };

  const handleSendLink = () => {
    if (!validateEmail(userNameOrEmail)) {
      toast.error(t("COMMON.EMAIL_VALIDATION"), { id: "validation" });
      dispatch(resetError());
      return;
    }
    dispatch(
      forgotPasswordStart({
        userNameOrEmail,
      })
    );
  };

  useEffect(() => {
    if (success) {
      dispatch(resetSuccess());
      handleCloseLogin();
    }

    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [loading, success, error, dispatch, handleCloseLogin, t]);

  return (
    <div>
      <Grid className={classes.authHeading}>
        <Grid className={classes.closeIcon}>
          <Box className={classes.closeIconWrap}>
            <CloseIcon
              onClick={handleGoToForgotPassword}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Typography variant="h5">{t("HEADER.FORGOT_PASSWORD")}</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.loginFormWrap}>
        <Grid className={classes.formGroup}>
          <TextField
            autoComplete="off"
            autoCorrect="off"
            type="userNameOrEmail"
            id="userNameOrEmail"
            placeholder={t("COMMON.EMAIL_ADDRESS")}
            variant="outlined"
            onChange={handleEmail}
            inputProps={{
              maxLength: 40, // Set the maximum character limit
            }}
          />
        </Grid>
        <Grid className={classes.authBtnWrap}>
          <Button className={classes.btnPrimary} onClick={handleSendLink}>
            {loading ? (
              <CircularProgress size="1.5rem" />
            ) : (
              t("HEADER.SEND_LINK")
            )}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPasswordModal;
