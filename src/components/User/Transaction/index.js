import React, { useEffect, useState, useRef } from "react";

import {
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
  Pagination,
  CircularProgress,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import { getTransactionsStart } from "../../../redux-saga/redux/transaction";
import useStyles from "./Transaction.styles";

const Transaction = ({ handleCloseAccountMenu }) => {
  const classes = useStyles();
  const { transactions, totalPages, loading } = useSelector(
    (state) => state.transactions
  );
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const [dateFrom, setdateFrom] = useState(null);
  const [dateTo, setdateTo] = useState(null);
  const [activityType, setActivityType] = useState("2");
  const dispatch = useDispatch();
  const offset = useRef(0);

  useEffect(() => {
    if (offset.current === 0) {
      dispatch(getTransactionsStart({ page: 1, limit: 7 }));
      offset.current = 1;
    }
  }, [dispatch]);

  const transactionFilters = () => {
    const filters = {};
    if (dateFrom) {
      filters.dateFrom = dayjs(dateFrom).format("YYYY/MM/DD");
    }
    if (dateTo) {
      filters.dateTo = dayjs(dateTo).format("YYYY/MM/DD");
    }
    if (activityType !== "2") {
      filters.transactionType = activityType;
    }
    return filters;
  };
  const ResetData = () => {
    setdateFrom(null);
    setdateTo(null);
    setActivityType("2");
    dispatch(getTransactionsStart({ page: 1, limit: 7 }));
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    const filters = transactionFilters();
    dispatch(getTransactionsStart({ ...filters, page: value, limit: 7 }));
    setPage(value);
  };

  const filterData = () => {
    const filters = transactionFilters();
    dispatch(getTransactionsStart({ ...filters, page: 1, limit: 7 }));
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
            {"Transaction"}
          </Typography>
        </Grid>
        <Grid className={classes.myprofileForm}>
          <Grid className={classes.signupFromFname}>
            <Grid container spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={12} sm={4} lg={4}>
                  <div className={`${classes.formGroup} ${classes.datePicker}`}>
                    <DatePicker
                      className={classes.datePicker}
                      id="start-date"
                      label={t("TRANSACTIONS.FROM_DATE")}
                      variant="outlined"
                      disableFuture
                      value={dateFrom}
                      inputFormat="YYYY/MM/DD"
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(date) => {
                        setdateFrom(date);
                      }}
                      maxDate={dateTo ? dateTo : null}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={4} lg={4}>
                  <div className={classes.formGroup}>
                    <DatePicker
                      className={classes.datePicker}
                      id="end-date"
                      label={t("TRANSACTIONS.TO_DATE")}
                      variant="outlined"
                      inputFormat="YYYY/MM/DD"
                      disableFuture
                      value={dateTo}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(date) => {
                        setdateTo(date);
                      }}
                      minDate={dateFrom ? dateFrom : null}
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
                    <MenuItem value={"2"}>{t("TRANSACTIONS.ALL")}</MenuItem>
                    <MenuItem value={"4"}>{t("TRANSACTIONS.DEBIT")}</MenuItem>
                    <MenuItem value={"3"}>{t("TRANSACTIONS.CREDIT")}</MenuItem>
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
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              {loading ? (
                <Stack alignItems="center">
                  <CircularProgress />
                </Stack>
              ) : (
                <>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Transaction Id</TableCell>
                        <TableCell>{t("TRANSACTIONS.DATE_TIME")}</TableCell>
                        <TableCell>{t("TRANSACTIONS.TYPE")}</TableCell>
                        <TableCell>{t("TRANSACTIONS.AMOUNT")}</TableCell>
                        <TableCell>{t("TRANSACTIONS.STATUS")}</TableCell>
                        <TableCell>Action By</TableCell>
                        <TableCell>Comments</TableCell>
                      </TableRow>
                    </TableHead>
                    {transactions?.length > 0 ? (
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell>{transaction.id || "-"}</TableCell>
                            <TableCell>
                              <Grid
                                display={"flex"}
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {dayjs(transaction.createdAt).format(
                                  "DD/MM/YY HH:mm:ss A"
                                )}
                              </Grid>
                            </TableCell>
                            <TableCell>
                              {transaction.transactionType === 4
                                ? t("TRANSACTIONS.DEBIT")
                                : transaction.transactionType === 3
                                ? t("TRANSACTIONS.CREDIT")
                                : "-"}
                            </TableCell>
                            <TableCell>${transaction.amount}</TableCell>
                            <TableCell>
                              {transaction.status?.charAt(0)?.toUpperCase() +
                                transaction.status?.slice(1)}
                            </TableCell>
                            <TableCell>{transaction.actioneeType}</TableCell>
                            <TableCell>{transaction.comments || "-"}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    ) : (
                      <TableBody>
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            style={{ textAlign: "center" }}
                          >
                            <p className={classes.noTransaction}>
                              No transaction found.
                            </p>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    )}
                  </Table>
                </>
              )}
            </TableContainer>
          </Paper>
          <Stack alignItems="center">
            <Pagination
              count={parseInt(totalPages)}
              page={parseInt(page)}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </Grid>
    </div>
  );
};

export default Transaction;
