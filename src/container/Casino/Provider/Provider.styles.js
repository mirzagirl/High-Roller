import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
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
  providerWrap: {
    position: "relative",
    "& .horizontalScrollWrapper": {
      position: "relative",
    },
    "& .MuiButtonBase-root": {
      padding: "0 !important",
      width: "33px",
      minWidth: "33px !important",
      background: theme.palette?.background?.highlightSocialApp,
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "8px !important",
      opacity: "1 !important",
      [theme.breakpoints.down("md")]: {
        width: "26px",
        minWidth: "26px !important",
        borderRadius: "6px !important",
      },
      "& svg": {
        fill: "#666773",
      },
    },
    "& .MuiTabs-scrollableX": {
      margin: "0 10px",
    },
    "& .react-horizontal-scrolling-menu--arrow-left": {
      top: "-55px",
      right: "40px",
      position: "absolute",
      transform: "translateY(0)",
      [theme.breakpoints.down("md")]: {
        top: "-40px",
        right: "30px",
      },
    },

    "& .react-horizontal-scrolling-menu--arrow-right": {
      top: "-55px",
      right: "0px",
      position: "absolute",
      transform: "translateY(0)",
      [theme.breakpoints.down("md")]: {
        top: "-40px",
      },
    },
  },

  providerSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "22px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
  },

  heading: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      gap: "5px",
    },
    "& h6": {
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    "& img": {
      [theme.breakpoints.down("md")]: {
        width: "15px",
      },
    },
  },

  providerDetail: {
    gap: "12px",
    justifyContent: "center",
    display: "flex",
  },

  providerName: {
    cursor: "pointer",
    background: theme.palette?.background?.providers,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "9px 0 !important",
    minWidth: "194px",
    marginRight: "12px",
    [theme.breakpoints.down("md")]: {
      minWidth: "91px",
      borderRadius: "8px",
    },
    "& span": {
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    "& img": {
      width: "70%",
      objectFit: "contain",
      aspectRatio: "12/4",
    },
  },

  providerArrow: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "& span": {
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "8px",
      display: "inline-block",
      padding: "2px 11px",
      background: theme.palette?.background?.highlightSocialApp,
    },
  },
}));
