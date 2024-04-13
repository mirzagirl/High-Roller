import React, { useEffect, useState } from "react";

import {
  Grid,
  ListItem,
  List,
  Tab,
  Tabs,
  Box,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import { isMobile } from "react-device-detect";

import SemiBanner from "../SemiBanner";
import useStyles from "./Lobby.styles";
import { getFeaturedGamesStart } from "../../../redux-saga/redux/casino/lobby/games";
import {
  getProvidersStart,
  getSubCategoryStart,
  getBannerImagesStart,
  getBonusImagesStart,
  getGamesStart,
} from "../../../redux-saga/redux/casino/lobby";
import CategoryGames from "./CategoryGames";
import { getReferralCode } from "../../../redux-saga/redux/casino/lobby";
import SearchGames from "../SearchGames";
import { formatCategoryName } from "../../../utils/helper";

import "react-multi-carousel/lib/styles.css";

const Lobby = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { referralCode } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(0);
  const { subCategory } = useSelector((state) => state.casinoLobby);

  const cryptoResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1751 },
      items: 6,
    },
    miniDesktop1: {
      breakpoint: { max: 1750, min: 1537 },
      items: 3,
    },
    miniDesktop: {
      breakpoint: { max: 1536, min: 1200 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1199, min: 992 },
      items: 1,
    },
    miniTablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(
      getGamesStart({
        limit: 21,
        isMobile: isMobile,
        isFeatured: true,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(getFeaturedGamesStart());
  }, []);

  useEffect(() => {
    if (referralCode) {
      dispatch(getReferralCode(referralCode));
    }
    dispatch(getSubCategoryStart());
    dispatch(getProvidersStart());
  }, [dispatch, referralCode]);

  useEffect(() => {
    dispatch(getBannerImagesStart());
    dispatch(getBonusImagesStart());
  }, []);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleClick = (name, id, filterBy) => {
    if (filterBy === "providers") {
      navigate(`/view-all/${id}/false/${name}`);
    }
    if (filterBy === "category") {
      navigate(`/view-all/false/${id}/${name}`);
    }
  };

  const handleSearch = (search) => {
    setSearchValue(search);
  };
  const reset = () => {
    setSearchValue("");
  };
  return (
    <>
      <div className={classes.bannerImage}>
        {isMobile ? (
          <img src="images/mobile-banner.png" alt="" />
        ) : (
          <img src="images/banner-image.png" alt="" />
        )}

        <div className={`${classes.legend} legend`}>
          <h6>Allife Program</h6>
          <p>
            Share promo code and get 5% to 20% of their Players Monthly Profits
          </p>
          <button className={classes.imageBanner}>Promo Code</button>
        </div>
      </div>
      <Grid>
        <SemiBanner />
      </Grid>

      <Grid className={classes.cryptoSection}>
        <Grid className={classes.cryptoText}>
          <List>
            <ListItem>
              <span>12</span>
              <span>Crypto currencies</span>
            </ListItem>

            <ListItem>
              <span>55</span>
              <span>Crypto networks</span>
            </ListItem>
          </List>
        </Grid>

        <Grid className={`${classes.cryptoLogo} cryptoLogo-2`}>
          <Carousel
            responsive={cryptoResponsive}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={5000}
            arrows={false}
          >
            <img src="images/crypto-1.svg" alt="crypto icon" />

            <img src="images/crypto-2.svg" alt="crypto icon" />

            <img src="images/crypto-3.svg" alt="crypto icon" />

            <img src="images/crypto-4.png" alt="crypto icon" />

            <img src="images/crypto-5.svg" alt="crypto icon" />

            <img src="images/crypto-6.svg" alt="crypto icon" />
          </Carousel>
        </Grid>

        <Grid className={classes.showAll}>
          <Box to="/" className={classes.showAllText}>
            Show All
          </Box>
        </Grid>
      </Grid>

      <Grid className={`${classes.filterWrap} ${classes.filterWrapCenter}`}>
        {isMobile ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            disabled={!(subCategory?.length > 0)}
            label="Category"
            className={classes.selectTab}
            onChange={handleChangeCategory}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={0}>Category</MenuItem>
            {subCategory?.length > 0 &&
              subCategory.map((item) => (
                <MenuItem
                  onClick={() =>
                    handleClick(
                      item.name,
                      item.masterGameSubCategoryId,
                      "category"
                    )
                  }
                  key={item.name}
                  value={item.masterGameSubCategoryId}
                >
                  {formatCategoryName(item.name)}
                </MenuItem>
              ))}
          </Select>
        ) : (
          subCategory?.length > 0 && (
            <Tabs value="" indicatorColor="none" variant="scrollable">
              <div key={"All"}>
                <Grid className={classes.filterWrapLeft}>
                  <img
                    style={{
                      width: "18px",
                    }}
                    src={"/images/All Games.svg"}
                    alt="Casino icon"
                  />
                  <Tab
                    onClick={() => {
                      navigate("/all-games");
                    }}
                    value={"All Games"}
                    key={"All"}
                    label={"All Games"}
                  ></Tab>
                </Grid>
              </div>
              {subCategory?.map((item, val) => (
                <div key={item.tenantGameSubCategoryId}>
                  <Grid className={classes.filterWrapLeft}>
                    {item.iconName ? (
                      <img src={item?.iconName} alt="Casino icon" />
                    ) : (
                      <img src="images/sidebar-poker.svg" alt="Casino icon" />
                    )}
                    <Tab
                      onClick={() =>
                        handleClick(
                          item?.name,
                          item?.masterGameSubCategoryId,
                          "category"
                        )
                      }
                      disableRipple={true}
                      value={item?.name}
                      key={item?.masterGameSubCategoryId}
                      label={item?.name}
                    ></Tab>
                  </Grid>
                </div>
              ))}
            </Tabs>
          )
        )}
        {!isMobile && (
          <Grid
            className={`${classes.filterWrapRight} ${classes.lobbysearchInput}`}
          >
            <Grid className={classes.formGroup}>
              <TextField
                autoComplete="off"
                autoCorrect="off"
                s
                id="outlined-basic"
                variant="outlined"
                placeholder={"Search for Game"}
                onChange={(e) => {
                  if (e?.target?.value?.length > 20) return;
                  handleSearch(e?.target?.value);
                }}
                value={searchValue}
                inputProps={{
                  maxLength: 40, // Set the maximum character limit
                }}
              />
              {searchValue ? (
                <CloseIcon onClick={reset} style={{ cursor: "pointer" }} />
              ) : (
                <img alt="srch" src="images/search.png" />
              )}
            </Grid>
          </Grid>
        )}
      </Grid>

      {isMobile && (
        <Grid className={classes.formGroup}>
          <div className={classes.mobSearch}>
            <SearchGames />
          </div>
        </Grid>
      )}

      <CategoryGames searchValue={searchValue} />
    </>
  );
};

export default Lobby;
