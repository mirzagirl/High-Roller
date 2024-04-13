import React from "react";

import { Grid, Typography, Box, Tab, Button } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useStyles from "./Provider.styles";

const Provider = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { providers } = useSelector((state) => state.casinoLobby);
  const LeftButton = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.leftArrow} onClick={() => scrollPrev()}>
        <KeyboardArrowLeftTwoToneIcon />
      </Button>
    );
  };

  const handleProviderSelect = (id, name) => {
    navigate(`/view-all/${id}/false/${name}`);
  };

  const RightButton = () => {
    const { scrollNext } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.rightArrow} onClick={() => scrollNext()}>
        <NavigateNextTwoToneIcon />
      </Button>
    );
  };
  return (
    <Box className={classes.providerWrap}>
      <Grid className={classes.providerSection}>
        <Grid className={classes.heading}>
          <img src="/images/provider-1.svg" alt="provider" />
          <Typography variant="h6">Providers</Typography>
        </Grid>
      </Grid>
      <ScrollMenu
        LeftArrow={providers?.length > 7 && LeftButton}
        RightArrow={providers?.length > 7 && RightButton}
        wrapperClassName="horizontalScrollWrapper"
      >
        {providers?.map((item, index) => (
          <Tab
            component={() => (
              <Grid
                className={classes.providerName}
                onClick={() => {
                  handleProviderSelect(
                    item?.masterCasinoProviderId,
                    item?.name
                  );
                }}
              >
                <img
                  src={
                    item?.thumbnailUrl
                      ? item?.thumbnailUrl
                      : "/images/provider.svg"
                  }
                  alt="provider"
                />
              </Grid>
            )}
            value={item?.name}
            key={item?.masterGameSubCategoryId}
            label={item?.name}
          ></Tab>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default Provider;
