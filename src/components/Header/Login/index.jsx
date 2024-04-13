import React, { useState } from "react";

import {
  Box,
  Grid,
  TextField,
  Link,
  Button,
  CircularProgress,
  FormLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import useStyles from "./Login.styles";
import { validatePassword } from "../../../utils/helper";
import { loginStart } from "../../../redux-saga/redux/auth/authentication";
import ForgotPasswordModal from "./ForgotPasswordModal";

const Login = ({ handleOpenSignUp, handleCloseLogin, openOtpModel }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const { loading } = useSelector((state) => state.authentication);

  // const { referralCode } = useSelector((state) => state.casinoLobby);

  const handleGoToSignUp = () => {
    handleCloseLogin();
    handleOpenSignUp();
  };
  const handleLoginAuth = () => {
    const validation = [];
    // if (!validateEmail(userNameOrEmail)) {
    //   validation.push(t("COMMON.EMAIL_VALIDATION"));
    // }
    if (userNameOrEmail?.length === 0) {
      validation.push(t("Username Or Email Required"));
    }
    if (!validatePassword(password)) {
      validation.push(t("HEADER.PASSWORD_VALIDATION_FAILED"));
    }
    if (validation?.length !== 0) {
      validation.forEach((message) => {
        toast.error(message);
      });
      return;
    }

    dispatch(
      loginStart({
        userNameOrEmail,
        password: window.btoa(password),
      })
    );
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setUserNameOrEmail(e.target.value);
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow((prevState) => !prevState);
  };

  const handleGoToForgotPassword = () => {
    setUserNameOrEmail("");
    setPassword("");
    setForgotPassword((prevState) => !prevState);
  };
  const { darkMode } = useSelector((state) => state.themeSettings);
  return (
    <div>
      {forgotPassword ? (
        <ForgotPasswordModal
          handleCloseLogin={handleCloseLogin}
          handleGoToForgotPassword={handleGoToForgotPassword}
        />
      ) : (
        <>
          <div className={classes.userForm}>
            <Box onClick={handleCloseLogin} className={classes.closeIconWrap}>
              <CloseIcon style={{ cursor: "pointer" }} />
            </Box>
            {darkMode ? (
              <img src="/images/modal-banner.png" alt="modal banner img" />
            ) : (
              <img
                src="/images/light-modal-banner.png"
                alt="modal banner img"
              />
            )}
          </div>

          <Grid className={classes.loginFormWrap}>
            <div className={classes.loginSignupGrp}>
              <ul>
                <li className={classes.active}>
                  <Link to="/">{t("HEADER.LOGIN")}</Link>
                </li>

                <li>
                  <Link to="/" onClick={handleGoToSignUp}>
                    {t("HEADER.SIGN_UP")}
                  </Link>
                </li>
              </ul>
            </div>
            <Grid className={classes.formGroup}>
              <FormLabel required className={classes.formInput}>
                Username or email
              </FormLabel>
              <TextField
                autoComplete="off"
                autoCorrect="off"
                type="userNameOrEmail"
                id="userNameOrEmail"
                placeholder={t("COMMON.EMAIL_ADDRESS")}
                variant="outlined"
                onChange={handleEmail}
                inputProps={{
                  autocomplete: "new-email",
                  form: {
                    autocomplete: "off",
                  },
                  maxLength: 40, // Set the maximum character limit
                }}
              />
            </Grid>
            <Grid className={classes.formGroup}>
              <FormLabel required className={classes.formInput}>
                Password
              </FormLabel>
              <TextField
                autoComplete="off"
                autoCorrect="off"
                type={show ? "text" : "password"}
                id="pwd"
                placeholder={t("COMMON.PASSWORD")}
                variant="outlined"
                onChange={handlePassword}
                inputProps={{
                  autocomplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                  maxLength: 40, // Set the maximum character limit
                }}
              />
              <Link href="#" className={classes.showLink} onClick={handleShow}>
                {!show ? t("COMMON.SHOW") : t("COMMON.HIDE")}
              </Link>
            </Grid>

            <Grid className={classes.forgotLink}>
              <Button onClick={handleGoToForgotPassword}>
                {t("HEADER.FORGOT_PASSWORD_MARK")}
              </Button>
            </Grid>

            <Grid className={classes.authBtnWrap}>
              <Button className={classes.btnPrimary} onClick={handleLoginAuth}>
                {loading ? (
                  <CircularProgress size="1.5rem" />
                ) : (
                  t("HEADER.LOGIN")
                )}
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Login;
