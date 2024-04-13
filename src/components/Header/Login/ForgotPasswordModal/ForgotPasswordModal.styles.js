import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  formGroup: {
    position: "relative",
    marginBottom: "20px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },

  btnPrimary: {
    color: theme?.palette?.text?.btntextcolor,
    width: "100%",
    background: `${theme?.palette?.background?.btnbackground} !important`,
    border: `${theme?.palette?.background?.socialIconBorder} !important`,
    boxShadow: theme?.palette?.background?.socialIconShadow,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "26px",
    borderRadius: "12px !important",
    textTransform: "capitalize !important",
  },

  authHeading: {
    padding: "20px",
    borderRadius: "12px 12px 0 0 !important",
    backgroundColor: theme?.palette?.background?.providers,
    "& .MuiTypography-h5": {
      color: theme?.palette?.text?.default,
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "23px",
      textTransform: "capitalize",
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
      color: `${theme?.palette?.text?.placeholder} !important`,
      height: "44px",
      padding: "0",
      fontSize: "16px",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      fontWeight: "500",
      lineHeight: "44px",
      paddingLeft: "20px",
      borderRadius: "12px",
      "&::placeholder": {
        color: theme?.palette?.text?.placeholder,
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiFormLabel-root": {
      top: "-5px",
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.3)",
    },
    "& fieldset": {
      border: "none",
    },
  },

  authBtnWrap: {
    margin: "30px 0 0",
    "& .MuiTypography-root": {
      textAlign: "center",
      fontWeight: "600",
    },
  },
  closeIcon: {
    position: "relative",
    cursor: "pointer",
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
      cursor: "pointer",
    },
    "&:hover": {
      transform: "rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
    },
  },
}));
