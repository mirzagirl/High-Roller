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
      background: "linear-gradient(270deg, #9787D2 0%, #7458DC  100%)",
    },
  },
  myprofileForm: {
    margin: "0 auto",
  },
  signupFromFname: {
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
  authBtnWrap: {
    maxWidth: "540px",
    margin: "15px auto -5px auto",
    "& button": {
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },
  referFriends: {
    width: "calc(100% + 80px)",
    background: "linear-gradient(270deg, #7458DC 0%, #9787D2 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "40px",
    margin: "0 -40px",
    "& .titleText": {
      width: "100%",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "600",
      "& span": {
        fontSize: "40px",
        display: "block",
      },
    },
    "& .coinsBagImg": {
      width: "auto",
      height: "167px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  totalRewards: {
    width: "100%",
    padding: "0 80px",
    marginTop: "-20px",
    [theme.breakpoints.down("md")]: {
      padding: "0 0px",
    },
    "& .innerBox": {
      background: "#fff",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      "& .rewardTextBox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        "& .rewardText": {
          width: "100%",
          color: "#666",
          fontSize: "16px",
          fontWeight: "500",
          marginLeft: "16px",
          "& span": {
            color: "#000",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "40px",
            display: "block",
          },
        },
      },
      "& button": {
        width: "45px",
        minWidth: "45px",
        height: "45px",
        borderRadius: "50% !important",
        padding: "0 !important",
        "& img": {
          filter: "invert(1)",
        },
      },
    },
  },
  codeReferFriend: {
    textAlign: "center",
    marginTop: "40px",
    "& .MuiTextField-root": {
      width: "100%",
      margin: "15px 0",
    },
    "& .MuiInputBase-root ": {
      background: "#26282D",
      borderRadius: "10px",
      "& .MuiInputBase-input": {
        height: "1.4375em",
        padding: "16.5px 14px",
        width: "85%",
        "&::placeholder": {
          color: "#4D4D5B",
          fontWeight: "500",
          fontSize: "16px",
          [theme.breakpoints.down("md")]: {
            fontSize: "12px",
          },
        },
      },
    },
    "& .rewardText": {
      width: "82%",
      margin: "15px auto",
      "& span": {
        display: "block",
        marginBottom: "16px",
      },
    },
    "& .referFriendInput": {
      maxWidth: "540px",
      margin: "0 auto",
      position: "relative",
      "& img": {
        position: "absolute",
        right: "30px",
        top: "30px",
        cursor: "pointer",
      },
    },
  },
}));
