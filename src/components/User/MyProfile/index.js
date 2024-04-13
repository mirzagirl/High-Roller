import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";

import useStyles from "./MyProfile.styles";
import Profile from "./profile";

const MyProfile = ({ userDetails, gameProgress, handleCloseAccountMenu }) => {
  const { walletAddress, metamaskConnected, isLoggedIn, metamaskLoggedIn } =
    useSelector((state) => state.authentication);

  const classes = useStyles();
  const [show, setShow] = useState(false);

  const formatWalletAddress = () => {
    let address;
    if (show && walletAddress) {
      return walletAddress;
    }
    if (walletAddress) {
      address = walletAddress.slice(0, 5);
      address = address + "...";
    }
    if (!walletAddress) {
      address = "Not Found";
    }
    return address;
  };

  return (
    <>
      {metamaskConnected || isLoggedIn ? (
        <Profile
          userDetails={userDetails}
          gameProgress={gameProgress}
          handleCloseAccountMenu={handleCloseAccountMenu}
        />
      ) : null}
      {metamaskLoggedIn ? (
        <div className={classes.accountRight}>
          <Grid className={classes.myprofileBottom}>
            <Typography variant="h7" gutterBottom>
              <b>Wallet Address : </b>
              {formatWalletAddress()}
            </Typography>
            <br />
            <Button
              size="small"
              variant="contained"
              onClick={() => setShow((current) => !current)}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default MyProfile;
