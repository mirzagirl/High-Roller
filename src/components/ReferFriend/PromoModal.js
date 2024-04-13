import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  Grid,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import useStyles from "./ReferFriend.styles";

export const PromoModal = ({ handlePromoModal }) => {
  const classes = useStyles();
  const { userDetails } = useSelector((state) => state.myProfile);
  const referralLink = `${process.env.REACT_APP_REFERRAL_BASE_URL}/${userDetails?.user?.uuid}`;
  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <div>
      <div className={classes.userForm}>
        <Box onClick={handlePromoModal} className={classes.closeIconWrap}>
          <CloseIcon style={{ cursor: "pointer" }} />
        </Box>
        {darkMode ? (
          <img src="/images/modal-banner.png" alt="modal banner img" />
        ) : (
          <img src="/images/light-modal-banner.png" alt="modal banner img" />
        )}
      </div>

      <div className={classes.modalBg}>
        <Typography variant="p">Share your referral link</Typography>
        <Grid className={classes.formGroup}>
          <FormLabel required className={classes.formInput}>
            URL-Address
          </FormLabel>
          <Grid className={classes.inputBox}>
            <TextField
              autoComplete="off"
              autoCorrect="off"
              type=""
              id=""
              placeholder={referralLink}
              inputProps={{
                maxLength: 100, // Set the maximum character limit
              }}
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(referralLink);
                toast.success("Referral Link copied Successfully..!");
              }}
              className={classes.copyIcon}
            >
              <img src="/images/copy-icon.svg" alt="copy icon" />
            </Button>
          </Grid>
        </Grid>

        <Grid className={classes.socialReferIcon}>
          <Button>
            <img src="/images/f-3.svg" alt="twitter" />
            Share on Twitter
          </Button>

          <Button>
            <img src="/images/f-7.svg" alt="facebook" />
            Share on facebook
          </Button>
        </Grid>
      </div>
    </div>
  );
};
