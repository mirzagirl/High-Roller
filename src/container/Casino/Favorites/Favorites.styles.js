import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btnPrimary: {
    background: theme?.palette?.primary2?.color,
    borderRadius: "5px",
    padding: "6px 20px",
    color: `${theme?.palette?.text?.default} !important`,
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    "&:hover": {
      background: theme?.palette?.primary1?.color,
      color: theme?.palette?.text?.default,
    },
  },
  selectTab: {
    "& .MuiPaper-root": {
      background: "#4e0077 !important",
    },
  },
  homeFilter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
    },
    "& .inputField, & button, & a": {
      margin: "5px",
    },
    "& .MuiInputBase-colorPrimary": {
      width: "auto",
      background: theme?.palette?.primary1?.color,
      borderRadius: "10px",
      color: "#fff",
      [theme.breakpoints.down("md")]: {
        marginRight: "10px",
        width: "200px",
        fontSize: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      "& img": {
        filter: "invert(1)",
      },
    },
    "& .MuiFormControl-root": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& .MuiInputBase-input": {
      padding: "10px",
      background: theme?.palette?.primary1?.color,
      borderRadius: "5px",
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "5px",
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
    "& .MuiButtonBase-root ": {
      height: "43px",
      margin: "0",
      [theme.breakpoints.down("sm")]: {
        padding: "6px 40px",
        height: "38px",
        fontSize: "12px",
      },
    },
    "& a": {
      textDecoration: "none",
      height: "43px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "6px 20px",
        height: "38px",
        margin: "0",
      },
      "& p": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: "600",
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
        },
        "& img": {
          width: "20px",
          marginRight: "5px",
        },
      },
    },
    "& .MuiGrid-item": {
      paddingTop: "0",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "5px 0",
      },
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      width: "100%",
    },
  },
  homeFilterContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
    },
  },
  contentWrap: {
    padding: "80px 0",
    [theme.breakpoints.down("md")]: {
      padding: "30px 10px",
    },
  },
  innerHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  innerHeadingLeft: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "5px",
      width: "20px",
    },
    "& .MuiTypography-h6": {
      margin: "0",
      color: "#FFF",
      fontWeight: "600",
      fontSize: "16px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
    },
  },
  noGamesMsg: {
    margin: "auto",
    paddingLeft: "23px",
    marginTop: "50px",
  },
  circulerLoader: {
    margin: "auto",
  },
  loadMoreButton: {
    border: "1.4px solid rgba(106, 113, 199, 0.84)",
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%) !important",
    borderRadius: "12px !important",
    padding: "6px 20px",
    color: "#fff !important",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
  },

  favSection: {
    flexDirection: "column",
    marginTop: "60px",
  },

  loadMoreBar: {
    display: "flex",
    justifyContent: "center",
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

  moreGamesLoader: {
    marginBottom: "-20px",
    marginTop: "40px",
    color: theme?.palette?.primary2?.color,
  },
  resetBtn: {
    height: "44px",
  },
  lobbyBtnIcon: {
    verticalAlign: "-0.2em",
  },
  viewAllContentWrap: {
    [theme.breakpoints.down("sm")]: {
      padding: "10px 15px",
    },
  },
  viewAllCtaWrap: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "8px",
      width: "100%",
      justifyContent: "space-between",
      marginTop: "5px",
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& a": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: "10px",
      },
    },
  },
  favHeading: {
    textAlign: "center",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
    "& .MuiTypography-h5": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  footerDiv: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "calc(100vh - 400px)",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 500px)",
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
      padding: "0 !important",
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
}));
