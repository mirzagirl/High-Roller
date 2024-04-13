import React, { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  Button,
  TextField,
  Pagination,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Box,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import "dayjs/locale/es";
import "dayjs/locale/en";
import i18n from "i18next";
import dayjs from "dayjs";

import useStyles from "./BetHistory.styles";
import { getMyBetsStart } from "../../../redux-saga/redux/transaction";
import {
  DATE_FORMAT,
  EAR_TRANSACTION_TYPE,
  TRANSACTION_LIMIT,
} from "../../../utils/constants";
import { formatCategoryName } from "../../../utils/helper";

const BetHistory = ({ handleCloseAccountMenu }) => {
  const { myBets, loading, betsTotalPages, currentPage } = useSelector(
    (state) => state.transactions
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [activityType, setActivityType] = useState("2");
  const [date, setDate] = useState({
    dateFrom: null,
    dateTo: null,
  });
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  useEffect(() => {
    setTotalPage(betsTotalPages);
  }, [betsTotalPages]);

  const ResetData = () => {
    setDate({
      dateFrom: null,
      dateTo: null,
    });
    setActivityType("2");
    dispatch(getMyBetsStart({ page: 1, limit: TRANSACTION_LIMIT }));
  };
  const transactionFilters = () => {
    const filters = {};
    if (date.dateFrom) {
      filters.dateFrom = dayjs(date.dateFrom).format("YYYY/MM/DD");
    }
    if (date.dateTo) {
      filters.dateTo = dayjs(date.dateTo).format("YYYY/MM/DD");
    }
    if (activityType !== "2") {
      filters.paymentType = activityType;
    }
    return filters;
  };

  useEffect(() => {
    dispatch(getMyBetsStart({ page: 1, limit: TRANSACTION_LIMIT }));
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    const filters = transactionFilters();
    dispatch(
      getMyBetsStart({ ...filters, page: value, limit: TRANSACTION_LIMIT })
    );
    setPage(value);
  };

  const filterData = () => {
    const filters = transactionFilters();
    dispatch(getMyBetsStart({ ...filters, page: 1, limit: TRANSACTION_LIMIT }));
    setPage(1);
  };

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Grid className={classes.closeIcon}>
          {/* <Box onClick={hide} className={classes.closeIconWrap}> */}
          <Box className={classes.closeIconWrap}>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={handleCloseAccountMenu}
            />
          </Box>
          <Typography variant="h4" gutterBottom>
            {"Bet History"}
          </Typography>
        </Grid>

        <Grid className={classes.myprofileForm}>
          <Grid className={classes.signupFromFname}>
            <Grid container spacing={2}>
              {/* <Grid item md={4} sm={12}>
                <div className={classes.customBtnBox}>
                  <Button variant="text">Sports Bets</Button>
                  <Typography variant="h6">Casino</Typography>
                </div>
              </Grid> */}
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={i18n?.language || "en"}
              >
                <Grid item xs={12} sm={4} lg={4}>
                  <div className={classes.formGroup}>
                    <DesktopDatePicker
                      className={classes.datePicker}
                      id="start-date"
                      label={t("TRANSACTIONS.FROM_DATE")}
                      variant="outlined"
                      disableFuture
                      value={date.dateFrom}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(dateFrom) => {
                        setDate((current) => ({
                          ...current,
                          dateFrom,
                        }));
                      }}
                      maxDate={date.dateTo || null}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <div className={classes.formGroup}>
                    <DesktopDatePicker
                      className={classes.datePicker}
                      id="end-date"
                      label={t("TRANSACTIONS.TO_DATE")}
                      variant="outlined"
                      disableFuture
                      value={date.dateTo}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(dateTo) => {
                        setDate((current) => ({
                          ...current,
                          dateTo,
                        }));
                      }}
                      minDate={date.dateFrom || null}
                    />
                  </div>
                </Grid>
              </LocalizationProvider>
              <Grid item xs={12} sm={4} lg={4}>
                <div className={classes.formGroup}>
                  <TextField
                    className={classes.datePicker}
                    autoComplete="off"
                    autoCorrect="off"
                    id="activity-type"
                    variant="outlined"
                    select
                    value={activityType}
                    onChange={(e) => {
                      setActivityType(e.target.value);
                    }}
                    SelectProps={{
                      IconComponent: ExpandMoreIcon,
                    }}
                  >
                    <MenuItem value={"2"}>
                      {t("TRANSACTIONS.ACTIVITY_TYPE")}- {t("TRANSACTIONS.ALL")}
                    </MenuItem>
                    <MenuItem value={"0"}>
                      {t("TRANSACTIONS.ACTIVITY_TYPE")}- {"Loss"}
                    </MenuItem>
                    <MenuItem value={"1"}>
                      {t("TRANSACTIONS.ACTIVITY_TYPE")}- {"Win"}
                    </MenuItem>
                  </TextField>
                </div>
              </Grid>

              <Grid item xs={6} sm={6} lg={4}>
                <Button
                  onClick={() => filterData()}
                  className={classes.btnPrimary}
                >
                  {t("COMMON.APPLY")}
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} lg={4}>
                <Button
                  onClick={() => ResetData()}
                  className={classes.btnPrimary}
                >
                  {"Reset"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.tableContainer}>
          {loading ? (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          ) : myBets?.length > 0 ? (
            <>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>{t("TRANSACTIONS.DATE_TIME")}</TableCell>
                        <TableCell>{t("BET_HISTORY.GAME_TYPE")}</TableCell>
                        <TableCell>{t("BET_HISTORY.GAME_NAME")}</TableCell>
                        <TableCell>{t("BET_HISTORY.TYPE")}</TableCell>
                        <TableCell>{t("TRANSACTIONS.AMOUNT")}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {myBets?.map((bet, index) => (
                        <TableRow key={`${bet.transactionId} ${index}`}>
                          <TableCell>
                            <Grid style={{ whiteSpace: "nowrap" }}>
                              {dayjs(bet.createdAt).format(
                                `${DATE_FORMAT} HH:mm:ss A`
                              )}
                            </Grid>
                          </TableCell>
                          <TableCell>
                            {formatCategoryName(
                              bet.MasterCasinoGame.MasterGameSubCategory.name ||
                                "No Name"
                            )}
                          </TableCell>
                          <TableCell>
                            {bet.MasterCasinoGame?.name || "No Name"}{" "}
                          </TableCell>
                          <TableCell>
                            {EAR_TRANSACTION_TYPE[bet.actionId] || ""}
                          </TableCell>
                          <TableCell>${bet.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
              <Stack alignItems="center">
                <Pagination
                  count={parseInt(totalPage)}
                  page={parseInt(page)}
                  onChange={handlePageChange}
                />
              </Stack>
            </>
          ) : (
            <Stack alignItems="center">
              {/* <h2>{t("COMMON.NO_TRANSACTION_MSG")}</h2> */}
              <h2>{"No Bets Found"}</h2>
            </Stack>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default BetHistory;
