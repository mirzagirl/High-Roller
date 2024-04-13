import React, { useCallback, useEffect, useState } from "react";

import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Select,
  Input,
  debounce,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import useStyles from "./Deposit.styles";
import {
  validateAddressStart,
  getConvertedWithdrawBalanceStart,
  withdrawalRequestStart,
  clearConvetedWithdrawCurrency,
} from "../../../redux-saga/redux/payment";

const Withdraw = ({ coinList }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const [isDisabledConfirm, setIsDisabledConfirm] = useState(true);

  const {
    convertedWithdrawBalance,
    withdrawSuccess,
    isValidate,
    convertLoading,
    validateLoad,
  } = useSelector((state) => state.payment);

  const canBeSubmitted = (c) => {
    if (c && convertedWithdrawBalance?.estimated_amount && isValidate) {
      setIsDisabledConfirm(false);
    } else {
      setIsDisabledConfirm(true);
    }
  };

  useEffect(() => {
    canBeSubmitted(checked);
  }, [convertedWithdrawBalance, isValidate]);

  const handleWithdrawAddress = (address) => {
    setAddress(address);
    validateAddress(address?.trim());
  };

  const validateAddress = useCallback(
    debounce((address) => {
      const currencyCode = selectedCurrency?.toLowerCase();
      dispatch(validateAddressStart({ address, currencyCode }));
    }, 500),
    [selectedCurrency]
  );

  const handleWithdrawAmount = (e) => {
    if (!e?.target?.value) {
      dispatch(clearConvetedWithdrawCurrency());
    }
    if (e?.target?.value && !/^[0-9]*$/.test(e?.target?.value)) {
      toast.error("Enter valid amount", { id: "withdraw" });
      return;
    }
    if (e?.target?.value <= 1000) {
      setAmount(e?.target?.value);
    } else {
      toast.error("Cannot Withdraw more than 1000", { id: "withdrawlimit" });
      return;
    }
    if (
      e?.target?.value &&
      /^[0-9]*$/.test(e?.target?.value) &&
      e?.target?.value >= 10
    )
      dispatch(
        getConvertedWithdrawBalanceStart({
          currencyCode: "usd",
          amount: e?.target?.value,
        })
      );
    else dispatch(clearConvetedWithdrawCurrency());

    setAmount(e?.target?.value);
  };
  useEffect(() => {
    if (withdrawSuccess) {
      setAddress("");
      setAmount("");
      setChecked(false);
      dispatch(clearConvetedWithdrawCurrency());
    }
  }, [withdrawSuccess]);
  const handleWithdraw = () => {
    const validation = [];
    if (!amount || amount === 0) {
      validation.push("Please enter the amount");
    }
    if (!address) {
      validation.push("Wallet address required");
    }
    if (!selectedCurrency) {
      validation.push("Please select currency");
    }
    if (amount && !/^[0-9]*$/.test(amount)) {
      validation.push("Enter a valid amount");
    }

    if (amount && amount < 10) {
      validation.push("Cannot  withdraw less then 10");
    }
    if (amount && amount > 1000) {
      validation.push("Cannot withdraw more then 1000");
    }
    if (
      !convertedWithdrawBalance?.estimated_amount &&
      !convertedWithdrawBalance?.currency_from
    ) {
      validation.push("Please confirm again");
    }
    if (validation?.length !== 0) {
      validation.forEach((message) => {
        toast.error(message);
      });
      return;
    }
    dispatch(
      withdrawalRequestStart({
        withdrawalAmount: convertedWithdrawBalance?.estimated_amount,
        withdrawalAddress: address,
        currency: convertedWithdrawBalance?.currency_from,
        fiatAmount: amount,
      })
    );
  };

  const onCheckboxClick = () => {
    canBeSubmitted(!checked);
    setChecked(!checked);
  };

  const handleCoinSelect = (e) => {
    setSelectedCurrency(e?.target?.value);
  };
  useEffect(() => {
    if (coinList?.length != 0) {
      coinList?.filter((e) => {
        if (e.code === "BTC") {
          setSelectedCurrency(e.code);
          return true;
        }
      });
    }
  }, [coinList]);
  return (
    <>
      <Grid className={classes.formGroup}>
        <span>Withdraw Method</span>
        <Select
          className={`${classes.depositInput} ${classes.withdrawDepositInput}`}
          label={"Select Coins"}
          value={selectedCurrency}
          onChange={handleCoinSelect}
          placeholder="Select Currency"
          IconComponent={ExpandMoreIcon}
          fullWidth
        >
          {coinList &&
            coinList.map((coin) => (
              <MenuItem key={coin.id} value={coin.code}>
                <img src="/images/fc-1.svg" alt="depo" />
                {coin.code}
              </MenuItem>
            ))}
        </Select>
      </Grid>
      <Grid className={classes.formGroup} style={{ marginBottom: "30px" }}>
        <span>Receive Address</span>
        <Input
          className={classes.addressDeposit}
          id="email"
          placeholder="Fill in carefully according to the specific currency"
          onChange={(e) => {
            if (!selectedCurrency) {
              toast.error("Please select currency first");
              return;
            }
            handleWithdrawAddress(e?.target?.value);
          }}
          value={address}
        />
        {!validateLoad && address && !isValidate && (
          <FormHelperText error>Withdraw Address not valid</FormHelperText>
        )}
      </Grid>
      <Grid className={classes.formGroup}>
        <Grid display="flex" justifyContent="space-between">
          <span>Withdraw Amount</span>
          <span>Min: 10</span>
        </Grid>
      </Grid>
      <Grid
        className={`${classes.confirmInput} ${classes.withdrawConfirmInput}`}
      >
        <TextField
          autoComplete="off"
          autoCorrect="off"
          disabled={!selectedCurrency}
          className={classes.selectText}
          placeholder={"Amount"}
          onChange={handleWithdrawAmount}
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
      {!convertLoading && convertedWithdrawBalance && (
        <p className={classes.convertedBalance}>
          You will withdraw{" "}
          <span>
            {convertedWithdrawBalance?.estimated_amount}{" "}
            {convertedWithdrawBalance?.currency_to}
          </span>
          from your balance
        </p>
      )}
      <Grid className={classes.bottomText} style={{ fontSize: "16px" }}>
        <input type="checkbox" onClick={onCheckboxClick} /> I confirm that
        information provided is correct.
      </Grid>

      <div className={classes.confirmBtn}>
        <Button disabled={isDisabledConfirm} onClick={handleWithdraw}>
          {"Confirm"}
        </Button>
      </div>
    </>
  );
};

export { Withdraw };
