import React, { useEffect, useState } from "react";

import { Grid, Box, LinearProgress, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import lodash from "lodash";

import useStyles from "./MyProfile.styles";
import { getUserGameHistoryStart } from "../../../redux-saga/redux/profile/myProfile";
import { getTimeDifference } from "../../../utils/durationBtwTwoDates";

const UserProfile = ({ userDetails, gameProgress, handleCloseAccountMenu }) => {
  const { userGameHistory, loading } = useSelector((state) => state.myProfile);
  const [recentGamesGrid, setRecentGamesGrid] = useState([]);
  const [mostPlayedGrid, setMostPlayedGrid] = useState([]);

  const classes = useStyles({ gameProgressWidth: gameProgress });
  const dispatch = useDispatch();

  useEffect(() => {
    setRecentGamesGrid(
      lodash.chunk(userGameHistory?.lastRecent, 2).slice(0, 4)
    );
    setMostPlayedGrid(
      lodash.chunk(userGameHistory?.mostGamePlayed, 2).slice(0, 4)
    );
  }, [userGameHistory]);

  useEffect(() => {
    dispatch(getUserGameHistoryStart());
  }, [dispatch]);

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Grid className={classes.myprofileForm}>
          <Box className={classes.closeIconWrap}>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={handleCloseAccountMenu}
            />
          </Box>
          <Grid className={classes.sidebarUserIcon}>
            <span className={classes.userBorder}>
              <img
                src={
                  (userDetails && userDetails?.user?.profile_image) ||
                  "/images/user_icon.svg"
                }
                alt="player-icon"
              />
            </span>
            <span className={classes.sidebarUserName}>
              {userDetails?.user?.user_name || "no name found"}
            </span>
          </Grid>

          <Box className={classes.progressBar}>
            <Grid className={classes.profileTopIcon}>
              <img
                src={
                  userDetails?.user?.profile_image ||
                  "/images/profile-top-icon.svg"
                }
                alt="profile"
              />
            </Grid>

            <Grid className={classes.rightSection}>
              <Grid className={classes.grandStep}>
                <p>
                  <span>Current:</span>
                  <span>{userDetails?.currentLevel?.userLevel}</span>
                </p>

                {userDetails?.nextLevel?.userLevel && (
                  <p>
                    <span>Next:</span>
                    <span>{userDetails?.nextLevel?.userLevel}</span>
                  </p>
                )}
              </Grid>
              <LinearProgress
                thickness={6}
                value={gameProgress}
                variant="determinate"
                className={classes.linearBar}
              />
            </Grid>
          </Box>

          <Grid className={classes.totalSection}>
            <Grid className={classes.total}>
              <p>{userDetails?.user?.TotalWins || 0}</p>
              <p>Total Wins</p>
            </Grid>

            <Grid className={classes.total}>
              <p>{userDetails?.user?.TotalBets || 0}</p>
              <p>Total Bets</p>
            </Grid>

            <Grid className={classes.total}>
              <p>
                $
                {userDetails?.user?.TotalWageredAmount
                  ? userDetails?.user?.TotalWageredAmount.toFixed(2)
                  : 0.0}
              </p>
              <p>Total Wagered</p>
            </Grid>
          </Grid>

          <Grid className={classes.gameHeading}>
            <p>Most Game Played</p>
            <p>
              <span>{"Wagered  :"}</span>
              <span>
                $
                {userGameHistory?.totalWageredAndDate?.TotalWageredAmount
                  ? userGameHistory?.totalWageredAndDate?.TotalWageredAmount.toFixed(
                      2
                    )
                  : 0.0}
              </span>
            </p>
          </Grid>

          <Box className={classes.gameWrapper}>
            {loading ? (
              <Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={50}
                      height={50}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : mostPlayedGrid?.length !== 0 ? (
              <>
                {mostPlayedGrid?.map((game, index) => (
                  <Grid key={index} className={classes.gameSection}>
                    {game?.map((g, i) => (
                      <Grid key={g?.game_id} className={classes.floatLeft}>
                        <div className={classes.gameImage}>
                          <img
                            src={
                              g?.MasterCasinoGame?.thumbnailUrl ||
                              "/images/casino-banner-2.png"
                            }
                            alt="id"
                          />
                        </div>

                        <div className={classes.gameNameDetail}>
                          <p
                            className={classes.gameName}
                            title={g?.MasterCasinoGame?.name}
                          >
                            {g?.MasterCasinoGame?.name}
                          </p>
                          <p>
                            <span> {"Wagered   :"}</span>
                            <span>
                              $
                              {g?.WageredAmount
                                ? g?.WageredAmount.toFixed(2)
                                : 0.0}
                            </span>
                          </p>
                          <p>
                            <span>{"Bets :"}</span>
                            <span>{g?.TotalBet || 0}</span>
                          </p>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <span style={{ fontSize: "12px" }}>No games found</span>
              </>
            )}
          </Box>

          <Grid className={classes.gameHeading}>
            <p>Last Recent</p>
            <p>
              <span>
                {getTimeDifference(
                  userGameHistory?.totalWageredAndDate?.TransactionDate
                ) || "0 Hours 0 Minutes"}
              </span>
            </p>
          </Grid>

          <Box className={classes.gameWrapper}>
            {loading ? (
              <Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={50}
                      height={50}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={50}
                      height={50}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : recentGamesGrid?.length !== 0 ? (
              <>
                {recentGamesGrid?.map((game, index) => (
                  <Grid key={index} className={classes.gameSection}>
                    {game?.map((g, i) => (
                      <Grid key={g?.game_id} className={classes.floatLeft}>
                        <div className={classes.gameImage}>
                          <img
                            src={
                              g?.MasterCasinoGame?.thumbnailUrl ||
                              "/images/casino-banner-2.png"
                            }
                            alt="id"
                          />
                        </div>

                        <div className={classes.gameNameDetail}>
                          <p
                            className={classes.gameName}
                            title={g?.MasterCasinoGame?.name}
                          >
                            {g?.MasterCasinoGame?.name}
                          </p>
                          <p>
                            <span>{"Wagered  :"}</span>
                            <span>
                              $
                              {g?.WageredAmount
                                ? g?.WageredAmount.toFixed(2)
                                : "0.00"}
                            </span>
                          </p>
                          <p>
                            <span>
                              {getTimeDifference(g?.TransactionDate) ||
                                "0 hours 0 minutes"}
                            </span>
                          </p>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <span style={{ fontSize: "12px" }}>No games found</span>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
