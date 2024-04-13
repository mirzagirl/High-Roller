import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  fullScreenModal: {
    maxHeight: "200px",
    marginTop: "100px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialogContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  yesButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 16,
    backgroundColor: "#007bff",
    color: "white",
    marginRight: 10,
  },
  noButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 16,
    backgroundColor: "#ccc",
    color: "black",
  },
  categoryLoader: {
    margin: "40px",
  },
  innerHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  btnSecondary: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    display: "flex",
    alignItems: "center",
    color: theme.palette?.background?.seeAll,
    padding: "5px 16px",
    textDecoration: "none",
    marginRight: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 12px",
      fontSize: "14px",
    },
    [theme.breakpoints.down(1028)]: {
      padding: "0px 10px",
      fontSize: "12px",
      marginRight: "60px",
    },
    "&:hover": {
      background: "rgba(43, 43, 56, 0.8)",
      color: "#666773",
    },
  },
  filterWrap: {
    "& .MuiButtonBase-root.Mui-disabled": {
      display: "none",
      opacity: "0",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0 40px 0",
    position: "relative",
    padding: "9px 3px",
    [theme.breakpoints.down("xl")]: {
      margin: "30px 0",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "30px 0",
      padding: "9px 0px !important",
    },
    "& .MuiInputBase-root": {
      width: "100%",
    },

    "& fieldset": {
      border: "none",
    },

    "& .MuiSelect-select": {
      padding: "3px 14px",
    },

    [theme.breakpoints.down("md")]: {
      margin: "30px 0 24px 0 !important",
    },
    "& .react-horizontal-scrolling-menu--wrapper": {
      maxWidth: "100% !important",
    },

    "& .react-horizontal-scrolling-menu--scroll-container": {
      height: "230px",
      gap: "9px",
      [theme.breakpoints.down("md")]: {
        height: "200px",
        gap: "5px",
      },
    },

    "& .react-horizontal-scrolling-menu--arrow-right": {
      position: "absolute",
      right: "0px",
      top: "0",
      transform: "translateY(-55px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-65px)",
      },

      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-48px)",
      },
      [theme.breakpoints.down("md")]: {
        transform: "translateY(-57px)",
      },
    },
    "& .react-horizontal-scrolling-menu--arrow-left": {
      position: "absolute",
      right: "40px",
      top: "0",
      transform: "translateY(-55px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-65px)",
      },
      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-48px)",
        right: "30px",
      },
      [theme.breakpoints.down("md")]: {
        transform: "translateY(-57px)",
      },
    },

    "& .react-horizontal-scrolling-menu--item": {
      height: "200px",
      width: "154px",
      aspectRatio: "1",
      [theme.breakpoints.down("md")]: {
        width: "126px",
        height: "162px",
      },
      "& .MuiGrid-item": {
        height: "100%",
      },
    },
  },
  noGamesMsg: {
    textAlign: "center",
  },
  iframeCirculerLoader: {
    marginTop: "300px",
    alignItems: "center",
  },
  innerHeadingLeft: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "15px",
      width: "20px",
      [theme.breakpoints.down("md")]: {
        marginRight: "6px",
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
        marginRight: "5px",
      },
    },
    "& .MuiTypography-h6": {
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "29px",
      textTransform: "capitalize",
      color: theme.palette?.text?.default,
      margin: "0",
      [theme.breakpoints.down(1200)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(1028)]: {
        fontSize: "16px",
      },
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

  iframeBg: {
    background: theme.palette?.background?.iframeBg,
    borderTop: theme.palette?.background?.iframeBorder,
    boxShadow: theme.palette?.background?.iframeShadow,
    borderRadius: "20px",
    padding: "10px",
    marginTop: "120px",
    marginBottom: "40px",
    [theme.breakpoints.down(991)]: {
      marginTop: "70px",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "0",
      height: "calc(100vh - 125px)",
      minHeight: "calc(100vh - 125px)",
    },
    "& iframe": {
      border: "none",
      borderRadius: "20px",
      // "@media all and (orientation: landscape)" : {
      //   height:"90% !important"
      // },
      [theme.breakpoints.down(991)]: {
        width: "100%",
        height: "96%",
        borderRadius: "10px",
      },
    },
  },
  iframeIcon: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    [theme.breakpoints.down(991)]: {
      padding: "0",
    },
  },

  mobileiframeIcon: {
    display: "none",
    [theme.breakpoints.down(991)]: {
      display: "flex",
    },
  },

  icons: {
    background: theme.palette?.background?.iframeIconBg,
    boxShadow: theme.palette?.background?.iframeIconShadow,
    borderRadius: "8px",
    height: "33px",
    width: "33px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.down(991)]: {
      height: "20px",
      width: "20px",
      borderRadius: "4px",
    },
    "& img": {
      [theme.breakpoints.down(991)]: {
        width: "6px",
      },
    },
  },

  iframeGameName: {
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "33px",
    textTransform: "uppercase",
    color: theme.palette?.text?.default,
    [theme.breakpoints.down(991)]: {
      padding: "0",
      fontSize: "12px",
      lineHeight: "normal",
    },
    "& p": {
      margin: "0",
    },
  },
  favIconWrap: {
    "& img": {
      width: "16px !important",
      height: "16px",
    },
  },
}));
