import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Tab, Tabs, Box } from "@mui/material";
import { isMobile } from "react-device-detect";

import useStyles from "../../container/Casino/Lobby/Lobby.styles";
import {
  getTopBetsStart,
  startGetBet,
  clearLatestBet,
} from "../../redux-saga/redux/LiveTable";
import BetTable from "./table";
import { TableMobile } from "./mobileTable";

const LiveTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { topBets, latestBet } = useSelector((state) => state.liveTable);
  const { darkMode } = useSelector((state) => state.themeSettings);
  const [betsList, setBetsList] = useState([]);

  useEffect(() => {
    setBetsList(topBets);
  }, [topBets]);

  useEffect(() => {
    dispatch(getTopBetsStart());
  }, []);

  useEffect(() => {
    dispatch(startGetBet());
  }, []);

  useEffect(() => {
    if (latestBet) {
      let newObj = {};
      newObj = {
        User: {
          userName: latestBet?.userName || null,
          profileImage: latestBet?.userImage || null,
          userLevelId: latestBet?.userLevelId || null,
        },
        MasterCasinoGame: {
          name: latestBet?.gameName || null,
          gameId: latestBet?.gameId || null,
          MasterGameSubCategory: {
            iconName: latestBet?.gameSubCatImage || "/images/game-icon.svg",
          },
        },
        amount: latestBet?.winningAmount || 0,
        BetsDetail: { amount: latestBet?.betAmount || 0 },
        actionType: latestBet?.type || null,
        createdAt: new Date(),
      };
      setBetsList((s) => [newObj, ...s]);
      if (betsList?.length !== 0 && betsList?.length > 8)
        setBetsList((s) => s.slice(0, -1));
      dispatch(clearLatestBet());
    }
  }, [latestBet]);

  return (
    <section>
      <Grid className={classes.latestBetSection}>
        <Grid className={classes.themeCard}>
          <Box className={classes.tabSection}>
            <Tabs value={1}>
              <Tab label="All Bets" />
              <Tab label="High rollers" />
              <Tab label="Lucky Winners" />
            </Tabs>
          </Box>
          <Grid className={classes.betTableWrap}>
            <BetTable betsList={betsList} />
          </Grid>
        </Grid>
      </Grid>
      {isMobile && (
        <TableMobile
          betsList={betsList}
          classes={classes}
          isDarkMode={darkMode}
        />
      )}
    </section>
  );
};

export default LiveTable;
