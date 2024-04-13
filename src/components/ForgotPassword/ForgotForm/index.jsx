import React, { useEffect, useState } from "react";

import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./ForgotForm.styles";
import { isMatchPassword, validatePassword } from "../../../utils/helper";
import {
  resetError,
  resetSuccess,
  verifyPasswordTokenStart,
} from "../../../redux-saga/redux/auth/authentication";

const ForgotForm = ({ id, token }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const { loading, success, error } = useSelector(
    (state) => state.authentication
  );

  const handleUpdatePassword = () => {
    if (!validatePassword(password)) {
      toast.error(t("COMMON.PASSWORD_VALIDATION"));
      return;
    }
    if (!isMatchPassword(password, confirmPassword)) {
      toast.error(t("CHANGE_PASSWORD.PASSWORD_MATCH_VALIDATION"));
      dispatch(resetError());
      return;
    }
    dispatch(
      verifyPasswordTokenStart({
        id,
        token,
        password: window.btoa(password),
      })
    );
  };

  useEffect(() => {
    if (success && !loading) {
      dispatch(resetSuccess());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    if (error && !loading) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [loading, success, error, navigate, dispatch, t]);

  return (
    <div className={classes.container}>
      <Grid className={classes.forgotFormContainer}>
        <Typography variant="h4" gutterBottom>
          {t("HEADER.FORGOT_PASSWORD_UCASE")}
        </Typography>
        <Grid className={classes.forgotForm}>
          <Grid className={classes.forgotFormWrap}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <div className={classes.formGroup}>
                  <form noValidate>
                    <TextField
                      autoComplete="off"
                      autoCorrect="off"
                      type={showPassword ? "text" : "password"}
                      placeholder={t("CHANGE_PASSWORD.NEW_PASSWORD")}
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                      inputProps={{
                        maxLength: 40, // Set the maximum character limit
                      }}
                    />
                    <Link
                      href="#"
                      className={classes.showLink}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    >
                      {!showPassword ? t("COMMON.SHOW") : t("COMMON.HIDE")}
                    </Link>
                  </form>
                </div>
              </Grid>
              <Grid item sm={12}>
                <div className={classes.formGroup}>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t("CHANGE_PASSWORD.CONFIRM_NEW_PASSWORD")}
                    variant="outlined"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    inputProps={{
                      maxLength: 40, // Set the maximum character limit
                    }}
                  />
                  <Link
                    href="#"
                    className={classes.showLink}
                    onClick={() =>
                      setShowConfirmPassword((prevState) => !prevState)
                    }
                  >
                    {!showConfirmPassword ? t("COMMON.SHOW") : t("COMMON.HIDE")}
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.authBtnWrap}>
            <Button
              className={classes.btnPrimary}
              onClick={handleUpdatePassword}
            >
              {loading ? <CircularProgress /> : t("HEADER.UPDATE_PASSWORD")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotForm;
