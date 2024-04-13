import React, { useEffect, useRef } from "react";

import { Grid, Box, LinearProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./MyProfile.styles";
import { getUserProfileDetailsStart } from "../../../redux-saga/redux/profile/myProfile";

const UserProfile = () => {
  const { userDetails } = useSelector((state) => state.myProfile);
  const offset = useRef(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (offset.current === 0) {
      dispatch(getUserProfileDetailsStart());
      offset.current = 1;
    }
  }, [dispatch]);

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Grid className={classes.myprofileForm}>
          <Grid className={classes.sidebarUserIcon}>
            <img
              className={classes.imageStyle}
              src={userDetails && userDetails.profileImage}
              alt="User Icon"
            />
            <span className={classes.sidebarUserName}>
              {userDetails?.userName}
            </span>
          </Grid>

          <Box className={classes.progressBar}>
            <Grid className={classes.profileTopIcon}>
              <img src="/images/profile-top-icon.svg" alt="profile-top-icon" />
            </Grid>

            <Grid className={classes.rightSection}>
              <Grid className={classes.grandStep}>
                <p>
                  <span>Current:</span>
                  <span> Grand I</span>
                </p>

                <p>
                  <span>Next:</span>
                  <span>Grand II</span>
                </p>
              </Grid>
              <LinearProgress
                thickness={6}
                value="4%"
                className={classes.linearBar}
              />
            </Grid>
          </Box>

          <Grid className={classes.totalSection}>
            <Grid className={classes.total}>
              <p>23123</p>
              <p>Total Wins</p>
            </Grid>

            <Grid className={classes.total}>
              <p>42231</p>
              <p>Total Bets</p>
            </Grid>

            <Grid className={classes.total}>
              <p>$10,875.20</p>
              <p>Total Wagered</p>
            </Grid>
          </Grid>

          <Grid className={classes.gameHeading}>
            <p>Most Game Played</p>
            <p>
              <span>Wagered:</span>
              <span>$10,875.72</span>
            </p>
          </Grid>

          <Box className={classes.gameWrapper}>
            <Grid className={classes.gameSection}>
              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>

              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid className={classes.gameSection}>
              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>

              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>

          <Grid className={classes.gameHeading}>
            <p>Last Recent</p>
            <p>
              <span>4 hours 36 minutes</span>
            </p>
          </Grid>

          <Box className={classes.gameWrapper}>
            <Grid className={classes.gameSection}>
              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>

              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid className={classes.gameSection}>
              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>

              <Grid className={classes.floatLeft}>
                <div className={classes.gameImage}>
                  <img src="/images/casino-banner-2.png" alt="game" />
                </div>

                <div className={classes.gameNameDetail}>
                  <p>Blackjack</p>
                  <p>
                    <span>Wagered</span>
                    <span>$1,344</span>
                  </p>
                  <p>
                    <span>Bets</span>
                    <span>421</span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
