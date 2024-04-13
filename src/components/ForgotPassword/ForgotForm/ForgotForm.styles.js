import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    marginLeft: "5px",
  },
  btnPrimary: {
    color: "#FFFFFF !important",
    width: "100%",
    background: theme?.palette?.background?.buttonbackground,
    border: theme?.palette?.background?.toggleBorder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "26px",
    borderRadius: "12px !important",
    textTransform: "capitalize !important",
    "&:hover": {
      background: theme?.palette?.background?.buttonbackground,
    },
  },
  forgotForm: {
    maxWidth: "320px",
    width: "100%",
    padding: "20px",
    background: theme.palette.background?.sidebar,
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
  },
  forgotFormWrap: {
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
    marginBottom: "20px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  showLink: {
    position: "absolute",
    right: "10px",
    top: "13px",
    fontSize: "10px",
    textDecoration: "none",
    color: theme?.palette?.text?.default,
    cursor: "pointer",
  },
  forgotFormContainer: {
    "& fieldset": {
      border: "none",
    },
    "& .MuiTypography-root": {
      textAlign: "center",
      fontSize: "16px",
      marginBottom: "30px",
    },
    "& .MuiInputBase-input": {
      height: "30px",
      padding: "5px 10px",
      background: theme?.palette?.background?.default2,
      color: theme?.palette?.text?.default,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
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
        },
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
  },
  authBtnWrap: {
    margin: "15px 0",
    "& button": {
      fontSize: "14px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },
}));
