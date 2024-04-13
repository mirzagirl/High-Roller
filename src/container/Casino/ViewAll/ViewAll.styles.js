import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  homeBanner: {
    backgroundImage: "url('/images/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    minHeight: "350px",
    borderRadius: "20px",
    margin: "20px 0",
  },
  rightArrow: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px !important",
    height: "33px",
    width: "33px",
    minWidth: "33px !important",
    padding: "0 !important",
    [theme.breakpoints.down(1028)]: {
      height: "25px",
      width: "25px",
      minWidth: "25px !important",
    },
    "& svg": {
      fill: "#666773",
      [theme.breakpoints.down("md")]: {
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "26px",
      width: "26px",
      minWidth: "26px !important",
    },
    "&:hover": {
      backgroundColor: "rgba(43, 43, 56, 0.8)",
    },
  },
  leftArrow: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px !important",
    height: "33px",
    width: "33px",
    minWidth: "33px !important",
    padding: "0 !important",
    display: "flex !important",
    opacity: "1 !important",
    [theme.breakpoints.down(1028)]: {
      height: "25px",
      width: "25px",
      minWidth: "25px !important",
    },
    "& svg": {
      fill: "#666773",
      [theme.breakpoints.down("md")]: {
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "26px",
      width: "26px",
      minWidth: "26px !important",
    },
    "&:hover": {
      backgroundColor: "rgba(43, 43, 56, 0.8)",
    },
  },
  bannerContentSubText: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      alignItems: "flex-start",
    },
  },
  btnWrap: {
    margin: "10px 0",
    display: "block",
  },
  btnPrimary: {
    border: "1.4px solid rgba(106, 113, 199, 0.84)",
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%) !important",
    borderRadius: "12px !important",
    padding: "6px 20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    margin: "0 auto",
    width: "fit-content",
  },
  btnSecondary: {
    background: "#440073",
    borderRadius: "10px",
    padding: "6px 20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    "&:hover": {
      background: "#360359",
      color: "#fff",
    },
  },
  bannerContent: {
    padding: "30px 0 30px 60px",
    "& .MuiTypography-h1": {
      fontWeight: "bold",
      fontSize: "50px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
      },
      "& br": {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    "& img": {
      marginRight: "5px",
      [theme.breakpoints.down("sm")]: {
        marginRight: "0",
        width: "100px",
      },
    },
    "& .MuiTypography-body1": {
      fontSize: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    "& .MuiButton-textPrimary": {
      padding: "6px 40px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px",
    },
  },
  resetSearch: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    justifyContent: "space-between",
  },

  homeFilter: {
    padding: "30px 0",
    width: "100%",
    [theme.breakpoints.down(1500)]: {
      padding: "10px 0",
    },
    "& .MuiInputBase-colorPrimary": {
      width: "100%",
      background: theme.palette?.background?.footer,
      border: theme.palette?.background?.inputBorder,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      color: "#000",
      [theme.breakpoints.down("md")]: {
        marginRight: "10px",
        width: "100%",
        fontSize: "12px",
      },
      [theme.breakpoints.down(1500)]: {
        marginRight: "10px",
        width: "100%",
        fontSize: "12px",
      },
    },
    "& .MuiInputBase-input": {
      height: "34px",
      padding: "5px 10px 5px 20px",
      background: theme.palette?.background?.footer,
      color: `${theme?.palette?.text?.default} !important`,
      borderRadius: "12px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "#000",
    },
    "& img": {
      filter: "invert(1)",
      opacity: "0.3",
    },
  },

  innerHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    gap: "20px",

    [theme.breakpoints.down(1500)]: {
      flexDirection: "column",
      gap: "10px",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },

    [theme.breakpoints.down(675)]: {
      flexDirection: "column",
      gap: "0",
    },
  },
  innerHeadingLeft: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down(1500)]: {
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "10px",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "10px",
    },
    "& img": {
      marginRight: "5px",
      width: "20px",
      [theme.breakpoints.down(1028)]: {
        width: "15px",
        marginRight: "0",
      },
    },
    "& .MuiTypography-h6": {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "29px",
      textTransform: "capitalize",
      color: "#FFFFFF",
      margin: "0",

      [theme.breakpoints.down(1028)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(1200)]: {
        fontSize: "14px",
      },
    },
    "& a": {
      textDecoration: "none",
    },
  },
  circulerLoader: {
    margin: "auto",
  },
  moreGamesLoader: {
    marginBottom: "-20px",
    marginTop: "40px",
  },
  searchInput: {
    width: "100%",
  },
  providerDropDown: {
    marginLeft: "8px",
  },

  imageHover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: theme?.palette?.background?.hoverBg,
    borderTop: theme?.palette?.background?.gameTopBorder,
    top: "0",
    left: "0",
  },
  "& playBtn": {
    width: "50px",
    objectFit: "contain",
    margin: "0 auto",
  },

  active: {
    background: `${theme.palette?.background?.toggleBackground} !important`,
    border: theme.palette?.background?.toggleBorder,
    "& span": {
      color: "#fff !important",
    },
    "& img": {
      filter: "invert(1)",
    },
  },

  gameList: {
    overflowX: "scroll",
    marginTop: "120px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
    },
    "& .react-horizontal-scrolling-menu--item": {
      marginRight: "15px",
    },
    "& .react-horizontal-scrolling-menu--arrow-left": {
      top: "0",
      right: "40px",
      position: "absolute",
      transform: "translateY(0)",
    },

    "& .react-horizontal-scrolling-menu--arrow-right": {
      top: "0",
      right: "0px",
      position: "absolute",
      transform: "translateY(0)",
    },
    "& ul": {
      "& li": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme?.palette?.background?.tablebackground,
        boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
        borderRadius: "12px",
        padding: "8px 0",
        minHeight: "60px",
        minWidth: "118px",
        cursor: "pointer",
        "& span": {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          textTransform: "capitalize",
          color: "#757786",
          display: "inline-block",
          paddingTop: "4px !important",
          width: "100%",
          textAlign: "center",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          padding: "0 10px",
        },
        "&:hover": {
          opacity: "0.8",
        },
      },
    },
  },

  gamesWrapper: {
    justifyContent: "center",
    "& .MuiGrid-item": {
      float: "left",
      marginBottom: "50px",
      width: "152px",
      height: "200px",
      aspectRatio: "1",
      marginRight: "18px",
      [theme.breakpoints.down("sm")]: {
        width: "128px",
        height: "170px",
        marginRight: "5px",
      },
    },
    "& .casinoCard": {
      "& .MuiTypography-body1": {
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: "120px",
        },
      },
    },
  },

  "& .css-vj1n65-MuiGrid-root": {
    marginRight: "14px",
  },

  sortBtn: {
    "& p": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: " 600",
      fontSize: "16px",
      lineHeight: "19px",
      display: "flex",
      alignItems: "center",
      color: "#FFFFFF",
      margin: "0 0 10px 0",
    },

    "& button": {
      background: "#202026",
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px !important",
      width: "100%",
      padding: "12px 15px !important",
      justifyContent: "flex-start",
      gap: "10px",
      display: "flex",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "17px",
      alignItems: "center",
      color: "#4D4D5B",
      textTransform: "capitalize",
      marginBottom: "30px",
      minHeight: "46px",
    },
  },

  resetBtn: {
    background: theme?.palette?.background?.btntextBackground,
    border: "none",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px !important",
    minWidth: "120px",
    height: "44px",
    color: theme.palette?.text?.default,
    textTransform: "capitalize",
    fontSize: "16px",
    "&:hover": {
      background: theme?.palette?.background?.btntextBackground,
      border: theme.palette?.background?.inputBorder,
      color: theme.palette?.text?.default,
    },
  },

  selectTab: {
    background: theme?.palette?.background?.btntextBackground,
    border: theme.palette?.background?.inputBorder,
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    minWidth: "120px",
    height: "44px",
    "& .css-9425fu-MuiOutlinedInput-notchedOutline": {
      border: "0",
    },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      padding: "0px 0 0 10px !important",
      color: theme.palette?.text?.default,
      minHeight: "auto",
    },
    "& svg": {
      color: "#7C8497 !important",
    },
    "& .MuiSelect-select MuiSelect-outlined": {
      WebkitTextFillColor: "#fff",
    },
    "& fieldset": {
      border: "none",
    },
  },

  filterSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      gap: "7px",
    },
  },

  filterText: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    whiteSpace: "nowrap",

    "& span": {
      [theme.breakpoints.down("1200")]: {
        display: "none",
      },
    },
  },

  sortText: {
    marginRight: "58px",
    whiteSpace: "nowrap",
    [theme.breakpoints.down(1500)]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
    "& span": {
      [theme.breakpoints.down("1200")]: {
        display: "none",
      },
    },
  },

  ShowMoreBar: {
    "& p": {
      textAlign: "center",
      justifyContent: "center",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: theme.palette?.text?.color,
      margin: "0",
      padding: "12px 0 20px 0",
    },
  },

  more: {
    position: "relative",
    lineHeight: "0",
    marginTop: "60px",
    minWidth: "320px",
    "& .MuiLinearProgress-root": {
      borderRadius: "7px",
      background: theme.palette.background.barBg,
    },
    "& .MuiLinearProgress-bar1Determinate": {
      borderRadius: "12px",
      border: theme.palette.background.balanceBOrder,
      background: theme.palette.background.innerBar,
      boxShadow: theme.palette.background.barBgProcessShadow,
    },
  },

  barBg: {
    background: theme.palette?.background?.barBg,
    borderRadius: "7px",
    display: "inline-block",
    width: "100%",
    height: "3px",
  },

  barBgProcess: {
    background: theme.palette?.background?.barBgProcessBg,
    boxShadow: theme.palette?.background?.barBgProcessShadow,
    borderRadius: "12px",
    display: "inline-block",
    width: "50%",
    height: "3px",
    position: "absolute",
    left: "0",
    top: "2px",
  },

  loadMoreBar: {
    display: "flex",
    flexDirection: "column",
  },

  signupCountryList: {
    "& .MuiMenu-paper": {
      maxHeight: "350px",
      backgroundColor: "transparent",
      boxShadow: "inherit",
    },
    "& .MuiMenu-list": {
      background: theme.palette?.background?.filterbg,
      "& li": {
        color: theme.palette?.text?.default,
      },
    },
  },
}));
