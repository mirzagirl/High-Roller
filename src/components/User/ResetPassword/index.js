import React, { useState } from "react";

import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./ResetPassword.styles";
import { validatePassword } from "../../../utils/helper";
import { resetPasswordStart } from "../../../redux-saga/redux/auth/resetPassword";

const initialState = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = ({ handleCloseAccountMenu }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [password, setPassword] = useState(initialState);
  const { loading } = useSelector((state) => state.resetPassword);

  const handlePasswordChange = () => {
    const { currentPassword, newPassword, confirmPassword } = password;

    if (!currentPassword) {
      toast.error(t("CHANGE_PASSWORD.CURRENT_PASSWORD_VALIDATION"));
      return;
    }
    if (!validatePassword(newPassword)) {
      toast.error(t("COMMON.PASSWORD_VALIDATION"));
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error(t("CHANGE_PASSWORD.PASSWORD_MATCH_VALIDATION"));
      return;
    }
    dispatch(
      resetPasswordStart({
        oldPassword: window.btoa(currentPassword),
        newPassword: window.btoa(newPassword),
      })
    );
    setPassword(initialState);
  };

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Grid className={classes.closeIcon}>
          <Box className={classes.closeIconWrap}>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={handleCloseAccountMenu}
            />
          </Box>
          <Typography variant="h4" gutterBottom>
            {t("CHANGE_PASSWORD.PASSWORD")}
          </Typography>
        </Grid>
        <Grid className={classes.myprofileForm}>
          <Grid className={classes.signupFromFname}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={classes.formGroup}>
                  <span>{t("CHANGE_PASSWORD.CURRENT_PASSWORD")}</span>
                  <TextField
                    autoComplete="new-password"
                    autoCorrect="new-password"
                    id="current-password"
                    placeholder={t("CHANGE_PASSWORD.CURRENT_PASSWORD")}
                    variant="outlined"
                    value={password.currentPassword}
                    onChange={(e) => {
                      setPassword((current) => ({
                        ...current,
                        currentPassword: e.target.value,
                      }));
                    }}
                    inputProps={{
                      maxLength: 40, // Set the maximum character limit
                    }}
                    type={showPassword.current ? "text" : "password"}
                  />
                  <Link
                    onClick={() => {
                      setShowPassword((currentState) => ({
                        ...showPassword,
                        current: !currentState.current,
                      }));
                    }}
                    className={classes.showLink}
                  >
                    {showPassword.current ? t("COMMON.HIDE") : t("COMMON.SHOW")}
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.formGroup}>
                  <span>{t("CHANGE_PASSWORD.NEW_PASSWORD")}</span>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    id="new-password"
                    placeholder={t("CHANGE_PASSWORD.NEW_PASSWORD")}
                    type={showPassword.new ? "text" : "password"}
                    variant="outlined"
                    value={password.newPassword}
                    onChange={(e) => {
                      setPassword((current) => ({
                        ...current,
                        newPassword: e.target.value,
                      }));
                    }}
                    inputProps={{
                      maxLength: 40, // Set the maximum character limit
                    }}
                  />
                  <Link
                    onClick={() => {
                      setShowPassword((currentState) => ({
                        ...showPassword,
                        new: !currentState.new,
                      }));
                    }}
                    className={classes.showLink}
                  >
                    {showPassword.new ? t("COMMON.HIDE") : t("COMMON.SHOW")}
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.formGroup}>
                  <span>{t("CHANGE_PASSWORD.CONFIRM_NEW_PASSWORD")}</span>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    id="confirm-new-password"
                    placeholder={t("CHANGE_PASSWORD.CONFIRM_NEW_PASSWORD")}
                    variant="outlined"
                    value={password.confirmPassword}
                    type={showPassword.confirm ? "text" : "password"}
                    onChange={(e) => {
                      setPassword((current) => ({
                        ...current,
                        confirmPassword: e.target.value,
                      }));
                    }}
                    inputProps={{
                      maxLength: 40, // Set the maximum character limit
                    }}
                  />
                  <Link
                    onClick={() => {
                      setShowPassword((currentState) => ({
                        ...showPassword,
                        confirm: !currentState.confirm,
                      }));
                    }}
                    className={classes.showLink}
                  >
                    {showPassword.confirm ? t("COMMON.HIDE") : t("COMMON.SHOW")}
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.authBtnWrap}>
            <Button
              onClick={() => handlePasswordChange()}
              className={classes.btnPrimary}
            >
              {loading ? <CircularProgress /> : t("COMMON.SAVE_CHANGES")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
