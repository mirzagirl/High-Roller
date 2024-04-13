import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  referralSection: {
    marginTop: "120px",
    [theme.breakpoints.down(991)]: {
      marginTop: "80px",
    },
  },

  heading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "32px",
    color: theme?.palette?.text?.default,
    marginBottom: "20px",
    [theme.breakpoints.down(991)]: {
      fontSize: "16px",
    },
  },
  referParagraph: {
    "& P": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "160%",
      color: theme?.palette?.text?.color,
      "&:nth-child(2)": {
        marginBottom: "40px",
        marginTop: "20px",
      },
      [theme.breakpoints.down(991)]: {
        fontSize: "12px",
        lineHeight: "180%",
      },
    },
  },

  getPromoBtn: {
    background: theme?.palette?.background?.doneBtnBg,
    border: theme?.palette?.background?.balanceBOrder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    marginBottom: "40px",
  },

  discountHeadSection: {
    display: "flex",
    gap: "30px",
    [theme.breakpoints.down(1200)]: {
      flexDirection: "column",
    },
  },

  discountHead: {
    position: "relative",
    width: "33%",
    [theme.breakpoints.down(1200)]: {
      width: "100%",
    },
    "& img": {
      width: "100%",
    },
  },

  discountDetail: {
    position: "absolute",
    textAlign: "center",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    "& .MuiTypography-h2": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "52px",
      lineHeight: "38px",
      color: "#FFFFFF",
      [theme.breakpoints.down(1536)]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down(1400)]: {
        fontSize: "20px",
        lineHeight: "23px",
      },
    },

    "& .MuiTypography-h6": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "32px",
      color: "#FFFFFF",
      marginTop: "15px",
      marginBottom: "15px",
      [theme.breakpoints.down(1536)]: {
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
      },

      [theme.breakpoints.down(1400)]: {
        fontSize: "12px",
        marginTop: "0",
        marginBottom: "0",
      },
      [theme.breakpoints.down(991)]: {
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
      },
    },

    "& .MuiTypography-body1": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "160%",
      textAlign: "center",
      color: theme.palette?.text?.referralText,
      [theme.breakpoints.down(1536)]: {
        fontSize: "12px",
        marginTop: "0",
        marginBottom: "0",
      },
      [theme.breakpoints.down(1400)]: {
        fontSize: "10px",
        marginTop: "0",
        marginBottom: "0",
      },
      [theme.breakpoints.down(991)]: {
        fontSize: "12px",
        marginTop: "0",
        marginBottom: "0",
      },
    },
  },

  referDetail: {
    position: "relative",
    "& img": {
      width: "100%",
    },
  },

  referDiscription: {
    position: "absolute",
    top: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "calc(100% - 280px)",
    marginLeft: "280px",
    padding: "40px",

    [theme.breakpoints.down(1630)]: {
      width: "calc(100% - 130px)",
      marginLeft: "130px",
    },

    [theme.breakpoints.down(1536)]: {
      width: "100%",
      padding: "20px 10px 0 10px",
      marginLeft: "0",
      justifyContent: "center",
    },

    [theme.breakpoints.down(1200)]: {
      width: "100%",
      padding: "20px 10px 0 10px",
      marginLeft: "0",
      justifyContent: "flex-start",
    },
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "160%",
      color: "#FFFFFF",
      "&:nth-child(1)": {
        marginBottom: "20px",
      },
      [theme.breakpoints.down(1630)]: {
        fontSize: "14px",
      },

      [theme.breakpoints.down(1536)]: {
        fontSize: "10px",
        width: "100%",
        marginLeft: "0",
        lineHeight: "normal",
      },
      [theme.breakpoints.down(1200)]: {
        fontSize: "12px",
        width: "100%",
        marginLeft: "0",
      },
    },
  },

  subscriberSocial: {
    "& .referalCode": {
      [theme.breakpoints.down(1200)]: {
        paddingTop: "0",
        paddingLeft: "0",
      },
    },
    "& .socialText": {
      [theme.breakpoints.down(1200)]: {
        paddingLeft: "0",
      },
    },
    background: theme?.palette?.background?.referralBg,
    boxShadow: theme?.palette?.background?.referralShadow,
    borderRadius: "12px",
    padding: "40px",
    marginTop: "40px",
    marginBottom: "80px",
    [theme.breakpoints.down(1200)]: {
      padding: "20px 10px",
    },
    "& p": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "23px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.default,
      marginBottom: "10px",
      [theme.breakpoints.down(991)]: {
        fontSize: "12px",
      },
    },

    "& .css-mhc70k-MuiGrid-root": {
      width: "100%",
      margin: "0",
    },
  },

  socialMedia: {
    display: "flex",
    gap: "12px",
    "& li": {
      background: theme?.palette?.background?.referralSocialBg,
      border: theme?.palette?.background?.referralSocialBorder,
      boxShadow: theme?.palette?.background?.referralSocialShadow,
      borderRadius: "8px",
      height: "44px",
      width: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  },
  referInput: {
    width: "100%",
    position: "relative",
    "& .MuiTextField-root": {
      width: "100%",
      "& .MuiInputBase-input": {
        height: "44px",
        padding: "0 20px",
        background: theme?.palette?.background?.default2,
        boxShadow: theme?.palette?.background?.referralInput,
        borderRadius: "12px",
        color: "#4D4D5B",
        "&::placeholder": {
          color: "#4D4D5B",
          fontWeight: "500",
          fontSize: "16px",
          [theme.breakpoints.down("md")]: {
            fontSize: "12px",
          },
        },
      },
      "& fieldset": {
        border: "none",
      },
    },
  },
  copyBtn: {
    background: theme?.palette?.background?.doneBtnBg,
    border: theme?.palette?.background?.balanceBOrder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    padding: "12px 32px !important",
    position: "absolute",
    right: "0",
    top: "0",
  },
  mobImage: {
    display: "none",
    [theme.breakpoints.down(1200)]: {
      display: "block",
    },
  },
  desktopImage: {
    [theme.breakpoints.down(1200)]: {
      display: "none",
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

  userForm: {
    "& img": {
      display: "block",
      width: "100%",
    },
  },

  modalBg: {
    backgroundColor: theme?.palette?.background?.providers,
    boxShadow: theme?.palette?.background?.referralShadow,
    borderRadius: "0 0 12px 12px",
    padding: "0 20px",
    paddingBottom: "30px",
    [theme.breakpoints.down(575)]: {
      padding: "0 10px",
      paddingBottom: "20px",
    },
    "& .MuiTypography-p": {
      padding: "20px 0",
      display: "inline-block",
      textAlign: "center",
      width: "100%",
      color: theme?.palette?.text?.default,
    },
  },

  copyIcon: {
    position: "absolute",
    top: "12px",
    right: "5px",
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
    border: "1.4px solid rgba(106, 113, 199, 0.84)",
    boxShadow: "0px 4px 12px rgba(108, 93, 193, 0.24)",
    borderRadius: "12px !important",
    height: "36px",
    minWidth: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 !important",
  },

  inputBox: {
    width: "100%",
    position: "relative",
    "& .MuiTextField-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      width: "100%",
    },
    "& input": {
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      color: `${theme?.palette?.text?.placeholder} !important`,
      borderRadius: "12px",
      padding: "10px 50px 10px 15px",
      height: "24px",
      marginTop: "8px",
      marginBottom: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      [theme.breakpoints.down(575)]: {
        fontSize: "12px",
      },
    },
    "& fieldset": {
      border: "none",
    },
  },
  socialReferIcon: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    [theme.breakpoints.down(575)]: {
      flexDirection: "column",
    },
    "& button": {
      background: theme?.palette?.background?.referralSocialBg,
      border: theme?.palette?.background?.referralSocialBorder,
      boxShadow: theme?.palette?.background?.referralSocialShadow,
      borderRadius: "8px !important",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "26px",
      display: "flex",
      gap: "12px",
      color: theme?.palette?.background?.color,
      textTransform: "inherit",
      minWidth: "190px",
      maxWidth: "190px",
      padding: "8px 0 !important",
      [theme.breakpoints.down(575)]: {
        minWidth: "100%",
        maxWidth: "100%",
        fontSize: "12px",
      },
    },
  },
}));
