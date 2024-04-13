import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  userForm: {
    position: "relative",
    "& button": {
      background: theme?.palette?.background?.btntextBackground,
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px",
      fontWeight: "500",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      gap: "6px",
      color: theme?.palette?.text?.btntextcolor,
      position: "absolute",
      top: "42px",
      left: "40px",
      padding: "0 !important",
      [theme.breakpoints.down("sm")]: {
        height: "24px",
        minWidth: "24px",
        borderRadius: "6px !important",
        top: "35px",
        left: "10px",
      },
    },
    "& img": {
      width: "100%",
      display: "block",
    },
    "& span": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  closeIconWrap: {
    padding: "8px",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: "1",
    right: "10px",
    width: "24px",
    height: "24px",
    background: theme?.palette?.background?.iframeIconBg,
    border: theme?.palette?.background?.iframeBorder,
    boxShadow: theme?.palette?.background?.iframeIconShadow,
    borderRadius: "6px",
    top: "40px",
    zIndex: "9",
    display: "flex",
    cursor: "pointer",
    color: " #858DA0",
    "& .MuiSvgIcon-root": {
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      top: "30px",
    },
    "&:hover": {
      transform: "rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
    },
  },

  signupFromWrap: {
    padding: "20px",
    backgroundColor: theme?.palette?.background?.providers,
    borderRadius: "0 0 12px 12px !important",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  },

  loginSignupGrp: {
    "& ul": {
      display: "flex",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      lineHeight: "44px",
      marginBottom: "40px",
      [theme.breakpoints.down("md")]: {
        borderRadius: "8px",
        lineHeight: "30px",
      },
      "& li": {
        width: "100%",
        justifyContent: "center",
        display: "flex",
        cursor: "pointer",
        "& a": {
          fontWeight: "500",
          fontSize: "14px",
          color: theme?.palette?.text?.btntextcolor,
          textDecoration: "none",
          [theme.breakpoints.down("md")]: {
            fontSize: "12px",
          },
        },
      },
    },
  },

  active: {
    background: theme?.palette?.background?.btnbackground,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      borderRadius: "8px",
    },
    "& a": {
      color: "#FFFFFF ",
    },
  },

  verifyHeading: {
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      alignItems: "center",
      width: "100%",
      color: theme?.palette?.text?.default,
      margin: "0",
      padding: "0",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },

  verifyParagraph: {
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "140%",
      textAlign: "center",
      color: "#757786",
      width: "100%",
      margin: "12px auto 40px auto",
      padding: "0",
      maxWidth: "290px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },

  textArea: {
    textAlign: "center",
    "& div": {
      justifyContent: "center",
    },
    "& input": {
      [theme.breakpoints.down("md")]: {
        height: "36px",
        width: "32px !important",
        margin: "0 5px",
      },

      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "8px",
      height: "44px",
      width: "40px !important",
      padding: "0",
      textAlign: "center !important",
      border: "0 !important",
      color: theme?.palette?.text?.default,
      margin: "0 10px",
      "&:focus": {
        outline: "none",
      },
    },
    "& fieldset": {
      border: "none",
    },
  },

  sendCode: {
    "& P": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "140%",
      textAlign: "center",
      width: "100%",
      color: "#757786",
      marginTop: "40px",
      marginBottom: "0",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        marginTop: "20px",
      },
      "& a": {
        color: theme?.palette?.text?.default,
        textDecoration: "none",
        paddingLeft: "5px",
      },
    },
  },
  btnPrimary: {
    [theme.breakpoints.down("md")]: {
      fontSize: "12px !important",
      lineHeight: "14px !important",
      borderRadius: "8px !important",
      marginBottom: "10px !important",
    },
    background: theme?.palette?.background?.buttonbackground,
    border: theme?.palette?.background?.toggleBorder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "26px",
    width: "100%",
    textTransform: "capitalize !important",
    color: "#FFFFFF !important",
    marginTop: "40px !important",
    marginBottom: "32px !important",
    "&:hover": {
      background: theme?.palette?.background?.buttonbackground,
    },
  },

  backIcon: {
    width: "auto !important",
  },
}));
