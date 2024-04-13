import React, { useMemo } from "react";

import dayjs from "dayjs";
import { Grid } from "@mui/material";

import useStyles from "../../container/Casino/Lobby/Lobby.styles";

const BetTable = ({ betsList }) => {
  const classes = useStyles();
  const memoizedTable = useMemo(() => {
    return (
      <Grid className={classes.tableResponsive}>
        <table className={classes.liveTable}>
          <thead>
            <tr>
              <th align="left" scope="col">
                Game
              </th>
              <th align="left" scope="col">
                Time
              </th>
              <th align="left" scope="col">
                Player
              </th>
              <th scope="col">Bet Amount</th>
              <th scope="col">Payout</th>
            </tr>
          </thead>
          <tbody>
            {betsList?.map((bet, index) => {
              return (
                <tr
                  key={`${bet?.createdAt} ${index}`}
                  className={classes.slideIn}
                >
                  <td align="left">
                    <div
                      className={classes.gameIcon}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <span>
                        <img
                          src={
                            bet.MasterCasinoGame?.MasterGameSubCategory
                              ?.iconName || "/images/game-icon.svg"
                          }
                          alt="game-icon"
                          style={{ marginRight: "12px" }}
                        />
                      </span>
                      {bet?.MasterCasinoGame?.name}
                    </div>
                  </td>

                  <td align="left">
                    {dayjs(bet?.createdAt).format("HH:mm:ss A")}
                  </td>

                  <td align="left">
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="userName"
                    >
                      <span
                        style={{
                          position: "relative",
                          width: "100%",
                          clipPath:
                            "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
                          objectFit: "cover",
                          aspectRatio: "1",
                          borderRadius: "4px",
                          maxHeight: "36px",
                          maxWidth: "36px",
                          minWidth: "36px",
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "center",
                          border: "1px solid",
                          left: "-12px",
                        }}
                        className="liveUser"
                      >
                        <img
                          style={{
                            width: "100%",
                            clipPath:
                              "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
                            objectFit: "cover",
                            aspectRatio: "1",
                            borderRadius: "4px",
                            maxHeight: "34px",
                            maxWidth: "34px",
                            minWidth: "34px",
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "center",
                          }}
                          src={
                            bet?.User?.profileImage || "/images/player-icon.svg"
                          }
                          alt="player-icon"
                        />
                      </span>
                      {bet?.User?.userName}
                    </div>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ display: "inherit", width: "28px" }}>
                        <img
                          style={{ marginRight: "12px" }}
                          src="/images/bet-icon-1.svg"
                          alt="bet-icon"
                        />

                        <p
                          className="userName"
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          {bet?.BetsDetail?.amount
                            ? `$${bet?.BetsDetail?.amount?.toFixed(2)}`
                            : "$0.00"}{" "}
                        </p>
                      </span>
                      <span
                        style={{ display: "inherit", width: "28px" }}
                      ></span>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "red",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ display: "inherit", width: "28px" }}>
                        <img
                          style={{ marginRight: "12px" }}
                          src="/images/bet-icon-1.svg"
                          alt="bet-icon"
                        />
                      </span>

                      <p className={"userName"}>
                        <span
                          style={{
                            display: "inherit",
                            width: "70px",
                            color:
                              bet?.actionType === "loss"
                                ? bet?.BetsDetail?.amount > 1
                                  ? "#F25C5C"
                                  : "inherit"
                                : "#6CD9A5",
                          }}
                        >
                          {bet?.amount
                            ? `$${bet?.amount?.toFixed(2)}`
                            : bet?.BetsDetail?.amount
                            ? `- $${bet?.BetsDetail?.amount.toFixed(2)}`
                            : "$0.00"}
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
            {betsList?.length === 0 && (
              <td colSpan={5} className={classes.noBets}>
                No Bets Found
              </td>
            )}
          </tbody>
        </table>
      </Grid>
    );
  }, [betsList]);

  return memoizedTable;
};

export default BetTable;
