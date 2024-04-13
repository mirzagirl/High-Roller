import React, { useState } from "react";

import { useNavigate, matchPath, useLocation } from "react-router-dom";
import i18next from "i18next";
import {
  Toolbar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Select,
  MenuItem,
  Divider,
} from "@material-ui/core";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

import useStyles from "./PageLayout.styles";
import { sidebarListItems, languageMenu } from "./constants";

export default function CloseSidebar({
  games,
  handleCloseLanguage,
  switchTheme,
}) {
  const classes = useStyles();
  const location = useLocation();
  const { darkMode } = useSelector((state) => state.themeSettings);
  const [language, setLanguage] = useState(i18next.language);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const handleNavigate = (path) => {
    if (path === "/refer-friend") return;
    navigate(path);
  };

  const languageBtn = (
    <Select
      value={language}
      classNamePrefix="select"
      closeMenuOnSelect={true}
      isSearchable={true}
      className={classes.languageSelectClose}
      onChange={(event) => {
        setLanguage(event.target.value);
        handleCloseLanguage(event.target.value);
      }}
      MenuProps={{
        className: classes.languageSelectDropDown,
      }}
    >
      {languageMenu?.map((item, index) => {
        return (
          <MenuItem
            key={index}
            value={item?.value}
            MenuProps={{
              className: classes.signupCountryList,
            }}
          >
            {item?.alt}
          </MenuItem>
        );
      })}
    </Select>
  );

  const themeBtn = (
    <ListItem className={classes.listItem} button onClick={switchTheme}>
      <ListItemIcon className={classes.listItem}>
        <span className={classes.themeChangeBtn}>
          {darkMode ? (
            <img src="/images/sun-icon.svg" alt="moon" />
          ) : (
            <img src="/images/sun.svg" alt="sun" />
          )}
        </span>
      </ListItemIcon>
    </ListItem>
  );
  const sideList = () => (
    <Grid className={classes.menuSliderContainerClose} component="div">
      {sidebarListItems?.slice(0, 2).map((listItem, index) => (
        <ListItem
          className={classes.listItem}
          button
          key={index}
          onClick={() => {
            if (isLoggedIn) handleNavigate(listItem?.to);
            else
              toast.error(`Please login to see ${listItem.listText}`, {
                id: "reanct",
              });
          }}
        >
          <ListItemIcon className={classes.listItem}>
            <span
              className={
                matchPath(
                  `/${listItem.to}`.replace(/ /g, "%20"),
                  location?.pathname
                )
                  ? classes.navigationIconHighlighted
                  : classes.navigationIcon
              }
            >
              <img
                alt={listItem.alt}
                src={
                  darkMode
                    ? matchPath(
                        `/${listItem.to}`.replace(/ /g, "%20"),
                        location?.pathname
                      )
                      ? listItem?.onHighlight
                      : listItem.listIconDark
                    : matchPath(
                        `/${listItem.to}`.replace(/ /g, "%20"),
                        location?.pathname
                      )
                    ? listItem?.onHighlight
                    : listItem.listIconLight
                }
              />
            </span>
          </ListItemIcon>
        </ListItem>
      ))}
      <List>
        {games?.map((listItem, index) => {
          return (
            <ListItem
              className={classes.listItem}
              button
              key={index}
              onClick={() => {
                handleNavigate(
                  `view-all/false/${listItem.masterGameSubCategoryId}/${listItem.name}`
                );
              }}
            >
              <ListItemIcon className={classes.listItem}>
                <span
                  className={
                    matchPath(
                      `view-all/false/${listItem.masterGameSubCategoryId}/${listItem.name}`.replace(
                        / /g,
                        "%20"
                      ),
                      location?.pathname
                    )
                      ? classes.navigationIconHighlighted
                      : classes.navigationIcon
                  }
                >
                  <img alt={"games"} src={listItem?.iconName} />
                </span>
              </ListItemIcon>
            </ListItem>
          );
        })}

        <Divider className={classes.dividerStyle} />

        <ListItem
          className={classes.listItem}
          button
          onClick={() => navigate("/promotions")}
        >
          <ListItemIcon className={classes.listItem}>
            <span className={classes.promotionIcon}>
              {darkMode ? (
                <img alt="Favorites icon" src="/images/promotion.svg" />
              ) : (
                <img src="/images/Framepromotions-light.svg" alt="game icon" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>
        {sidebarListItems?.slice(11, 14).map((listItem, index) => (
          <ListItem
            className={classes.listItem}
            button
            key={index}
            onClick={() => {
              handleNavigate(listItem?.to);
            }}
          >
            <ListItemIcon className={classes.listItem}>
              <span
                className={
                  matchPath(
                    `/${listItem.to}`.replace(/ /g, "%20"),
                    location?.pathname
                  ) && listItem.listText !== "Leaderboard"
                    ? classes.navigationIconHighlighted
                    : classes.navigationIcon
                }
              >
                <img
                  alt={listItem.alt}
                  src={
                    darkMode
                      ? matchPath(
                          `/${listItem.to}`.replace(/ /g, "%20"),
                          location?.pathname
                        )
                        ? listItem?.onHighlight
                        : listItem.listIconDark
                      : matchPath(
                          `/${listItem.to}`.replace(/ /g, "%20"),
                          location?.pathname
                        )
                      ? listItem?.onHighlight
                      : listItem.listIconLight
                  }
                />
              </span>
            </ListItemIcon>
          </ListItem>
        ))}

        {languageBtn}
        {themeBtn}
        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItem}>
            <span className={classes.liveChaticon}>
              {darkMode ? (
                <img src="/images/live-chat.svg" alt="liev chat" />
              ) : (
                <img src="/images/Group 37489chat.svg" alt="liev chat" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItem}>
            <span className={classes.socialIcons}>
              {darkMode ? (
                <img src="/images/sc-1.svg" alt="social-icon" />
              ) : (
                <img src="/images/Vectortelegram-dark.svg" alt="social-icon" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItem}>
            <span className={classes.socialIcons}>
              {darkMode ? (
                <img src="/images/sc-2.svg" alt="social-icon" />
              ) : (
                <img src="/images/you-tube.svg" alt="social-icon" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItem}>
            <span className={classes.socialIcons}>
              {darkMode ? (
                <img src="/images/sc-3.svg" alt="social-icon" />
              ) : (
                <img src="/images/twittertwi.svg" alt="social-icon" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.listItem} button>
          <ListItemIcon className={classes.listItem}>
            <span className={classes.socialIcons}>
              {darkMode ? (
                <img src="/images/sc-4.svg" alt="social-icon" />
              ) : (
                <img src="/images/Shapeinsta.svg" alt="social-icon" />
              )}
            </span>
          </ListItemIcon>
        </ListItem>
      </List>
    </Grid>
  );

  return (
    <>
      <Grid className={classes.closeSidebarWrap}>
        <Toolbar>{sideList()}</Toolbar>
      </Grid>
    </>
  );
}
