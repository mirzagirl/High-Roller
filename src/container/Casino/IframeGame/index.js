import React, { useEffect, useRef } from "react";

import { isMobile } from "react-device-detect";
import {
  CircularProgress,
  Grid,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";

import useStyles from "./IframeGame.styles";
import Game from "../Game";
import {
  getGameLinkStart,
  getTransactionStart,
  clearGameDetails,
} from "../../../redux-saga/redux/casino/lobby";
import LiveTable from "../../../components/LiveTable";
import { formatCategoryName } from "../../../utils/helper";
import { getGameDetailStart } from "../../../redux-saga/redux/casino/lobby/games";

const IframeGame = () => {
  const classes = useStyles();
  const params = useParams();
  const { gameId } = params;
  const iframeRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameLink, loading } = useSelector((state) => state.casinoLobby);
  const { gameDetail, relatedGames } = useSelector((state) => state.favorites);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getGameLinkStart({
        gameId: parseInt(gameId),
        device_type: "desktop",
        homeURL: "https://www.cryptorolls.com/",
      })
    );
    dispatch(getGameDetailStart({ gameId }));
  }, [dispatch, gameId]);

  const RequestFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    console.log("game test it page start ", window.location.pathname);
    console.log("game test it page start ", window.location.pathname);
    return () => {
      const pattern = /^\/game\//;
      dispatch(getTransactionStart());
      console.log(
        "test it back from iframe page end",
        window.location.pathname
      );
      dispatch(clearGameDetails());
      if (pattern.test(window.location.pathname)) {
        console.log("retunrn  from  test it");
        navigate("/all-games");
      } else {
        console.log("false           ooooooooooooooo test it");
      }
    };
  }, []);

  const GotoLobby = () => {
    navigate("/lobby");
  };
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

  const { darkMode } = useSelector((state) => state.themeSettings);

  return (
    <>
      {loading && !gameLink ? (
        <Grid className={classes.iframeCirculerLoader} textAlign="center">
          <CircularProgress size={60} />
        </Grid>
      ) : (
        <div className={classes.iframeBg}>
          <iframe
            src={gameLink}
            title="Game Frame"
            width="100%"
            height="741px"
            ref={iframeRef}
            allowFullScreen
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              border: "none",
              margin: 0,
              padding: 0,
              overflow: "hidden",
              zIndex: 999999,
            }}
          />
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            style={{ padding: "0 10px" }}
          >
            <Grid className={classes.iframeGameName}>
              <p>{gameDetail?.name || "Game Name"}</p>
            </Grid>

            <Grid
              className={`${classes.iframeIcon} ${classes.desktopiframeIcon}`}
            >
              <Grid className={`${classes.icons} demoClass`}>
                <Tooltip
                  title={`Provider : ${gameDetail?.MasterCasinoProvider?.name}  |
              Category : ${gameDetail?.MasterGameSubCategory?.name}
              `}
                  arrow
                >
                  <img src="/images/iframe-icon-1.svg" alt="iframe-icon-1" />
                </Tooltip>
              </Grid>

              <Grid className={classes.icons} onClick={RequestFullScreen}>
                <img src="/images/iframe-icon-2.svg" alt="iframe-icon-2" />
              </Grid>

              <Grid className={classes.icons} onClick={GotoLobby}>
                <img src="/images/iframe-icon-4.svg" alt="iframe-icon-4" />
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
      {!isMobile ? (
        <Grid className={classes.wrap}>
          {loading ? (
            <Grid textAlign="center">
              {/* <CircularProgress className={classes.categoryLoader} size={50} /> */}
            </Grid>
          ) : (
            relatedGames?.length > 0 && (
              <Grid key={"related games"} className={classes.contentWrap}>
                <Grid className={classes.innerHeading}>
                  <Grid className={classes.innerHeadingLeft}>
                    {darkMode ? (
                      <img src="/images/star-icon.svg" alt="Star Icon" />
                    ) : (
                      <img src="/images/light-star-icon.svg" alt="Star Icon" />
                    )}
                    <Typography variant="h6" gutterBottom>
                      Related Games
                    </Typography>
                  </Grid>

                  {relatedGames?.length > 6 && (
                    <Link
                      to={`/view-all/false/${relatedGames?.[0]?.MasterGameSubCategory?.masterGameSubCategoryId}/${relatedGames?.[0]?.MasterGameSubCategory?.name}`}
                      className={classes.btnSecondary}
                    >
                      See all
                    </Link>
                  )}
                </Grid>
                <Grid className={classes.filterWrap}>
                  <ScrollMenu
                    LeftArrow={relatedGames?.length > 6 && LeftButton}
                    RightArrow={relatedGames?.length > 6 && RightButton}
                    wrapperClassName="horizontalScrollWrapper"
                  >
                    {relatedGames?.map((game, index) => (
                      <Game
                        providerName={game?.MasterCasinoProvider?.name || null}
                        key={`${game.masterCasinoGameId}${index}`}
                        thumbnailUrl={game.thumbnailUrl}
                        name={game.name}
                        gameId={game.masterCasinoGameId}
                        filterBy={"Category"}
                        filterName={formatCategoryName(
                          relatedGames?.[0]?.masterGameSubCategory?.name
                        )}
                        searchGame={false}
                        isFavorite={!!game.isFavorite || true}
                      />
                    ))}
                  </ScrollMenu>
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      ) : (
        " "
      )}

      {!isMobile ? <LiveTable /> : ""}
    </>
  );
};

export default IframeGame;
