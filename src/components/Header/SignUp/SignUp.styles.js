import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mobileSignupmodal: {
    [theme.breakpoints.down("xl")]: {
      height: "300px",
      overflowY: "scroll",
    },
  },
  signupBg: {
    backgroundImage: "url('/images/signup-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    minHeight: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#151515",
    height: "100%",
    flexFlow: "column",
    "& .MuiTypography-h5": {
      fontSize: "32px",
      fontWeight: "bold",
    },
    "& .MuiTypography-body1": {
      fontSize: "30px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  signupLeft: {
    padding: "0px 80px",
    "& .MuiTypography-h5": {
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center",
    },
    "& .MuiTypography-body1": {
      marginTop: "10px",
      fontSize: "20px",
      marginBottom: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    "& .MuiInputBase-input": {
      height: "20px",
      padding: "10px",
      background: " #26282D",
      borderRadius: "30px",
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
          borderColor: "rgba(151, 135, 210, 1)",
        },
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "30px",
    },
    "& .MuiFormLabel-root": {
      top: "-5px",
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.3)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px",
    },
    "& fieldset": {
      borderColor: "#8f66ab",
    },
  },
  disabled: {
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
    border: "1.4px solid rgba(106, 113, 199, 0.84)",
    boxShadow: "0px 4px 12px 2px rgba(108, 93, 193, 0.24)",
    borderRadius: "12px !important",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "26px",
    width: "100%",
    textTransform: "capitalize !important",
    color: "#FFFFFF !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      height: "32px !important",
      borderRadius: "8px !important",
    },
    opacity: 0.5,
  },
  signupFromFname: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    position: "relative",
    "& .MuiFormControl-root": {
      width: "50%",
      "&:first-child": {
        marginRight: "15px",
      },
    },
  },

  formGroup: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },

  // "& form": {
  //   fontWeight: "500",
  //   fontSize: "14px",
  //   lineHeight: "20px",
  //   display: "flex",
  //   alignItems: "center",
  //   color: theme?.palette?.text?.color,
  //   marginBottom: "8px",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "12px",fformInput
  //   },
  // },
  formInput: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.text?.textcolor,
    marginBottom: "8px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },

  showLink: {
    position: "absolute",
    right: "0px",
    top: "36px",
    textDecoration: "none",
    color: theme?.palette?.text?.default,
    [theme.breakpoints.down("md")]: {
      top: "30px",
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
      height: "32px !important",
      borderRadius: "8px !important",
    },
    "&:hover": {
      background: theme?.palette?.background?.buttonbackground,
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
  showPwdWrap: {
    position: "relative",
    width: "50%",
    marginRight: "15px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  showPwd: {
    position: "absolute",
    top: "6px",
    right: "10px",
    zIndex: "1",
    "& a": {
      fontSize: "12px",
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
  phoneInput: {
    background: "#26282D !important",
    color: "#6b6b6b",
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
    "& ul": {
      display: "flex",
      background: theme?.palette?.background?.default2,
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
      color: "#FFFFFF",
    },
  },

  signupFromWrap: {
    padding: "20px",
    backgroundColor: theme?.palette?.background?.providers,
    borderRadius: "0 0 12px 12px !important",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    "& .MuiInputBase-input": {
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: "32px",
        height: "32px",
        borderRadius: "8px",
      },
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      height: "44px",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "44px",
      color: `${theme?.palette?.text?.placeholder} !important`,
      padding: "0",
      paddingLeft: "20px",
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#7458DC",
        },
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "12px",
      borderColor: "transparent !important",
    },
    "& .MuiFormLabel-root": {
      // top: "-5px",
      fontSize: "12px",
      color: theme?.palette?.text?.color,
    },
    "& fieldset": {
      borderColor: "transparent",
    },
  },
}));
