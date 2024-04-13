import React, { useMemo } from "react";

import { Box, Grid, Tab, Tabs } from "@mui/material";

export const TableMobile = ({ betsList, classes, isDarkMode }) => {
  const memoizedTable = useMemo(() => {
    return (
      <Grid className={classes.tableBg}>
        <Box className={classes.mobTabSection}>
          <Tabs value={1}>
            <Tab label="All Bets" />
            <Tab label="High rollers" />
            <Tab label="Lucky Winners" />
          </Tabs>
        </Box>

        {betsList?.map((bet, index) => (
          <Grid
            key={`${bet?.createdAt} ${index}`}
            className={`${classes.mobileTable} ${classes.slideIn}`}
          >
            <Grid className={classes.mobileTableDetail}>
              <div className={classes.gameName}>
                <p>{bet?.MasterCasinoGame?.name}</p>
                <p>{bet?.User?.userName}</p>
              </div>

              <div className={classes.amountSection}>
                <div className={classes.currencyStatus}>
                  <p>Amount</p>
                  <p>Payout</p>
                </div>

                <div className={classes.currencySection}>
                  <p>
                    ${bet?.BetsDetail?.amount}{" "}
                    <span>
                      <img src="/images/bet-icon-1.svg" alt="bet-icon" />
                    </span>
                  </p>
                  <p
                    style={{
                      color:
                        bet?.actionType === "loss"
                          ? bet?.BetsDetail?.amount > 1
                            ? "#F25C5C"
                            : isDarkMode
                            ? "#fff"
                            : "black"
                          : "#6CD9A5",
                    }}
                  >
                    {bet?.amount
                      ? `$${bet?.amount}`
                      : `- $${bet?.BetsDetail?.amount}`}
                    <span>
                      <img src="/images/bet-icon-1.svg" alt="bet-icon" />
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}
        {betsList?.length === 0 && <p>No Bets Found</p>}
      </Grid>
    );
  }, [betsList, classes]);
  return memoizedTable;
};
