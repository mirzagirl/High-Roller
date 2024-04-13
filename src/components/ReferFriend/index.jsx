import React, { useState } from "react";

import {
  TextField,
  Grid,
  Box,
  Typography,
  Button,
  DialogContent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import useStyles from "./ReferFriend.styles";
import { PromoModal } from "./PromoModal";
import Modal from "../../hoc/modal/Modal";

const ReferFriend = () => {
  const classes = useStyles();
  const [openPromoModal, setOpenPromoModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.authentication);

  const handlePromoModal = () => {
    if (isLoggedIn) {
      setOpenPromoModal((state) => {
        return !state;
      });
    } else {
      toast.error("Please loggin to get Referral Link");
    }
  };

  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <Box>
      <Grid className={classes.referralSection}>
        <Grid className={classes.heading}>Referral Program</Grid>

        <Grid className={classes.referParagraph}>
          <Typography>
            Let the whole know about Casino - Bring people here and earn more!
            Receive passive income for each player who followers your link,
            registers and plays actively on the platform. Referral Bonuses will
            be credited automatically for bets made by your referrals in
            In-house games, Slots, Spots and mined tokens. The more players you
            attract - the higher income you will get.
          </Typography>

          <Typography>
            Create your own campaign for every source with a unique referral
            link. Track how your referrals come and what bonuses you get for
            their bets.
          </Typography>
        </Grid>

        <Button className={classes.getPromoBtn} onClick={handlePromoModal}>
          Get Promo Materials
        </Button>
      </Grid>

      <Grid className={classes.discountHeadSection}>
        <Grid className={classes.discountHead}>
          {darkMode ? (
            <img src="/images/discount-1.png" alt="discount bg" />
          ) : (
            <img src="/images/light-discount-1.png" alt="discount bg" />
          )}
          <Grid className={classes.discountDetail}>
            <Typography variant="h2">15%</Typography>
            <Typography variant="h6">From pure profit</Typography>

            <Typography>
              15% from platform’s house edge will be paid you immediately after
              each referrals winning bets
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.discountHead}>
          {darkMode ? (
            <img src="/images/discount-2.png" alt="discount bg" />
          ) : (
            <img src="/images/light-discount-2.png" alt="discount bg" />
          )}
          <Grid className={classes.discountDetail}>
            <Typography variant="h2">1.5%</Typography>
            <Typography variant="h6">From all winnings</Typography>

            <Typography>
              1.5% from platform’s house edge will be paid you immediately after
              each referrals winning bets
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.discountHead}>
          {darkMode ? (
            <img src="/images/discount-3.png" alt="discount bg" />
          ) : (
            <img src="/images/light-discount-3.png" alt="discount bg" />
          )}
          <Grid className={classes.discountDetail}>
            <Typography variant="h2">5%</Typography>
            <Typography variant="h6">From tokens by your refferals</Typography>

            <Typography>
              5% from platform’s house edge will be paid you immediately after
              each referrals winning bets
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.referDetail}>
        {darkMode ? (
          <img
            src="/images/discount-4.png"
            alt="discount bg"
            className={classes.desktopImage}
          />
        ) : (
          <img
            src="/images/light-discount-4.png"
            alt="discount bg"
            className={classes.desktopImage}
          />
        )}

        {darkMode ? (
          <img
            src="/images/mob-discount-4.png"
            alt="discount bg"
            className={classes.mobImage}
          />
        ) : (
          <img
            src="/images/light-mob-discount-4.png"
            alt="discount bg"
            className={classes.mobImage}
          />
        )}
        <Grid className={classes.referDiscription}>
          <Typography>
            Are you a blogger, have a large audience, many followers? We have a
            special offer for you - a unique affiliate program with bigger
            referral rewards. We will compile an individual program with special
            conditions.Contact our manager to discuss th terms - affilate@casino
          </Typography>
          <Typography>
            Important: Only those users who have passed the requirements of the
            manager and only after approval with the manager will be able to
            participate in the program
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.subscriberSocial}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8} className="referalCode">
            <Typography>Your referral Code</Typography>
            <Grid className={classes.referInput}>
              <TextField
                autoComplete="off"
                autoCorrect="off"
                placeholder="REFERRAL_CODE"
                inputProps={{
                  maxLength: 100, // Set the maximum character limit
                }}
              />
              <Button className={classes.copyBtn}>Copy</Button>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4} className="socialText">
            <Typography>Share on social media</Typography>
            <ul className={classes.socialMedia}>
              <li>
                {darkMode ? (
                  <img src="/images/f-1.svg" alt="social icon" />
                ) : (
                  <img
                    src="/images/social-media/icon-1.svg"
                    alt="social icon"
                  />
                )}
              </li>

              <li>
                {darkMode ? (
                  <img src="/images/f-4.svg" alt="social icon" />
                ) : (
                  <img
                    src="/images/social-media/icon-2.svg"
                    alt="social icon"
                  />
                )}
              </li>

              <li>
                {darkMode ? (
                  <img src="/images/f-3.svg" alt="social icon" />
                ) : (
                  <img
                    src="/images/social-media/icon-3.svg"
                    alt="social icon"
                  />
                )}
              </li>

              <li>
                {darkMode ? (
                  <img src="/images/f-7.svg" alt="social icon" />
                ) : (
                  <img
                    src="/images/social-media/icon-4.svg"
                    alt="social icon"
                  />
                )}
              </li>

              <li>
                {darkMode ? (
                  <img src="/images/f-6.svg" alt="social icon" />
                ) : (
                  <img
                    src="/images/social-media/icon-5.svg"
                    alt="social icon"
                  />
                )}
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        isShowing={openPromoModal}
        content={
          <DialogContent>
            <PromoModal handlePromoModal={handlePromoModal} />
          </DialogContent>
        }
      />
    </Box>
  );
};

export default ReferFriend;
