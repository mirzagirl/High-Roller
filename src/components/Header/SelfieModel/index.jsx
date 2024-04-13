import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Button, FormLabel, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";

import useStyles from "./SelfieModel.styles";
import {
  uploadSelfieeStart,
  selfieSuccessStep,
  resetAuthenticationState,
} from "../../../redux-saga/redux/auth/authentication";
import {
  resetSelfieDetails,
  resetUpdateState,
} from "../../../redux-saga/redux/kycVerification";

export default function SelfieModel({ openSelfieModel, closeSelfieModel }) {
  const classes = useStyles();
  const [selfiee, setSelfiee] = useState("");
  const dispatch = useDispatch();
  const { success, loading } = useSelector((state) => state.authentication);
  const { t } = useTranslation();

  useEffect(() => {
    if (success) {
      dispatch(resetSelfieDetails());
      openSelfieModel();
    }
  }, [dispatch, success]);

  const { selfieImage, loadKycData, isUpdateKycData } = useSelector(
    (state) => state.kycVerification
  );

  useEffect(() => {
    if (selfieImage && !loadKycData && isUpdateKycData) {
      setSelfiee(selfieImage);
      LoadSelfiee({ update: true, event: selfieImage });
    }
  }, [selfieImage, loadKycData, isUpdateKycData]);

  const LoadSelfiee = ({ update, event }) => {
    var output = document.getElementById("output");
    if (!update) {
      output.src = URL.createObjectURL(event?.target?.files[0]);
    } else {
      output.src = event;
    }
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
    if (!update) setSelfiee(event?.target?.files[0]);
  };
  useEffect(() => {
    return () => {
      dispatch(resetAuthenticationState());
    };
  }, []);

  const handleSelfieeSubmit = () => {
    const usrId = parseInt(localStorage.getItem("signId"));
    const validation = [];
    if (!selfiee) {
      validation.push(t("HEADER.SELFIEE_VALIDATION"));
    }
    if (selfiee) {
      if (selfiee?.type) {
        if (
          !(
            selfiee.type === "image/png" ||
            selfiee.type === "image/jpeg" ||
            selfiee.type === "image/jpg"
          )
        ) {
          validation.push("Please upload selfie in png,jpg or jpeg format");
        }
      }
    }
    if (!usrId) {
      validation.push(t("HEADER.USERID_VALIDATION"));
    }
    if (validation?.length !== 0) {
      validation.forEach((msg) => {
        toast.error(msg);
      });
      return;
    }
    const fd = new FormData();
    if (selfiee?.name) {
      fd.append("image", selfiee);
      fd.append("id", usrId);
      dispatch(uploadSelfieeStart(fd));
    } else {
      dispatch(resetUpdateState());
      dispatch(selfieSuccessStep());
    }
  };

  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <div>
      <Grid className={classes.signupContent}>
        <Grid>
          <Grid>
            <Grid className={classes.userForm}>
              <Box className={classes.closeIconWrap}>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={closeSelfieModel}
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
            </Grid>

            <Grid className={classes.signupFromWrap}>
              <Grid className={`${classes.formGroup} ${classes.fileUpload}`}>
                <FormLabel required className={classes.formInput}>
                  Upload selfie
                </FormLabel>

                <Button
                  variant="contained"
                  component="label"
                  className={classes.fileUploadBtn}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => LoadSelfiee({ update: false, event: e })}
                  />
                  <img src="/images/upload-icon.svg" alt="" id="output" />
                </Button>
              </Grid>

              <Grid className={classes.authBtnWrap}>
                <Button
                  className={classes.btnPrimary}
                  onClick={handleSelfieeSubmit}
                >
                  {loading ? <CircularProgress /> : "Authentication"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
