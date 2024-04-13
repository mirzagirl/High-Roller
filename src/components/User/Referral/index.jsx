import React, { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import useStyles from "./Referral.styles";

const Referral = () => {
  const classes = useStyles();
  const { uuid } = useSelector((state) => state.myProfile.userDetails);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    setRefCode(`${process.env.REACT_APP_BASE_URL}${uuid}`);
  }, [uuid]);

  const handleCopy = () => {
    navigator.clipboard.writeText(refCode);
    toast.success("Referral Code copied to clipboard", { id: "refCode" });
  };

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Typography variant="h4" gutterBottom>
          REFERRAL
        </Typography>
        <br></br>
        <Grid className={classes.myprofileForm}>
          <Grid className={classes.signupFromFname}>
            <Grid className={classes.referFriends}>
              <Typography className="titleText">
                Refer your Friends <span>Earn $10 each</span>
              </Typography>
              <img
                src="/images/referral-coins-bag.png"
                className="coinsBagImg"
                alt="Coins Bag Icon"
              />
            </Grid>
            <Grid className={classes.totalRewards}>
              <div className="innerBox">
                <div className="rewardTextBox">
                  <img src="/images/referral-coin.png" alt="Coin Icon" />
                  <Typography className="rewardText">
                    Total Rewards <span>₹300</span>
                  </Typography>
                </div>
                <Button className={classes.btnPrimary}>
                  <img src="/images/right-angle.png" alt="Coins Bag Icon" />
                </Button>
              </div>
            </Grid>
            <Grid className={classes.codeReferFriend}>
              <Typography className="rewardText">
                <span>Refer and earn bonus for each referral</span>
                If you refer this code to any user & user signup with your
                referral code then you will get 100% bonus in your account.
              </Typography>
              <Grid className="referFriendInput">
                {uuid ? (
                  <TextField id="outlined-basic" value={refCode} disabled />
                ) : (
                  <CircularProgress size="30px" />
                )}
                <img
                  src="/images/copy-icon.svg"
                  alt="Copy Icon"
                  onDoubleClick={handleCopy}
                  title="Double click to copy"
                />
              </Grid>
            </Grid>
            <Grid className={classes.authBtnWrap}>
              <Button className={classes.btnPrimary} onClick={handleCopy}>
                Copy Referral Code
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Referral;
