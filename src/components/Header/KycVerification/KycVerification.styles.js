import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  verifyHeading: {
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      alignItems: "center",
      width: "100%",
      color: theme?.palette?.text?.color,
      margin: "0",
      padding: "0",
      textAlign: "center",
    },
  },

  calIcon: {
    "& button": { padding: "0 15px !important" },
  },

  active: {
    background: "#2B2B38",
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    "& a": {
      color: "#FFFFFF !important",
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
      height: "44px",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
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
        // height: "32px",
        lineHeight: "14px",
        fontSize: "12px",
        borderRadius: "8px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "12px",
      borderColor: "transparent !important",
      backdropFilter: "inherit !important",
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

  formGroup: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiSelect-select": {
      lineHeight: "44px",
    },

    "& .MuiInputLabel-formControl": {
      color: "#4D4D5B",
      padding: "0",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "23px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: "12px",
      },
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-adornedEnd": {
      paddingRight: "0",
      position: "relative",
    },
    "& .MuiInputAdornment-positionEnd": {
      position: "absolute",
      right: "0",
      "& button": {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    "& span": {
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
  },
  formInput: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    color: theme?.palette?.text?.textcolor,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  signupCountryList: {
    maxHeight: "350px",
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
    marginTop: "40px",
    marginBottom: "32px",
    "&:hover": {
      background: theme?.palette?.background?.buttonbackground,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "14px",
      marginBottom: "0px",
      borderRadius: "8px !important",
      marginTop: "20px",
    },
  },

  fileUploadBtn: {
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme?.palette?.background?.default2} !important`,
    borderRadius: "12px !important",
    padding: "20px !important",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "140px",
    },
    "& input": {
      height: "100%",
      width: "100%",
      opacity: "0",
    },
    "& img": {
      position: "absolute",
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
    "&:hover": {
      backgroundColor: `${theme?.palette?.background?.default2} !important`,
    },
    "& button": {
      height: "200px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#1D1D23",
      borderRadius: "12px",
      "&:hover": {
        background: "#1D1D23",
      },
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
    "& svg": {
      fill: "#858DA0",
    },
    [theme.breakpoints.down("md")]: {
      top: "30px",
    },
    "&:hover": {
      transform: "rotate(90deg)",
      transition: "transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s",
    },
  },

  "& .MuiDialogContent-root": {
    marginTop: "85px",
  },

  "& .MuiSelect-icon": {
    color: "#fff !important",
  },
  selectInput: {
    "& svg": {
      color: "#6D6F8A",
      fill: "#6D6F8A",
    },
  },
}));
