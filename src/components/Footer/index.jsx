import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List, ListItem, Box } from "@mui/material";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { toggleSlider } from "../Header/toggle";
import useStyles from "./Footer.styles";
import { getCryptoCurrencyPriceStart } from "../../redux-saga/redux/casino/lobby";
import { getCMSDataStart } from "../../redux-saga/redux/cms";
import {
  toggleChatBox,
  toggleDepositWithdraw,
  toggleGamesSearchBox,
} from "../../redux-saga/redux/settings/themeSettings";

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    sidebarOpen,
    isChatBoxOpen,
    isGamesSearchBoxOpen,
    isDepositWithdrawOpen,
  } = useSelector((state) => state.themeSettings);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { crptoCurrencyPrice, loadCrypto } = useSelector(
    (state) => state.casinoLobby
  );
  const handleDepositWithdrawOpen = () => {
    if (isLoggedIn) dispatch(toggleDepositWithdraw(!isDepositWithdrawOpen));
    else toast.error("Please loggin to do deposit");
  };
  useEffect(() => {
    dispatch(getCryptoCurrencyPriceStart());
  }, []);
  useEffect(() => {
    dispatch(getCMSDataStart());
  }, [dispatch]);

  const handleChatBox = () => {
    if (isLoggedIn) dispatch(toggleChatBox(!isChatBoxOpen));
    else toast.error("Please loggin to chat");
  };

  const handleSearchBox = () => {
    dispatch(toggleGamesSearchBox(!isGamesSearchBoxOpen));
  };
  return (
    <>
      <div className={classes.footerWrapper}>
        <Grid className={classes.footerWrap}>
          <Grid container spacing={2} className={classes.footerflex}>
            <Grid xs={12} item sm={12} md={12} lg={12} xl={4}>
              <Grid className={classes.footrAboutWrap}>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  className={classes.footerLogo}
                >
                  <span className={classes.logo}></span>
                  <span className={classes.logoName}>Casino</span>
                </Link>
                <Typography>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="javascript:void(0);"
                  >
                    SWEEPSTAR.IO
                  </Link>{" "}
                  is built by gamblers for gamblers. With our unique community
                  and a huge selection of games like Crash, HashDice, Plinko,
                  Slots, and many more. Your greatest casino adventure is
                  waiting for you!
                </Typography>
              </Grid>
            </Grid>

            <Grid xs={12} item sm={12} md={12} lg={6} xl={4}>
              <Grid container className={classes.footerLinWrap}>
                <Grid
                  item
                  xs={3}
                  sm={6}
                  md={6}
                  lg={6}
                  className={classes.footerLink}
                >
                  <h6>SweepStar.io</h6>
                  <List>
                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/all-games")}
                    >
                      Games
                    </ListItem>

                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/promotions")}
                    >
                      Promotion
                    </ListItem>

                    <ListItem>Allife Program</ListItem>
                  </List>
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={6}
                  md={6}
                  lg={6}
                  className={classes.footerLink}
                >
                  <ListItem onClick={() => navigate("/cms/about-us")}>
                    <h6 style={{ cursor: "pointer", marginLeft: "-14px" }}>
                      About Us
                    </h6>
                  </ListItem>
                  <List style={{ textDecoration: "none" }}>
                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/cms/privacy-policy")}
                    >
                      Privacy Policy
                    </ListItem>
                    <ListItem
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/cms/terms-and-conditions")}
                    >
                      Terms and Conditions
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} item sm={12} md={12} lg={6} xl={3}>
              <Grid className={classes.footerPaymentFollowWrap}>
                <Grid className={classes.paymentWrapper}>
                  <h6>Payments methods</h6>
                  <Grid>
                    <List>
                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-1.svg" alt="bitcoin" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-2.svg" alt="tether" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-3.svg" alt="p-3" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-4.svg" alt="p-4" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-5.svg" alt="p-5" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/p-6.svg" alt="p-6" />
                        </Link>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>

                <Grid className={classes.followWrapper}>
                  <h6>Follow Us</h6>
                  <Grid>
                    <List>
                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-1.svg" alt="telegram" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-2.svg" alt="youtube" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-3.svg" alt="twitter" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-4.svg" alt="insta" />
                        </Link>
                      </ListItem>

                      {/* <ListItem>
                        <Link to="/">
                          <img src="/images/f-5.svg" alt="f-5" />
                        </Link>
                      </ListItem> */}

                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-6.svg" alt="tiktok" />
                        </Link>
                      </ListItem>

                      <ListItem>
                        <Link to="/">
                          <img src="/images/f-7.svg" alt="facebook" />
                        </Link>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.footerCryptoLogo}>
          <List>
            <ListItem>
              <img src="/images/crypto-1.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-2.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-3.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-4.png" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-5.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-6.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-7.svg" alt="crypto icon" />
            </ListItem>

            <ListItem>
              <img src="/images/crypto-8.svg" alt="crypto icon" />
            </ListItem>
          </List>
        </Grid>

        <Box className={classes.currencyWrapper}>
          <div className={classes.currencyDetail}>
            <p>
              <img src="/images/fc-1.svg" alt="bitcoin" />
              <span>
                1 BTC <small>=</small>
              </span>
            </p>
            <p>
              {(!loadCrypto && `$${crptoCurrencyPrice[0]?.current_price}`) ||
                "00.00"}
            </p>
          </div>

          <div className={classes.currencyDetail}>
            <p>
              <img src="/images/fc-2.svg" alt="ltc" />
              <span>
                1 LTC <small>=</small>
              </span>
            </p>
            <p>
              {(!loadCrypto && `$${crptoCurrencyPrice[3]?.current_price}`) ||
                "00.00"}
            </p>
          </div>

          <div className={classes.currencyDetail}>
            <p>
              <img src="/images/fc-3.svg" alt="trx" />
              <span>
                1 TRX <small>=</small>
              </span>
            </p>
            <p>
              {(!loadCrypto && `$${crptoCurrencyPrice[2]?.current_price}`) ||
                "00.00"}
            </p>
          </div>

          <div className={classes.currencyDetail}>
            <p>
              <img src="/images/fc-4.svg" alt="eth" />
              <span>
                1 ETH <small>=</small>
              </span>
            </p>
            <p>
              {(!loadCrypto && `$${crptoCurrencyPrice[1]?.current_price}`) ||
                "00.00"}
            </p>
          </div>
        </Box>

        <Grid className={classes.copyRight}>
          <Typography>
            Copyright (C) 2023 SweepStar.io. All Rights Reserved.
          </Typography>
        </Grid>
      </div>

      <Grid className={classes.mobiFooter}>
        <ul>
          <li className={sidebarOpen && classes.active}>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
                toggleSlider(dispatch, sidebarOpen);
              }}
            >
              <Typography>
                <img src="/images/mob-f-1.svg" alt="footer-icon" />
                <span>Menu</span>
              </Typography>
            </Link>
          </li>
          <li className={isGamesSearchBoxOpen && classes.active}>
            <Link to="/" onClick={handleSearchBox}>
              <Typography>
                <img src="/images/mob-f-2.svg" alt="footer-icon" />
                <span>Search</span>
              </Typography>
            </Link>
          </li>
          <li className={isDepositWithdrawOpen && classes.active}>
            <Link onClick={handleDepositWithdrawOpen}>
              <Typography>
                <img src="/images/mob-f-6.svg" alt="footer-icon" />
              </Typography>
            </Link>
          </li>
          <li>
            <Link
              to="/promotions"
              className={
                matchPath("/promotions", location?.pathname || "zlehods") &&
                classes.active
              }
            >
              <Typography>
                <img src="/images/mob-f-3.svg" alt="footer-icon" />
                <span>Promo</span>
              </Typography>
            </Link>
          </li>
          <li className={isChatBoxOpen && classes.active}>
            <Link onClick={handleChatBox}>
              <Typography>
                <img src="/images/mob-f-5.svg" alt="footer-icon" />
                <span>Chat</span>
              </Typography>
            </Link>
          </li>
        </ul>
      </Grid>
    </>
  );
};

export default Footer;
