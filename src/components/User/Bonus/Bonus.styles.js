import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btnPrimary: {
    background: "linear-gradient(270deg, #7458DC  0%, #9787D2  100%)",
    borderRadius: "30px",
    padding: "6px 20px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    height: "45px",
    textTransform: "capitalize",
    width: "100%",
    "&:hover": {
      backgroundColor: `${theme?.palette?.background?.btnbackground} !important`,
    },
  },
  myprofileForm: {
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
  accountRight: {
    padding: "20px 60px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
  },
  myprofileBottom: {
    background: "#191A1E",
    borderRadius: "20px",
    padding: "20px 40px",
    height: "100%",
    "& .MuiInputBase-input": {
      height: "20px",
      padding: "10px",
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
    "& fieldset": {
      borderColor: "#8f66ab",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
    "& .MuiTypography-h4": {
      fontWeight: "700",
      textAlign: "center",
      color: "#7458DC",
      margin: "10px 0",
      textTransform: "uppercase",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        textAlign: "center",
        marginBottom: "20px",
      },
    },
  },
  bonusCard: {
    background: "transparent",
    borderRadius: "10px",
    boxShadow: "none",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
    "& .bgImg": {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
    },
    "& .contentBox": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 24px",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      "& .topText": {
        fontWeight: "600",
        textAlign: "center",
        textTransform: "uppercase",
      },
      "& .middleText": {
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
        "& span": {
          fontSize: "24px",
          display: "block",
        },
      },
      "& button": {
        marginBottom: "6px",
      },
    },
  },
}));
