import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  bonusSection: {
    background: theme.palette.background?.iframeBg,
    borderTop: theme.palette.background?.iframeBorder,
    boxShadow: theme.palette.background?.iframeShadow,
    borderRadius: "20px",
    marginTop: "40px",
    padding: "0 20px",
    position: "relative",
    paddingBottom: "32px",
    [theme.breakpoints.down(1028)]: {
      padding: "0 10px",
      borderRadius: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    "& img": {
      width: "100%",
    },
    "& .react-horizontal-scrolling-menu--arrow-right": {
      position: "absolute",
      right: "20px",
      top: "0",
      transform: "translateY(24px)",
      [theme.breakpoints.down(1028)]: {
        transform: "translateY(10px)",
      },
    },

    "& .react-horizontal-scrolling-menu--arrow-left": {
      position: "absolute",
      right: "60px",
      top: "0",
      transform: "translateY(24px)",
      [theme.breakpoints.down(1028)]: {
        padding: "0 10px",
        right: "40px",
        transform: "translateY(10px)",
      },
    },
    "& .react-horizontal-scrolling-menu--scroll-container": {
      height: "inherit",
    },
  },

  bonusHeading: {
    display: "flex",
    gap: "14px",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "24px",
    lineHeight: "32px",
    textTransform: "uppercase",
    color: theme.palette.text?.default,
    padding: "24px 0",
    [theme.breakpoints.down(1199)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down(1027.95)]: {
      padding: "10px 0",
    },
    justifyContent: "space-between",
    "& img": {
      width: "20px",
    },
  },

  bonusHeadingImage: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  position2: {
    position: "relative",
    width: "352px",
    marginRight: "10px",
    [theme.breakpoints.down(1199)]: {
      width: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },

  imageText: {
    position: "absolute",
    right: "40px",
    top: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "29px !important",
    textAlign: "right !important",
    textTransform: "capitalize",
    color: theme.palette.text?.default,
    [theme.breakpoints.down(991)]: {
      fontSize: "14px !important",
      lineHeight: "18px !important",
      right: "20px",
    },
  },

  textWidth: {
    maxWidth: "144px",
    textAlign: "right",
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
      background: "rgba(43, 43, 56, 0.8)",
      color: "#666773",
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
      background: "rgba(43, 43, 56, 0.8)",
      color: "#666773",
    },
  },

  seeAllBtn: {
    color: `${theme.palette?.background?.seeAll} !important`,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    display: "flex",
    padding: "5px 16px !important",
    fontSize: "16px !important",
    background: theme.palette?.background?.highlightSocialApp,
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    alignItems: "center",
    fontWeight: "500 !important",
    lineHeight: "23px !important",
    marginRight: "80px",
    borderRadius: "8px !important",
    textDecoration: "none !important",
    textTransform: "initial !important",
    "&:hover": {
      background: theme.palette?.background?.highlightSocialApp,
      color: `${theme.palette?.background?.seeAll} !important`,
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 12px",
      fontSize: "14px",
    },
    [theme.breakpoints.down(1028)]: {
      padding: "0px 10px !important",
      fontSize: "12px",
      marginRight: "75px",
      minHeight: "27px",
      maxHeight: "27px",
    },
  },
}));
