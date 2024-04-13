import React from "react";

import { useSelector } from "react-redux";
import { Grid, Typography, Button, Skeleton } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";

import useStyles from "./SemiBanner.styles";

const SemiBanner = () => {
  const classes = useStyles();
  const { bonusImages, loading } = useSelector((state) => state.casinoLobby);

  const LeftButton = () => {
    const { scrollPrev } = React.useContext(VisibilityContext);
    return (
      <Button className={classes.leftArrow} onClick={() => scrollPrev()}>
        <KeyboardArrowLeftTwoToneIcon />
      </Button>
    );
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
    <Grid className={classes.bonusSection}>
      <Grid className={classes.bonusHeading}>
        <Grid className={classes.bonusHeadingImage}>
          <img src="/images/bonus-icon.svg" alt="bonus icon" />
          <span>Bonuses</span>
        </Grid>
        <Button className={classes.seeAllBtn} disabled>
          See all
        </Button>
      </Grid>

      <Grid>
        <ScrollMenu
          LeftArrow={bonusImages?.length > 2 && LeftButton}
          RightArrow={bonusImages?.length > 2 && RightButton}
          wrapperClassName="horizontalScrollWrapper"
        >
          {!loading
            ? bonusImages?.map((game, index) => (
                <Grid key={game.index}>
                  <Grid className={classes.position2}>
                    <img
                      src={game?.image_url || "/images/bonus-img1.svg"}
                      alt={"bonus-img1"}
                    />
                    <Typography
                      className={`${classes.imageText} ${classes.textWidth}`}
                    >
                      Win Real Crypto by Free Play
                    </Typography>
                  </Grid>
                </Grid>
              ))
            : [1, 2, 3, 4, 5].map((index) => (
                <Skeleton
                  key={index}
                  style={{ marginRight: "10px" }}
                  height={200}
                  width={352}
                />
              ))}
        </ScrollMenu>
      </Grid>
    </Grid>
  );
};

export default SemiBanner;
