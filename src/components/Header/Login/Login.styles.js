import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  formGroup: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& form": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: "#757786",
      marginBottom: "8px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },

  formInput: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.text?.color,
    marginBottom: "8px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },

  btnPrimary: {
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
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "14px !important",
      borderRadius: "8px !important",
    },
  },

  userForm: {
    position: "relative",
    "& img": {
      width: "100%",
      display: "block",
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

  loginSignupGrp: {
    background: theme?.palette?.background?.btntextcolor,
    "& ul": {
      display: "flex",
      background: theme?.palette?.background?.buttonWallet,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      lineHeight: "44px",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        borderRadius: "8px",
        lineHeight: "30px",
      },
      "& li": {
        width: "100%",
        justifyContent: "center",
        display: "flex",
        // background:  theme?.palette?.background?.default2,
        cursor: "pointer",
        "& a": {
          fontWeight: "500",
          fontSize: "14px",
          color: `${theme?.palette?.text?.btntextcolor} !important`,
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
    "& a": {
      color: theme?.palette?.text?.btntextcolor,
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "8px",
    },
  },

  loginFormWrap: {
    padding: "20px",
    backgroundColor: theme?.palette?.background?.providers,
    borderRadius: "0 0 12px 12px !important",
    [theme.breakpoints.down("md")]: {
      borderRadius: "0 0 8px 8px !important",
      padding: "10px",
    },
    "& .MuiInputBase-input": {
      height: "44px",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      // color: "#4D4D5B !important",
      color: `${theme?.palette?.text?.placeholder} !important`,
      padding: "0",
      paddingLeft: "20px",
      paddingRight: "50px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#7458DC",
        },
      },
      [theme.breakpoints.down("md")]: {
        height: "32px",
        borderRadius: "8px",
        fontSize: "12px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "12px",
      borderColor: "transparent !important",
    },
    "& .MuiFormLabel-root": {
      // top: "-5px",
      fontSize: "12px",
      // color: "rgba(255, 255, 255, 0.3)",
    },
    "& fieldset": {
      borderColor: "transparent",
    },
  },
  showLink: {
    position: "absolute",
    right: "10px",
    top: "40px",
    fontSize: "10px",
    textDecoration: "none",
    color: theme?.palette?.text?.default,
    [theme.breakpoints.down("md")]: {
      top: "35px",
    },
  },
  authBtnWrap: {
    marginBottom: "10px",
    "& .MuiTypography-root": {
      textAlign: "center",
      fontWeight: "600",
    },
  },
  forgotLink: {
    margin: "20px 0 40px 0",
    textAlign: "center",
    background: theme?.palette?.background?.btnbackground,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.background?.seeAll,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      borderRadius: "8px",
    },
    "& .MuiButton-root": {
      alignItems: "center",
      margin: "0",
      padding: "0",
      textDecoration: "none",
      color: theme?.palette?.text?.btntextcolor,
      fontSize: "1rem",
      fontWeight: "500",
      width: "100%",
      textTransform: "none",
      "&:hover": {
        background: "transparent",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: "16px",
      },
    },
    "& .MuiButton-root:hover": {
      background: "#440073",
    },
  },
  signUpLink: {
    textAlign: "center",
    "& .MuiButton-root": {
      margin: "0",
      padding: "0",
      textDecoration: "none",
      color: "#7458DC",
      fontSize: "1rem",
      textTransform: "none",
      marginLeft: "2px",
      "&:hover": {
        background: "transparent",
      },
    },
  },
  authHeading: {
    marginBottom: "30px",
    marginTop: "20px",
    "& .MuiTypography-h5": {
      textAlign: "center",
      fontSize: "30px",
      color: "rgba(151, 135, 210, 1)",
      fontWeight: "600",
    },
  },
  authLinkText: {
    maxWidth: "300px",
    margin: "15px auto 0",
    borderTop: "2px solid #26282D",
    "& .MuiTypography-body1": {
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px",
      color: " #99A4B0",
      "& a": {
        textDecoration: "none",
      },
    },
  },
}));
