import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btnPrimary: {
    border: "1.4px solid rgba(106, 113, 199, 0.84) !important",
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%) !important",
    color: "#fff !important",
    borderRadius: "12px !important",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    textTransform: "capitalize !important",
    width: "100%",
    "&:hover": {
      border: "1.4px solid rgba(106, 113, 199, 0.84)",
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%) !important",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px !important",
      fontSize: "12px",
      lineHeight: "14px",
    },
  },

  myprofileForm: {
    maxWidth: "768px",
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
    "& button": {
      padding: "0 !important",
    },
  },

  accountRight: {
    padding: "20px",
    background: theme?.palette?.background?.tablebackground,
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px",
      padding: "0",
    },
  },

  myprofileBottom: {
    "& .MuiInputBase-input": {
      height: "20px",
      padding: "10px",
      color: theme?.palette?.text?.default,
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
    "& svg": {
      color: theme?.palette?.text?.default,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "& .MuiFormLabel-root": {
      top: "-9px",
      fontSize: "16px",
      color: theme?.palette?.text?.default,
    },
    "& fieldset": {
      borderColor: "#8f66ab",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
    "& .MuiTypography-h4": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      color: theme?.palette?.text?.default,
      marginBottom: "16px",
      textTransform: "capitalize",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        marginBottom: "20px",
      },
    },
  },

  authBtnWrap: {
    margin: "15px 0",
    "& button": {
      fontSize: "20px",

      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },

  tableContainer: {
    "& .MuiPagination-text": {
      marginTop: "15px",
      "& ul": {
        "& li": {
          color: theme?.palette?.text?.default,
        },
      },
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
      "& thead": {
        background: theme?.palette?.background?.btnbackground,
        "& th": {
          padding: "20px",
          background: "transparent",
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
            padding: "10px",
          },
          "&:first-child": {
            borderRadius: "12px 0 0",
          },
          "&:last-child": {
            borderRadius: "0  12px 0 0",
          },
        },
      },
      "& tbody": {
        "& td": {
          padding: "15px",
          textAlign: "center",
          color: theme?.palette?.text?.default,
          borderBottom: "none",
          [theme.breakpoints.down("sm")]: {
            padding: "10px",
            fontSize: "10px",
          },
          "& span": {
            fontWeight: "normal",
          },
          "& b": {
            color: "#fff",
          },
        },
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

  noTransaction: {
    width: "100%",
    textAlign: "center",
    color: theme?.palette?.text?.default,
  },

  datePicker: {
    background: theme?.palette?.background?.default2,
    color: theme?.palette?.text?.default,
    borderRadius: "12px",
    outline: "none",
    "& .MuiOutlinedInput-root": {
      outline: "none",
      "& focus-visited": {
        outline: "none",
      },
    },
    "& fieldset": {
      borderColor: "transparent !important",
      // border: "none",
      outline: "none",
      "& focus-visited": {
        outline: "none",
      },
    },
    "& focus-visited": {
      outline: "none",
    },
  },
}));
