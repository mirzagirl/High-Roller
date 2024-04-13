import React, { useEffect, useState, useRef } from "react";

import {
  Button,
  Grid,
  DialogContent,
  Menu,
  MenuItem,
  List,
  // TextField,
  ListItem,
  Box,
  LinearProgress,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
// import {
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   Person,
// } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import Modal from "../../hoc/modal/Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import useStyles from "./Header.styles";
import session from "../../utils/session";
import {
  logoutStart,
  refreshLoginStart,
  refreshMetamaskLoginStart,
  resetSuccess,
} from "../../redux-saga/redux/auth/authentication";
import headerMenu from "./HeaderMenu.list.json";
import { getUserProfileDetailsStart } from "../../redux-saga/redux/profile/myProfile";
import Wallet from "./Wallet";
import KycVerification from "./KycVerification";
import OtpVerify from "./OtpVerify";
import SelfieModel from "./SelfieModel";
import { accountMenuInitialState, headerList } from "./intialState.js";
import MyProfile from "../User/MyProfile";
import Transaction from "../User/Transaction";
import BetHistory from "../User/BetHistory";
import ResetPassword from "../User/ResetPassword";
import { toggleSlider } from "./toggle";
import Deposit from "../User/Deposit";
import SearchGames from "./../../container/Casino/SearchGames";
import SearchGamesMobile from "./../../container/Casino/SearchGames/searchMobile";
import { getPreviousChatsStart } from "../../redux-saga/redux/chatbox";
import { toggleDepositWithdraw } from "../../redux-saga/redux/settings/themeSettings";

const Header = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const offset = useRef(0);
  const [anchorElAccount, setAnchorElAccount] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openOtpVerify, setOtpVerify] = useState(false);
  const [openSelfieModel, setSelfieModel] = useState(false);
  const [openKycVerification, setKycVerification] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(
    accountMenuInitialState
  );
  const [gameProgress, setGameProgress] = useState(0);
  const { userDetails } = useSelector((state) => state.myProfile);
  const { sidebarOpen } = useSelector((state) => state.themeSettings);
  const { darkMode, isDepositWithdrawOpen } = useSelector(
    (state) => state.themeSettings
  );
  const classes = useStyles({ gameProgressWidth: gameProgress });

  const {
    loading,
    metamaskLoading,
    isLoggedIn,
    metamaskConnected,
    success,
    signup,
    metamaskSuccess,
    loginFailure,
  } = useSelector((state) => state.authentication);

  const openAccount = Boolean(anchorElAccount);
  const handleOpenLogin = () => {
    setOpenLogin((prevState) => !prevState);
  };
  const handleDepositWithdrawOpen = () => {
    dispatch(toggleDepositWithdraw(!isDepositWithdrawOpen));
  };
  const handleOpenSignUp = () => {
    setOpenSignUp((prevState) => !prevState);
  };

  const handleOpenKycVerification = () => {
    setKycVerification((prevState) => !prevState);
  };

  const handleOpenOtpVerify = () => {
    setOtpVerify((prevState) => !prevState);
  };

  const handleOpenSelfie = () => {
    setSelfieModel((prevState) => !prevState);
  };

  const handleOpenAccount = (event) => {
    setAnchorElAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorElAccount(null);
  };

  const handleCloseAll = () => {
    setOpenLogin(false);
    setOpenSignUp(false);
    setOtpVerify(false);
    setSelfieModel(false);
    setKycVerification(false);
  };
  const handleLogout = () => {
    setAnchorElAccount(null);
    dispatch(logoutStart());
  };
  useEffect(() => {
    const gameTotalPoint =
      userDetails?.currentLevel?.end_range -
      userDetails?.currentLevel?.start_range;

    if (gameTotalPoint === 0 || !gameTotalPoint) {
      setGameProgress(0);
    } else {
      const progress =
        ((userDetails?.points - userDetails?.currentLevel?.start_range) * 100) /
        gameTotalPoint;
      setGameProgress(progress);
    }
    if (!userDetails?.nextLevel) setGameProgress(100);
  }, [userDetails]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserProfileDetailsStart());
      dispatch(getPreviousChatsStart());
    }
    if (isLoggedIn && success) {
      setOpenLogin(false);
      dispatch(resetSuccess());
    }

    if (success && !isLoggedIn) {
      dispatch(resetSuccess());
    }
    if (signup && success) {
      setOpenSignUp(false);
      dispatch(resetSuccess());
    }
    if (loginFailure) {
      if (loginFailure.steps === 3) {
        setOpenLogin(false);
        setSelfieModel(false);
      }
      if (loginFailure.steps === 0) {
        setOpenLogin(false);
        setOtpVerify(true);
      }
      if (loginFailure.steps === 1) {
        setOpenLogin(false);
        setKycVerification(true);
      }
      if (loginFailure.steps === 2) {
        setOpenLogin(false);
        setSelfieModel(true);
      }
      if (loginFailure.steps === 4) {
        setOpenLogin(false);
        setKycVerification(true);
      }
      if (loginFailure.steps === 5) {
        setOpenLogin(false);
      }
    }
  }, [
    dispatch,
    isLoggedIn,
    success,
    signup,
    setOpenLogin,
    loading,
    metamaskLoading,
    metamaskConnected,
    t,
    navigate,
    metamaskSuccess,
    loginFailure,
  ]);

  useEffect(() => {
    if (offset.current !== 1) {
      if (session.getSessionCred) {
        const user = session.getSessionCred;
        if (user.isMetaMaskUser) {
          dispatch(refreshMetamaskLoginStart());
        } else {
          dispatch(refreshLoginStart());
        }
      }
      offset.current = 1;
    }
  }, [dispatch]);

  const handleOpenAccountMenu = (accountMenuType) => {
    setOpenAccountMenu((prevState) => ({
      ...prevState,
      [accountMenuType]: true,
    }));
  };

  const handleCloseAccountMenu = () => {
    setOpenAccountMenu(accountMenuInitialState);
  };

  const handleNavigate = (path) => {
    if (path === "/") return;
    navigate(path);
  };
  return (
    <div>
      <Grid className={classes.headerActive}>
        <div className={classes.headerContent}>
          <Grid className={classes.headerLeftSection}>
            <Link to="/" className={classes.headerLogo}>
              <span className={classes.logo}></span>
              <span className={classes.logoName}>Casino</span>
            </Link>
            {!isMobile && (
              <ListItem
                onClick={() => toggleSlider(dispatch, sidebarOpen)}
                className={classes.sidebarToggleIcon}
              >
                {sidebarOpen ? (
                  <img src="/images/toggle-icon.svg" alt="toggle icon" />
                ) : (
                  <img
                    className={classes.sidebarToggleIconClose}
                    src="/images/toggle-icon.svg"
                    alt="toggle icon"
                  />
                )}
              </ListItem>
            )}
          </Grid>

          <Grid className={classes.navigationWrapper}>
            <Grid>
              {!isMobile && <SearchGames />}
              {isMobile && <SearchGamesMobile />}
            </Grid>
            <List className={classes.navigation}>
              {headerList?.map((listItem, index) => (
                <ListItem
                  onClick={() => {
                    if (listItem.name === "All Games") {
                      handleNavigate(listItem?.to);
                    }
                  }}
                  key={index}
                >
                  <Link
                    className={
                      matchPath(
                        `/${listItem.to}`.replace(/ /g, "%20"),
                        location?.pathname || "zlehods"
                      ) &&
                      listItem.name !== "Leaderboard" &&
                      classes.listItemHighlight
                    }
                  >
                    {listItem.name}
                    {listItem.name === "Leaderboard" ||
                    listItem.name === "Refer a Friend" ? (
                      <span className={classes.commingTag}>Coming Soon</span>
                    ) : null}{" "}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid className={classes.headerRight}>
            {!isLoggedIn && !loading ? (
              <>
                <Button
                  className={classes.btnSecondary}
                  onClick={() => {
                    handleCloseAll();
                    handleOpenLogin();
                  }}
                >
                  {t("HEADER.LOGIN")}
                </Button>
                <Button
                  className={classes.btnPrimary}
                  onClick={() => {
                    handleCloseAll();
                    handleOpenSignUp();
                  }}
                >
                  {t("HEADER.SIGN_UP")}
                </Button>
              </>
            ) : null}
            {isLoggedIn ? (
              <>
                <Wallet />
                <>
                  <Grid
                    onClick={handleOpenAccount}
                    className={classes.userSection}
                  >
                    <Grid className="arrowIcon">
                      {anchorElAccount ? (
                        <img
                          style={{ transform: "rotate(-180deg)" }}
                          src="/images/up-arrrow.svg"
                          alt=""
                        />
                      ) : (
                        <img src="/images/up-arrrow.svg" alt="" />
                      )}
                    </Grid>

                    <Grid className={classes.headerUserName}>
                      <p>{userDetails?.user?.user_name}</p>
                      <Grid className={classes.headerProgressBar}>
                        <LinearProgress
                          thickness={6}
                          value={gameProgress}
                          variant="determinate"
                          className={classes.headerLinearBar}
                        />
                      </Grid>
                    </Grid>

                    <Grid className={classes.userImage}>
                      <span className={classes.userBorder}>
                        <img
                          src={
                            userDetails?.user?.profile_image ||
                            "/images/user_icon.svg"
                          }
                          alt="player-icon"
                        />
                      </span>
                      <span className={classes.userProfileLevel}>
                        {userDetails?.currentLevel?.id}
                      </span>
                    </Grid>
                  </Grid>
                  <Menu
                    id="account-menu"
                    anchorEl={anchorElAccount}
                    open={openAccount}
                    className={classes.accountMenu}
                    onClose={handleCloseAccount}
                    MenuListProps={{
                      "aria-labelledby": "account-button",
                    }}
                  >
                    {darkMode ? (
                      <div className={classes.profileShapIcon}>
                        <img src="/images/top-icon.svg" alt="" />
                      </div>
                    ) : (
                      <div className={classes.profileShapIcon}>
                        <img src="/images/w-top-icon.svg" alt="" />
                      </div>
                    )}
                    <Box display="flex">
                      <Grid className={classes.userImage}>
                        <span className={classes.userBorder}>
                          <img
                            src={
                              userDetails?.user?.profile_image ||
                              "/images/user_icon.svg"
                            }
                            alt="player-icon"
                          />
                        </span>
                        <span className={classes.userProfileLevel}>
                          {userDetails?.currentLevel?.id}
                        </span>
                      </Grid>

                      <Grid className={classes.userNameEmail}>
                        <p className={classes.userName}>
                          {userDetails?.user?.user_name || "Rietanolieya"}
                        </p>
                        <p className={classes.userEmail}>
                          {userDetails?.user?.email || "rietanolieya@gmail.com"}
                        </p>
                      </Grid>

                      <Grid>
                        <img
                          src="/images/profile-top-icon.svg"
                          alt="profile-top-icon"
                          className={classes.userIcon}
                        />
                      </Grid>
                    </Box>

                    <Box className={classes.progressBar}>
                      <LinearProgress
                        variant="determinate"
                        value={gameProgress}
                        className={classes.linearBar}
                      />
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
                    </Box>

                    {headerMenu?.map((item) => (
                      <MenuItem
                        key={item?.component}
                        onClick={() => handleOpenAccountMenu(item?.isOpen)}
                      >
                        <Link className={classes.myAccountLink}>
                          <img src={item.src} alt={item.alt} />
                          {t(item?.content)}
                        </Link>
                      </MenuItem>
                    ))}
                    <MenuItem
                      key={"Deposit"}
                      onClick={() => handleDepositWithdrawOpen()}
                    >
                      <Link className={classes.myAccountLink}>
                        <img
                          src={"/images/deposit-icon.svg"}
                          alt={"Lock Icon"}
                        />
                        {t("HEADER.DEPOSIT")}
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key={"Deposit"}
                      onClick={() => handleDepositWithdrawOpen()}
                    >
                      <Link className={classes.myAccountLink}>
                        <img
                          src={"/images/payment-icon/withdraw.svg"}
                          alt={"Lock Icon"}
                        />
                        {t("HEADER.WITHDRAW")}
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <span>
                        {" "}
                        <img src="/images/logout.svg" alt="logout Icon" />{" "}
                      </span>
                      {t("HEADER.LOG_OUT")}
                    </MenuItem>
                  </Menu>
                </>
              </>
            ) : null}

            <Grid className="hamburgerIcon">
              <DehazeIcon />
            </Grid>
          </Grid>
        </div>
        <Modal
          isShowing={openLogin}
          content={
            <DialogContent className={classes.loginWrap}>
              <Login
                handleCloseLogin={handleOpenLogin}
                handleOpenSignUp={handleOpenSignUp}
              />
            </DialogContent>
          }
          hide={handleOpenLogin}
        />
        <Modal
          isShowing={openSignUp}
          content={
            <DialogContent className={classes.signupWrap}>
              <SignUp
                openOtpModel={handleOpenOtpVerify}
                handleOpenLogin={handleOpenLogin}
                handleCloseSignUp={handleOpenSignUp}
              />
            </DialogContent>
          }
          hide={handleOpenSignUp}
        />
        <Modal
          isShowing={openOtpVerify}
          content={
            <DialogContent className={classes.signupWrap}>
              <OtpVerify
                closeOtpModel={handleOpenOtpVerify}
                openKycModel={handleOpenKycVerification}
              />
            </DialogContent>
          }
          hide={handleOpenOtpVerify}
        />
        <Modal
          isShowing={openKycVerification}
          content={
            <DialogContent
              className={`${classes.kycVerification} ${classes.signupWrap}`}
            >
              <KycVerification
                closeKycModel={handleOpenKycVerification}
                openSelfieModel={handleOpenSelfie}
              />
            </DialogContent>
          }
          hide={handleOpenKycVerification}
        />
        <Modal
          isShowing={openSelfieModel}
          content={
            <DialogContent className={classes.signupWrap}>
              <SelfieModel
                closeSelfieModel={handleOpenSelfie}
                openSelfieModel={handleOpenSelfie}
              />
            </DialogContent>
          }
          hide={handleOpenSelfie}
        />
        <Modal
          isShowing={openAccountMenu?.openMyProfile}
          content={
            <MyProfile
              userDetails={userDetails}
              gameProgress={gameProgress}
              handleCloseAccountMenu={handleCloseAccountMenu}
            />
          }
          hide={handleCloseAccountMenu}
        />
        <Modal
          isShowing={openAccountMenu?.openTransactions}
          content={
            // <DialogContent >
            <Transaction
              className={classes.transactionsWrap}
              handleCloseAccountMenu={handleCloseAccountMenu}
            />
            // </DialogContent>
          }
          hide={handleCloseAccountMenu}
        />
        <Modal
          isShowing={openAccountMenu?.openMyBets}
          content={
            <DialogContent>
              <BetHistory handleCloseAccountMenu={handleCloseAccountMenu} />
            </DialogContent>
          }
          hide={handleCloseAccountMenu}
        />
        <Modal
          isShowing={openAccountMenu?.openChangePassword}
          content={
            <DialogContent className={classes.loginWrap}>
              <ResetPassword handleCloseAccountMenu={handleCloseAccountMenu} />
            </DialogContent>
          }
          hide={handleCloseAccountMenu}
        />
        <Modal
          isShowing={isDepositWithdrawOpen}
          className="walletModalDialog"
          content={
            <DialogContent
              className={`${classes.loginWrap} ${classes.walletModal}`}
            >
              <Deposit handleDepositWithdrawOpen={handleDepositWithdrawOpen} />
            </DialogContent>
          }
          hide={handleDepositWithdrawOpen}
        />
      </Grid>
    </div>
  );
};

export default Header;
