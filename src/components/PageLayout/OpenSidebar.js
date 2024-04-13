import React, { useEffect, useState } from "react";

import {
  Toolbar,
  List,
  ListItem,
  Grid,
  Divider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { matchPath, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import i18next from "i18next";
import { toast } from "react-hot-toast";
import ReactSelect from "react-select";

import useStyles from "./PageLayout.styles";
import { sidebarListItems, languageOptions } from "./constants";
import { toggleSlider } from "../Header/toggle";

export default function OpenSidebar({
  games,
  loading,
  handleCloseLanguage,
  switchTheme,
}) {
  const len = games?.length || 0;
  const classes = useStyles({ len: len });
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.themeSettings);
  const navigate = useNavigate();
  const [language, setLanguage] = useState();
  const location = useLocation();
  const { sidebarOpen } = useSelector((state) => state.themeSettings);
  const { isLoggedIn } = useSelector((state) => state.authentication);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (sidebarOpen && isMobile) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "inherit";
    }
  }, [sidebarOpen, isMobile]);

  const handleClickPromotions = () => {
    if (isMobile) toggleSlider(dispatch, sidebarOpen);
    navigate("/promotions");
  };

  const handleNavigate = (path) => {
    if (path === "/refer-friend" || path === "/") return;
    navigate(path);
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (sidebarOpen && isMobile) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "inherit";
    }
    return () => {
      const body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "inherit";
    };
  }, [sidebarOpen, isMobile]);

  useEffect(() => {
    setLanguage((e) => {
      if (i18next.language === "en") return { value: "en", label: "English" };
      else if (i18next.language === "es")
        return { value: "es", label: "Español" };
      else {
        handleCloseLanguage("en");
        return { value: "en", label: "English" };
      }
    });
  }, [i18next?.language]);

  const sideList = () => (
    <Grid className={classes.menuSliderContainer} component="div">
      {isMobile && (
        <CloseIcon onClick={() => toggleSlider(dispatch, sidebarOpen)} />
      )}
      <div className={`${classes.leftListItemWrap} ${classes.listColor}`}>
        <List>
          {sidebarListItems?.slice(0, 2).map((g, i) => (
            <>
              <ListItem
                onClick={() => {
                  if (isMobile) toggleSlider(dispatch, sidebarOpen);

                  if (isLoggedIn) handleNavigate(g?.to);
                  else
                    toast.error(`Please login to see ${g.listText}`, {
                      id: "recents",
                    });
                }}
                key={i}
                className={
                  matchPath(
                    `/${g.to}`.replace(/ /g, "%20"),
                    location?.pathname || "zlehods"
                  ) && classes.navIconHighlighted
                }
              >
                <img
                  alt={g.alt}
                  src={
                    darkMode
                      ? matchPath(
                          `/${g.to}`.replace(/ /g, "%20"),
                          location?.pathname || "zlehods"
                        )
                        ? g?.onHighlight
                        : g.listIconDark
                      : matchPath(
                          `/${g.to}`.replace(/ /g, "%20"),
                          location?.pathname || "zlehods"
                        )
                      ? g?.onHighlight
                      : g.listIconLight
                  }
                />
                {g.listText}
              </ListItem>
            </>
          ))}
        </List>
      </div>

      <Divider className={classes.dividerStyle} />

      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          aria-expanded={true}
        >
          <Typography className={classes.acord}>Featured Games</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.leftListItemWrap}>
          {!loading && (
            <List className={classes.featureGameList}>
              {games?.map((listItem, i) => {
                return (
                  <>
                    <ListItem
                      onClick={() => {
                        if (isMobile) toggleSlider(dispatch, sidebarOpen);
                        handleNavigate(
                          `view-all/false/${listItem.masterGameSubCategoryId}/${listItem.name}`
                        );
                      }}
                      key={i}
                      className={
                        matchPath(
                          `view-all/false/${listItem.masterGameSubCategoryId}/${listItem.name}`.replace(
                            / /g,
                            "%20"
                          ),
                          location?.pathname || "zlehods"
                        ) && classes.navIconHighlighted
                      }
                    >
                      <img alt={"games"} src={listItem.iconName} />
                      {listItem.name}
                    </ListItem>
                  </>
                );
              })}
            </List>
          )}
        </AccordionDetails>
      </Accordion>

      <Divider className={classes.dividerStyle} />

      <Grid
        className={
          location.pathname === "/promotions"
            ? `${classes.promotionButton} ${classes.promotionActive}`
            : classes.promotionButton
        }
      >
        <Button id="demo-customized-promotions" onClick={handleClickPromotions}>
          {darkMode ? (
            <img src="/images/promotion.svg" alt="game icon" />
          ) : (
            <img src="/images/Framepromotions-light.svg" alt="game icon" />
          )}
          Promotions
        </Button>
      </Grid>

      <Divider className={classes.dividerStyle} />

      <div className={`${classes.leftListItemWrap} ${classes.listColor}`}>
        <List>
          {sidebarListItems?.slice(11, 14).map((g, i) => (
            <>
              <ListItem
                onClick={() => {
                  if (isMobile) toggleSlider(dispatch, sidebarOpen);
                  handleNavigate(g?.to);
                }}
                key={i}
                className={
                  matchPath(
                    `/${g.to}`.replace(/ /g, "%20"),
                    location?.pathname || "zlehods"
                  ) &&
                  g.listText !== "Leaderboard" &&
                  classes.navIconHighlighted
                }
              >
                <img
                  alt={g.alt}
                  src={
                    darkMode
                      ? matchPath(
                          `/${g.to}`.replace(/ /g, "%20"),
                          location?.pathname || "zlehods"
                        )
                        ? g?.onHighlight
                        : g.listIconDark
                      : matchPath(
                          `/${g.to}`.replace(/ /g, "%20"),
                          location?.pathname || "zlehods"
                        )
                      ? g?.onHighlight
                      : g.listIconLight
                  }
                />
                {g.listText}
                {g.listText === "Leaderboard" ||
                g.listText === "Refer a Friend" ? (
                  <span className={classes.commingTag}>Coming Soon</span>
                ) : null}
              </ListItem>
            </>
          ))}
        </List>
      </div>

      <Divider className={classes.dividerStyle} style={{ marginTop: "10px" }} />

      <Grid className={`${classes.languageButton} languageButton`}>
        <p>Language</p>
        <ReactSelect
          className="basic-single"
          classNamePrefix="select"
          value={language}
          onChange={(e) => {
            setLanguage(e);
            handleCloseLanguage(e.value);
          }}
          closeMenuOnSelect={true}
          isSearchable={false}
          name="color"
          options={languageOptions}
          styles={{
            menu: (provided) => ({
              ...provided,
              borderRadius: "15px",
              marginTop: "-1px",
            }),
            option: (provided, state) => ({
              ...provided,
              borderRadius: "15px",
              color: darkMode ? "#fff" : "#202228",
              backgroundColor: darkMode
                ? state.isSelected
                  ? "rgba(123, 98, 218, 0.16)"
                  : "#2B2B38"
                : state.isSelected
                ? "rgba(123, 98, 218, 0.16)"
                : "#fff",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: darkMode ? "#fff" : "#7B808F",
            }),
            menuList: (s) => ({
              ...s,
              background: !darkMode && "white",
              borderRadius: "15px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: "15px",
            colors: {
              ...theme.colors,
              neutral0: darkMode ? "#2B2B38" : "#f7df94",
              primary25: "rgba(123, 98, 218, 0.16)",
              neutral80: "#fff",
            },
          })}
        />
      </Grid>
      <Grid className={classes.toggleSection}>
        <div className={classes.modeOption}>
          <Grid className={classes.label} onClick={switchTheme}>
            {darkMode ? (
              <>
                <div
                  className={classes.ball}
                  style={
                    darkMode
                      ? { transform: "translateX(0px)" }
                      : { transform: "translateX(-35px)" }
                  }
                />
                <img src="/images/moon.svg" alt="sun" />
                <img src="/images/sun-icon.svg" alt="moon" />
              </>
            ) : (
              <>
                <div
                  className={classes.ball}
                  style={
                    darkMode
                      ? { transform: "translateX(0px)" }
                      : { transform: "translateX(-35px)" }
                  }
                />
                <img src="/images/sun.svg" alt="sun" />
                <img src="/images/monDark.svg" alt="moon" />
              </>
            )}
          </Grid>
          <div className={classes.switchTab}>
            <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
            <p>Currently</p>
          </div>
        </div>
      </Grid>

      <Grid className={classes.liveChatBtn}>
        <Button id="demo-customized-button" expandIcon={<ExpandMoreIcon />}>
          {darkMode ? (
            <img src="/images/live-chat.svg" alt="liev chat" />
          ) : (
            <img src="/images/Group 37489live-chat.svg" alt="liev chat" />
          )}
          Live Support
        </Button>

        <List className={classes.socialIcon}>
          <ListItem>
            {darkMode ? (
              <img src="/images/s-1.svg" alt="social icon" />
            ) : (
              <img src="/images/telegram-light.svg" alt="social icon" />
            )}
          </ListItem>

          <ListItem>
            {darkMode ? (
              <img src="/images/s-2.svg" alt="social icon" />
            ) : (
              <img src="/images/youtube-light.svg" alt="social icon" />
            )}
          </ListItem>

          <ListItem>
            {darkMode ? (
              <img src="/images/s-3.svg" alt="social icon" />
            ) : (
              <img src="/images/twi-light.svg" alt="social icon" />
            )}
          </ListItem>

          <ListItem>
            {darkMode ? (
              <img src="/images/s-4.svg" alt="social icon" />
            ) : (
              <img src="/images/instagram-light.svg" alt="social icon" />
            )}
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Grid className={classes.sidebarWrap}>
        <Toolbar>{sideList()}</Toolbar>
      </Grid>
    </>
  );
}
