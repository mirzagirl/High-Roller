import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btnPrimary: {
    background: theme?.palette?.background?.doneBtnBg,
    border: theme?.palette?.background?.balanceBOrder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    textTransform: "capitalize !important",
    width: "100%",
    color: "#FFFFFF !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      lineHeight: "14px",
      borderRadius: "8px !important",
    },
    "&:hover": {
      background: theme?.palette?.background?.doneBtnBg,
    },
  },
  myprofileForm: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  signupFromFname: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    "& .MuiFormControl-root": {
      "&:first-child": {
        marginRight: "15px",
      },
    },
  },
  formGroup: {
    position: "relative",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& span": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: "#757786",
      marginBottom: "8px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "14px",
      },
    },
  },
  showLink: {
    position: "absolute",
    right: "15px",
    top: "40px",
    fontSize: "10px",
    textDecoration: "none",
    color: theme?.palette?.text?.default,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      top: "31px",
    },
  },
  accountRight: {
    padding: "20px",
    background: theme?.palette?.background?.tablebackground,
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      borderRadius: "8px",
    },
  },
  myprofileBottom: {
    borderRadius: "20px",
    height: "100%",
    "& .MuiInputBase-input": {
      height: "34px",
      padding: "5px 10px",
      background: theme?.palette?.background?.default2,
      color: theme?.palette?.text?.default,
      fontSize: "16px",
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      paddingLeft: "16px",
      paddingRight: "50px",
      fontWeight: "500",
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
          border: "none",
        },
      },
      [theme.breakpoints.down("sm")]: {
        height: "22px",
        borderRadius: "8px !important",
        fontSize: "12px",
      },
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "& .MuiFormLabel-root": {
      top: "-5px",
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.3)",
    },
    "& fieldset": {
      borderColor: "#8f66ab",
      border: "none",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    "& .MuiTypography-h4": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      color: theme?.palette?.text?.default,
      marginBottom: "10px",
      textTransform: "capitalize",
    },
  },
  authBtnWrap: {
    "& button": {
      fontSize: "16px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },

  closeIcon: {
    position: "relative",
  },

  closeIconWrap: {
    top: "0",
    right: "0",
    height: "20px",
    width: "20px",
    display: "flex",
    padding: "8px",
    position: "absolute",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: "1",
    color: " #858DA0",
    "& .MuiSvgIcon-root": {
      fontSize: "15px",
      color: " #858DA0",
      cursor: "pointer",
    },
    "&:hover": {
      transform: "rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
    },
  },
}));
