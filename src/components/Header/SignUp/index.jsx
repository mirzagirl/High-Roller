import React, { useEffect, useState } from "react";

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
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./SignUp.styles";
import {
  onValidUsername,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../../../utils/helper";
import { signUpStart } from "../../../redux-saga/redux/auth/authentication";
// import { getCurrenciesStart } from "../../../redux-saga/redux/currencies/currencies";

import "react-phone-input-2/lib/style.css";

const SignUp = ({ openOtpModel, handleOpenLogin, handleCloseSignUp }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [userName, setUsername] = useState("");
  const [referralCodeState, setReferralCode] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  const { loading, success } = useSelector((state) => state.authentication);
  const { referralCode } = useSelector((state) => state.casinoLobby);

  // const handleInputChange = (event) => {
  //   setIsChecked(event.target.value);
  // };

  const handleOtpModel = () => {
    openOtpModel();
    handleCloseSignUp();
  };

  const handleGoToLogin = () => {
    handleCloseSignUp();
    handleOpenLogin();
  };

  useEffect(() => {
    // dispatch(getCurrenciesStart());
    if (success) {
      handleOtpModel();
    }
  }, [dispatch, success]);

  const handleShow = (e) => {
    e.preventDefault();
    setShow((prevState) => !prevState);
  };

  const handleSignUp = () => {
    const validation = [];
    if (userName?.length === 0) {
      validation.push(t("HEADER.USERNAME_EMPTY_VALIDATION"));
    } else if (!onValidUsername(userName)) {
      validation.push(t("HEADER.USERNAME_VALIDATION"));
    }
    if (!validatePassword(password)) {
      validation.push(t("COMMON.PASSWORD_VALIDATION"));
    }

    if (confirmPassword?.length === 0) {
      validation.push(t("HEADER.CONFIRM_PASSWORD_REQUIRED"));
    }
    if (
      password?.length > 0 &&
      confirmPassword?.length > 0 &&
      !validateConfirmPassword(password, confirmPassword)
    ) {
      validation.push(t("COMMON.CONFIRM_PASSWORD_VALIDATION"));
    }
    if (!validateEmail(email)) {
      validation.push(t("COMMON.EMAIL_VALIDATION"));
    }

    if (validation?.length !== 0) {
      validation.forEach((message) => {
        toast.error(message);
      });
      return;
    }
    dispatch(
      signUpStart({
        userName,
        email,
        password: window.btoa(password),
        confirmPassword: window.btoa(confirmPassword),
        referralCode: referralCode ? referralCode : "",
      })
    );
  };
  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => {
    setChecked(!checked);
    return canBeSubmitted();
  };

  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <div>
      <Grid className={classes.signupContent}>
        <Grid container>
          <Grid item xs={12} md={12}>
            {/* <Grid className={classes.authHeading}>
              <Typography variant="h5">Create New Account</Typography>
            </Grid> */}

            <div className={classes.userForm}>
              {/* <Box onClick={hide} className={classes.closeIconWrap}> */}
              <Box className={classes.closeIconWrap}>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleCloseSignUp}
                />
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

            <Grid className={classes.signupFromWrap}>
              <div className={classes.loginSignupGrp}>
                <ul>
                  <li>
                    <Link onClick={handleGoToLogin} to="/">
                      {t("HEADER.LOGIN")}
                    </Link>
                  </li>

                  <li className={classes.active}>
                    <Link to="/">{t("HEADER.SIGN_UP")}</Link>
                  </li>
                </ul>
              </div>

              <Grid className={classes.mobileSignupmodal}>
                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Username
                  </FormLabel>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    required
                    id="u-name"
                    placeholder={t("COMMON.USERNAME")}
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    inputProps={{
                      autocomplete: "new-username",
                      form: {
                        autocomplete: "off",
                      },
                      maxLength: 30, // Set the maximum character limit
                    }}
                    InputLabelProps={{
                      FormLabelClasses: {
                        asterisk: classes.asterisk,
                      },
                    }}
                  />
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Email
                  </FormLabel>
                  <TextField
                    required
                    id="emailo"
                    placeholder={t("COMMON.EMAIL_ADDRESS")}
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    inputProps={{
                      autocomplete: "new-email",
                      form: {
                        autocomplete: "off",
                      },
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Password
                  </FormLabel>
                  <TextField
                    type={show ? "text" : "password"}
                    id="pwdp"
                    placeholder={t("COMMON.PASSWORD")}
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    inputProps={{
                      autocomplete: "new-password",
                      form: {
                        autocomplete: "off",
                      },
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                  <Grid className={classes.showPwd}>
                    <Link
                      onClick={handleShow}
                      className={classes.showLink}
                      href="#"
                    >
                      {" "}
                      {!show
                        ? t("COMMON.SHOW_PASSWORD")
                        : t("COMMON.HIDE_PASSWORD")}{" "}
                    </Link>
                  </Grid>
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Confirm Password
                  </FormLabel>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    type={show ? "text" : "password"}
                    id="c-pwd"
                    placeholder={t("COMMON.CONFIRM_PASSWORD")}
                    variant="outlined"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    inputProps={{
                      autocomplete: "new-confirm-password",
                      form: {
                        autocomplete: "off",
                      },
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel className={classes.formInput}>
                    Referral code
                  </FormLabel>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    id="refCode"
                    type="refCode"
                    placeholder={t("COMMON.REFERRAL_CODE")}
                    variant="outlined"
                    value={referralCodeState}
                    onChange={(e) => setReferralCode(e.target.value)}
                    inputProps={{
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                </Grid>
                <div className="custom-checkbox">
                  <label className="container">
                    <input type="checkbox" onClick={onCheckboxClick} />
                    <span className="checkmark"></span>I agree with user
                    agreement, and confirm that I am at least 18 years old!
                  </label>
                </div>
                <Grid className={classes.authBtnWrap}>
                  <Button
                    disabled={isDisabled}
                    className={
                      isDisabled ? classes.disabled : classes.btnPrimary
                    }
                    onClick={handleSignUp}
                  >
                    {loading ? <CircularProgress /> : t("HEADER.SIGN_UP")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
