import React, { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  Button,
  Tab,
  Tabs,
  Box,
  MenuItem,
  CircularProgress,
  Select,
  TextField,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";
import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./Deposit.styles";
import {
  generateAddressStart,
  getCurrencyListStart,
  clearDepositData,
  getConvertedDepositBalanceStart,
  clearConvetedDepositCurrency,
  clearConvetedWithdrawCurrency,
} from "../../../redux-saga/redux/payment";
import Currency from "./Currency";
import { Withdraw } from "./withdraw";
import getDarkTheme from "../../../../src/theme/dark";
import getLightTheme from "../../../../src/theme/light";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Deposit = ({ handleDepositWithdrawOpen }) => {
  if (!localStorage.theme) localStorage.setItem("theme", "dark");
  const { darkMode } = useSelector((state) => state.themeSettings);
  let selectTheme = !darkMode ? getLightTheme() : getDarkTheme();
  const theme = createTheme(selectTheme);
  console.log(theme);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const {
    currencyList,
    generateAddress,
    generateLoading,
    convertedDepositBalance,
    convertLoading,
  } = useSelector((state) => state.payment);

  const handleAmount = (e) => {
    if (!e?.target?.value) {
      dispatch(clearConvetedDepositCurrency());
    }
    if (e?.target?.value && !/^[0-9]*$/.test(e?.target?.value)) {
      toast.error("Enter valid amount", { id: "depsoi" });
      return;
    }
    if (e?.target?.value <= 1000) {
      setAmount(e?.target?.value);
    } else {
      toast.error("Cannot Deposit more than 1000", { id: "deposit" });
      return;
    }
    dispatch(
      getConvertedDepositBalanceStart({
        currencyCode: "usd",
        amount: e?.target?.value,
      })
    );
  };

  const { walletData } = useSelector((state) => state.wallet);

  const handleGenerateAddress = () => {
    const validation = [];
    if (!selectedCurrency) {
      validation.push("Please select currency");
    }
    if (!amount) {
      validation.push("Wallet amount required");
    }
    if (amount && !/^[0-9]*$/.test(amount)) {
      validation.push("Enter a valid amount");
    }
    if (amount && amount < 10) {
      validation.push("Cannot deposit less then 10");
    }
    if (validation?.length !== 0) {
      validation.forEach((message) => {
        toast.error(message);
      });
      return;
    }
    dispatch(
      generateAddressStart({
        currencyCode: convertedDepositBalance?.currency_from,
        amount,
      })
    );
  };
  useEffect(() => {
    if (currencyList?.length != 0) {
      currencyList?.filter((e) => {
        if (e.code === "BTC") {
          setSelectedCurrency(e.code);
          return true;
        }
      });
    }
  }, [currencyList]);

  const handleCoinSelect = (e) => {
    setSelectedCurrency(e?.target?.value);
  };
  const copyToClipBoard = (e, value) => {
    navigator.clipboard.writeText(generateAddress);
    toast.success("Copied", {
      id: "PAYMENT.PAYMENT_COPIED_CLIPBOARD",
    });
  };
  useEffect(() => {
    dispatch(getCurrencyListStart());
    return () => {
      dispatch(clearDepositData());
    };
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    dispatch(clearConvetedDepositCurrency());
    dispatch(clearConvetedWithdrawCurrency());
    setAmount("");
    setValue(newValue);
  };
  return (
    <section className={classes.accountRight}>
      <Grid className={classes.closeIcon}>
        <Box className={classes.closeIconWrap}>
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={handleDepositWithdrawOpen}
          />
        </Box>
        <Typography className={classes.heading}>Wallet</Typography>
      </Grid>

      <Box className={classes.tabWrap}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs icon"
            className={classes.tabHeading}
          >
            <Tab
              disableRipple
              icon={
                <img
                  src={
                    value === 0 ? "/images/deposit.svg" : "/images/deposit.svg"
                  }
                  alt="depo"
                />
              }
              iconPosition={"start"}
              label="Balance"
              {...a11yProps(0)}
            />
            <Tab
              disableRipple
              icon={
                <img
                  src={
                    value === 1
                      ? "/images/deposit-icon.svg"
                      : "/images/deposit-icon.svg"
                  }
                  alt="depo"
                />
              }
              iconPosition={"start"}
              label="Deposit"
              {...a11yProps(1)}
            />
            <Tab
              disableRipple
              icon={
                <img
                  src={
                    value === 2
                      ? "/images/payment-icon/withdraw.svg"
                      : "/images/payment-icon/withdraw.svg"
                  }
                  alt="depo"
                />
              }
              iconPosition={"start"}
              label="Withdraw"
              {...a11yProps(2)}
            />
            {/* <Tab  label="Deposit" {...a11yProps(0)} />
            <Tab  label="Withdraw" {...a11yProps(1)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className={classes.depositSection}>
          <Currency wallet={walletData} />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.depositSection}>
          <Grid className={classes.formGroup}>
            {!generateAddress && (
              <>
                <span>Deposit Method</span>
                <div>
                  <Grid item style={{ marginBottom: "30px" }}>
                    <Select
                      className={classes.depositInput}
                      label={"Select"}
                      value={selectedCurrency || "Select Currency"}
                      onChange={handleCoinSelect}
                      placeholder="Select Currency"
                      fullWidth
                      IconComponent={ExpandMoreIcon}
                    >
                      {currencyList &&
                        currencyList.map((coin) => {
                          return (
                            <MenuItem key={coin.id} value={coin?.code}>
                              <img src="/images/fc-1.svg" alt="depo" />
                              {coin.code}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </Grid>

                  <Grid item>
                    <Grid className={classes.formGroup}>
                      <Grid display="flex" justifyContent="space-between">
                        <span>Deposit Amount</span>
                        <span>Min: 10</span>
                      </Grid>
                    </Grid>
                    <Grid className={classes.confirmInput}>
                      <TextField
                        disabled={!selectedCurrency}
                        className={classes.selectText}
                        placeholder={"Amount"}
                        onChange={handleAmount}
                        value={amount}
                        fullWidth
                      />
                      <p>USD</p>
                    </Grid>

                    {convertLoading && (
                      <CircularProgress
                        style={{
                          marginLeft: "170px",
                          marginTop: "5px",
                        }}
                        size={20}
                      />
                    )}
                  </Grid>
                  {!convertLoading && convertedDepositBalance && (
                    <p className={classes.convertedBalance}>
                      You will receive a transfer of{" "}
                      <span>
                        {convertedDepositBalance?.estimated_amount}{" "}
                        {convertedDepositBalance?.currency_to}{" "}
                      </span>
                      to your balance
                    </p>
                  )}

                  <Grid item xl={12} lg={12} md={12} xs={12}>
                    {generateLoading ? (
                      <div className={classes.addressLoaderWrap}>
                        <CircularProgress
                          size={25}
                          style={{ color: "#7b62da", marginTop: "15px" }}
                        />
                      </div>
                    ) : (
                      <Button
                        disabled={!convertedDepositBalance?.estimated_amount}
                        onClick={(e) =>
                          handleGenerateAddress(e, selectedCurrency.tokenSymbol)
                        }
                        className={classes.doneBtn}
                      >
                        {"Get Deposit Address"}
                      </Button>
                    )}
                  </Grid>
                </div>
              </>
            )}

            {generateAddress ? (
              <Grid item className={classes.addressTextWrap}>
                <Grid item className={classes.addressText}>
                  <Grid className={classes.textMessage}>
                    Please send amount ${amount} to the BTC address below.
                  </Grid>
                  <Grid item style={{ marginBottom: "30px" }}>
                    <span>Deposit Currency</span>
                    <Select
                      className={classes.depositInput}
                      label={"Select"}
                      value={selectedCurrency || "Select Currency"}
                      onChange={handleCoinSelect}
                      placeholder="Select Currency"
                      fullWidth
                    >
                      {currencyList &&
                        currencyList.map((coin) => {
                          return (
                            <MenuItem key={coin.id} value={coin?.code}>
                              <img src="/images/fc-1.svg" alt="depo" />
                              {coin.code}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </Grid>
                  <Grid>
                    <span>Deposit Address</span>
                    {/* <Typography></Typography> */}
                  </Grid>
                  {/* <Typography className={classes.addressGenerate}> */}
                  <Grid>
                    <p className={classes.paymentComplete}>
                      <small>
                        <span>{generateAddress}</span>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={copyToClipBoard}
                          edge="end"
                        >
                          {" "}
                          <ContentCopyIcon />
                        </IconButton>
                      </small>{" "}
                    </p>
                  </Grid>
                  {/* </Typography> */}
                </Grid>
                <Grid
                  item
                  style={{
                    padding: "8px",
                    width: "fit-content",
                    margin: "0 auto",
                    borderRadius: "8px",
                    border: darkMode
                      ? "2px solid rgba(255, 255, 255, 0.04)"
                      : "2px solid rgba(255, 255, 255, 0.04)",
                    background: darkMode ? "#2B2B38" : "#E6e6e6",
                    boxShadow: darkMode
                      ? "0px 2px 12px 0px rgba(255, 255, 255, 0.02) inset"
                      : "0px 2px 12px 0px rgba(255, 255, 255, 0.02) inset,                     ",
                    display: "flex",
                  }}
                >
                  <QRCode
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#fff",
                      boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.12) inset",
                    }}
                    value={`${generateAddress}`}
                    size={128}
                  />
                </Grid>

                <Button className={classes.statusButton} display={"flex"}>
                  pending <CircularProgress size="20px" />{" "}
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2} className={classes.depositSection}>
          <Withdraw coinList={currencyList} />
        </TabPanel>
      </Box>
    </section>
  );
};

export default Deposit;
