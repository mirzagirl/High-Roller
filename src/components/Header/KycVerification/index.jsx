import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  TextField,
  Button,
  FormLabel,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@material-ui/core";
import moment from "moment";

import useStyles from "./KycVerification.styles";
import {
  verifyKycStart,
  resetAuthenticationState,
} from "../../../redux-saga/redux/auth/authentication";
import { useKycVerificationHook } from "./useKycVerificationHook";
import { validateName } from "../../../utils/helper";
import {
  getUserKycDetailsStart,
  resetKycDetails,
} from "../../../redux-saga/redux/kycVerification";

export default function KycVerification({ closeKycModel, openSelfieModel }) {
  const {
    countryList,
    stateList,
    cityList,
    getStatesOfCountry,
    getCitiesOfState,
  } = useKycVerificationHook();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  // const [city, setCity] = useState("");
  const [onceChange, setOnceChange] = useState(true);
  const [frontId, setFrontId] = useState("");
  const [backId, setBackId] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const classes = useStyles();
  const { success, loading } = useSelector((state) => state.authentication);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const dateFormat = "DD-MM-YYYY";
  const maxBirthdayDate = new Date();
  maxBirthdayDate.setFullYear(maxBirthdayDate.getFullYear() - 18, 11, 31);

  const { kycData, isUpdateKycData, loadKycData } = useSelector(
    (state) => state.kycVerification
  );

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getUserKycDetailsStart({ id: localStorage.getItem("signId") }));
  }, []);

  useEffect(() => {
    if (isUpdateKycData && !loadKycData) {
      getStatesOfCountry(kycData?.country_id);
      getCitiesOfState(kycData?.state_id);
      setLastName(kycData?.lastName);
      setFirstName(kycData?.firstName);
      setFrontId(kycData?.kycDetails?.kycDocFrontImg);
      setBackId(kycData?.kycDetails?.kycDocBackImg);
      setSelectedCountry(kycData?.country_id);
      setDateOfBirth(kycData?.date_of_birth);
      LoadFrontId({ update: true, event: kycData?.kycDetails?.kycDocFrontImg });
      LoadBackId({ update: true, event: kycData?.kycDetails?.kycDocBackImg });
    }
  }, [kycData, isUpdateKycData, loadKycData]);
  useEffect(() => {
    if (
      stateList?.length &&
      cityList?.length &&
      isUpdateKycData &&
      !loadKycData &&
      onceChange
    ) {
      setOnceChange(false);
      setSelectedState(kycData?.state_id);
      setSelectedCity(kycData?.city_id);
    }
  }, [stateList, cityList]);

  useEffect(() => {
    return () => {
      dispatch(resetKycDetails());
      dispatch(resetAuthenticationState());
    };
  }, []);

  useEffect(() => {
    // dispatch(getCurrenciesStart());
    if (success) {
      dispatch(resetKycDetails());
      handleOpneSelfieModel();
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  const handleOpneSelfieModel = () => {
    closeKycModel();
    openSelfieModel();
  };

  const LoadFrontId = ({ update, event }) => {
    var output = document.getElementById("output");
    if (!update) output.src = URL.createObjectURL(event.target.files[0]);
    else output.src = event;
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
    if (!update) setFrontId(event.target.files[0]);
  };

  const LoadBackId = ({ update, event }) => {
    var output = document.getElementById("outputBack");
    if (!update) output.src = URL.createObjectURL(event.target.files[0]);
    else output.src = event;
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
    if (!update) setBackId(event.target.files[0]);
  };
  const handleSubmitKyc = () => {
    const city = cityList.filter(
      (city) => city.master_city_id === selectedCity
    )[0]?.name;
    const country = countryList.filter(
      (country) => country.master_country_id === selectedCountry
    )[0]?.code;
    const state = stateList.filter(
      (state) => state.master_state_id === selectedState
    )[0]?.name;
    const usrId = parseInt(localStorage.getItem("signId"));
    const dob = moment(dateOfBirth?.$d)?.format("YYYY-MM-D");
    const toDateFormat = moment(new Date(dob)).format(dateFormat);
    const validation = [];
    if (!usrId) {
      validation.push(t("HEADER.USERID_VALIDATION"));
    }
    if (!firstName?.trim()) {
      validation.push(t("HEADER.FIRSTNAME_EMPTY_VALIDATION"));
    }
    if (!validateName(firstName?.trim())) {
      validation.push(t("HEADER.FIRSTNAME_VALIDATION"));
    }
    if (!lastName?.trim()) {
      validation.push(t("HEADER.LASTNAME_EMPTY_VALIDATION"));
    }
    if (!validateName(lastName.trim())) {
      validation.push(t("HEADER.LASTNAME_VALIDATION"));
    }
    if (!dateOfBirth || !moment(toDateFormat, dateFormat, true).isValid()) {
      validation.push("Required DOB");
    }
    if (!country) {
      validation.push(t("HEADER.COUNTRY_VALIDATION"));
    }
    if (!state) {
      validation.push(t("HEADER.STATE_VALIDATION"));
    }
    if (!city) {
      validation.push(t("HEADER.CITY_VALIDATION"));
    }
    if (!frontId) {
      validation.push(t("HEADER.FRONTID_VALIDATION"));
    }
    if (frontId) {
      if (frontId?.type) {
        if (
          !(
            frontId.type === "image/png" ||
            frontId.type === "image/jpeg" ||
            frontId.type === "image/jpg"
          )
        ) {
          validation.push("Please upload front id png,jpg or jpeg format");
        }
      }
    }
    if (backId) {
      if (backId?.type) {
        if (
          !(
            backId.type === "image/png" ||
            backId.type === "image/jpeg" ||
            backId.type === "image/jpg"
          )
        ) {
          validation.push("Please upload back id in png,jpg or jpeg format");
        }
      }
    }

    if (!backId) {
      validation.push(t("HEADER.BACKID_VALIDATION"));
    }
    if (validation?.length !== 0) {
      validation.forEach((message) => {
        toast.error(message);
      });
      return;
    }
    const fd = new FormData();
    if (backId?.name) fd.append("backImg", backId);
    if (frontId?.name) fd.append("frontImg", frontId);
    fd.append("id", usrId);
    fd.append("firstName", firstName?.trim());
    fd.append("dateOfBirth", dob);
    fd.append("city", city);
    fd.append("state", state);
    fd.append("countryCode", country);
    //  fields according to ids
    // fd.append("city", selectedCity);
    // fd.append("state", selectedState);
    // fd.append("countryCode", selectedCountry);
    fd.append("lastName", lastName?.trim());
    dispatch(verifyKycStart(fd));
  };

  const { darkMode } = useSelector((state) => state.themeSettings);
  return (
    <div>
      <Grid className={classes.signupContent}>
        <Grid container>
          <Grid>
            <div className={classes.userForm}>
              {/* <Box onClick={hide} className={classes.closeIconWrap}> */}
              <Box className={classes.closeIconWrap}>
                <CloseIcon
                  onClick={closeKycModel}
                  style={{ cursor: "pointer" }}
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

            {!loadKycData && (
              <Grid className={classes.signupFromWrap}>
                <Grid className={classes.verifyHeading}>
                  <p>Verification</p>
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    First Name
                  </FormLabel>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    id="fname"
                    placeholder="Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    inputProps={{
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Last Name
                  </FormLabel>
                  <TextField
                    autoComplete="off"
                    autoCorrect="off"
                    id="lname"
                    placeholder="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    inputProps={{
                      maxLength: 30, // Set the maximum character limit
                    }}
                  />
                </Grid>

                <Grid className={`${classes.formGroup} ${classes.calIcon}`}>
                  <FormLabel required className={classes.formInput}>
                    Birthday
                  </FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      id="start-date"
                      placeholde
                      r={t("Date of Birth")}
                      variant="outlined"
                      disableFuture
                      value={dateOfBirth}
                      inputFormat="YYYY-MM-DD"
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(date) => {
                        if (!date.today) {
                          setDateOfBirth(date);
                        }
                      }}
                      maxDate={maxBirthdayDate}
                      yearRange={"1950:" + maxBirthdayDate.getFullYear()}
                      // maxDate={endDate ? endDate : null}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    Country
                  </FormLabel>
                  <Select
                    fullWidth
                    type={"text"}
                    id="Country"
                    placeholder="Country"
                    variant="outlined"
                    label={selectedCountry ? "" : "Select country"}
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e?.target?.value);
                      getStatesOfCountry(e?.target?.value);
                      setSelectedCity("");
                      setSelectedState("");
                    }}
                    MenuProps={{
                      className: classes.signupCountryList,
                    }}
                  >
                    {countryList?.map((option) => (
                      <MenuItem
                        key={option?.name}
                        value={option?.master_country_id}
                      >
                        {option?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    State
                  </FormLabel>
                  <Select
                    fullWidth
                    type={"text"}
                    id="state"
                    disabled={selectedCountry ? false : true}
                    label={selectedState ? "" : "Select state"}
                    variant="outlined"
                    value={selectedState}
                    onChange={(e) => {
                      getCitiesOfState(e?.target?.value);
                      setSelectedCity("");
                      setSelectedState(e?.target?.value);
                    }}
                    MenuProps={{
                      className: classes.signupCountryList,
                    }}
                  >
                    {stateList?.map((option) => (
                      <MenuItem
                        key={option?.name}
                        value={option?.master_state_id}
                      >
                        {option?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid className={classes.formGroup}>
                  <FormLabel required className={classes.formInput}>
                    City
                  </FormLabel>
                  <Select
                    select
                    fullWidth
                    type={"text"}
                    id="City"
                    disabled={selectedState ? false : true}
                    label={selectedCity ? "" : "Select city"}
                    variant="outlined"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e?.target?.value)}
                    MenuProps={{
                      className: classes.signupCountryList,
                    }}
                  >
                    {cityList?.map((option) => (
                      <MenuItem
                        key={option?.name}
                        value={option?.master_city_id}
                      >
                        {option?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid className={`${classes.formGroup} ${classes.fileUpload}`}>
                  <FormLabel required className={classes.formInput}>
                    Upload front id
                  </FormLabel>

                  <Button
                    variant="contained"
                    component="label"
                    className={classes.fileUploadBtn}
                  >
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={(e) => LoadFrontId({ update: false, event: e })}
                    />
                    <img
                      className="frondface"
                      src="/images/upload-icon.svg"
                      alt=""
                      id="output"
                    />
                  </Button>
                </Grid>

                <Grid className={`${classes.formGroup} ${classes.fileUpload}`}>
                  <FormLabel required className={classes.formInput}>
                    Back id
                  </FormLabel>

                  <Button
                    variant="contained"
                    component="label"
                    className={classes.fileUploadBtn}
                  >
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      onChange={(e) => LoadBackId({ update: false, event: e })}
                    />
                    <img src="/images/upload-icon.svg" alt="" id="outputBack" />
                  </Button>
                </Grid>

                <Grid className={classes.authBtnWrap}>
                  <Button
                    className={classes.btnPrimary}
                    onClick={handleSubmitKyc}
                  >
                    {loading ? <CircularProgress /> : t("HEADER.SIGN_UP")}
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
