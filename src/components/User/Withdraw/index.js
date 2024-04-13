import React from "react";

import {
  Grid,
  Typography,
  Button,
  Tab,
  Tabs,
  Box,
  InputAdornment,
  IconButton,
  Input,
  Select,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { t } from "i18next";

import useStyles from "./Withdraw.styles";
import Currency from "../Deposit/Currency";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Withdraw = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText("depcopr cpoes");
  };
  return (
    <section className={classes.accountRight}>
      <Typography className={classes.heading}>Wallet</Typography>
      <Box className={classes.tabWrap}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            className={classes.tabHeading}
          >
            <Tab label="Deposit" {...a11yProps(0)} />
            <Tab label="Withdraw" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid className={classes.formGroup}>
            <span>Deposit Currency</span>
            <Select
              style={{ width: "350px", height: "50px" }}
              id="u-name"
              placeholder={t("COMMON.DEPOSIT_CURRENCY")}
              variant="outlined"
              value={1}
            >
              <Currency />
            </Select>
          </Grid>
          <Grid className={classes.formGroup}>
            <span>Deposit Address</span>
            <Input
              id="email"
              placeholder={t("COMMON.DEPOSIT_ADDRESS")}
              variant="outlined"
              onChange={() => {}}
              value={"2318s3b43r4efn8384n38r34W"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={copyToClipBoard}
                    edge="end"
                  >
                    {" "}
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <div
            style={{
              height: 200,
              margin: "0 auto",
              maxWidth: 200,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={value}
              viewBox={"0 0 256 256"}
            />
          </div>
          <Button variant="primary" className={{ maxWidth: "100%" }}>
            Done
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid className={classes.formGroup}>
            <span>Deposit Currency</span>
            <Select
              style={{ width: "350px", height: "50px" }}
              id="u-name"
              placeholder={t("COMMON.DEPOSIT_CURRENCY")}
              variant="outlined"
              value={1}
            >
              <Currency />
            </Select>
          </Grid>
          <Grid className={classes.formGroup}>
            <span>Deposit Address</span>
            <Input
              id="email"
              placeholder={t("COMMON.DEPOSIT_ADDRESS")}
              variant="outlined"
              onChange={() => {}}
              value={"2318s3b43r4efn8384n38r34W"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={copyToClipBoard}
                    edge="end"
                  >
                    {" "}
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <div
            style={{
              height: 200,
              margin: "0 auto",
              maxWidth: 200,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={value}
              viewBox={"0 0 256 256"}
            />
          </div>
          <Button variant="primary" className={{ maxWidth: "100%" }}>
            Done
          </Button>
        </TabPanel>
      </Box>
    </section>
  );
};

export default Withdraw;
