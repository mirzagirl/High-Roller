import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  accountRight: {
    width: "440px",
    padding: "20px",
    minHeight: "527px",
    background: theme?.palette?.background?.tablebackground,
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px",
      width: "100%",
      padding: "14px 10px",
    },
  },
  currencyIcon: {
    display: "flex",
    alignItems: "center",
    "& img": {
      paddingRight: "12px",
      width: "30px",
    },
  },

  withdrawDepositInput: {
    marginBottom: "30px",
  },

  depositInput: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: theme?.palette?.text?.color,
    },
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  },

  formGroup: {
    position: "relative",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& span": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: theme?.palette?.text?.color,
      marginBottom: "8px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "17px",
        marginBottom: "6px",
      },
    },
  },
  heading: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "23px !important",
    color: theme?.palette?.text?.default,
    marginBottom: "14px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important",
      marginBottom: "10px !important",
    },
  },

  depositCurrency: {
    padding: "0",
  },

  tabHeading: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
    "& button": {
      width: "33%",
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: theme?.palette?.text?.color,
      textTransform: "capitalize",
      minHeight: "44px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        minHeight: "32px",
      },
      "& img": {
        width: "25px",
      },
    },
    "& .Mui-selected": {
      background: theme?.palette?.background?.btnbackground,
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.09)",
      borderRadius: "12px !important",
      color: theme?.palette?.text?.btntextcolor,
      [theme.breakpoints.down("sm")]: {
        borderRadius: "8px",
      },
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    background: theme?.palette?.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    minHeight: "inherit",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px",
    },
  },

  walletModal: {
    display: "inline-block",
    width: "100%",
  },

  dialogBox: {
    backdropFilter: "blur(2px)",
    "& .MuiPopover-paper": {
      backgroundColor: "transparent",
      baxShadow: "inherit",
    },
    "& .MuiPaper-elevation": {
      boxShadow: "inherit !important",
      backgroundColor: "inherit !important",
      background: "inherit !important",
    },
  },

  modalInput: {
    background: theme?.palette?.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    marginBottom: "20px",
    width: "100%",
    "& fieldset": {
      border: "none",
    },
    "& .MuiInputBase-root": {
      height: "40px",
      color: theme?.palette?.text?.placeholder,
    },
  },

  convertedBalance: {
    fontSize: "13px",
    marginTop: "0px",
    color: theme?.palette?.text?.color,
    "& span": {
      fontSize: "13px",
      color: "#AAA8FF",
      marginBottom: "0",
      padding: "0 5px",
      display: "inline-block",
    },
  },

  addressLoaderWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  depositSection: {
    "& .MuiBox-root": {
      padding: "20px 0",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "0",
      },
    },
    "& .MuiOutlinedInput-root": {
      width: "100%",
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiSelect-select": {
      marginTop: "0px",
      background: theme?.palette?.background?.default2,
      color: theme?.palette?.text?.default,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      padding: "0",
      height: "40px",
      lineHeight: "40px",
      paddingLeft: "15px",
      [theme.breakpoints.down("sm")]: {
        height: "32px",
        borderRadius: "8px",
      },
    },
  },
  addressDeposit: {
    padding: "0",
    width: "100%",
    height: "40px",
    background: theme?.palette?.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    paddingLeft: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    "& .MuiInputBase-input": {
      color: theme?.palette?.text?.default,
      fontWeight: "500",
      fontSize: "16px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      height: "32px",
      borderRadius: "8px",
    },
    "&:hover": {
      borderBottom: "none",
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
    "& .MuiIconButton-edgeEnd": {
      padding: "0 !important",
      background: theme?.palette?.background?.btnbackground,
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px !important",
      height: "40px",
      width: "40px",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "8px !important",
        height: "32px",
        width: "32px",
      },
      "& svg": {
        width: "15px",
      },
    },
  },
  qrCode: {
    width: "140px",
    height: "140px",
    background: theme?.palette?.background?.qrCodeBg,
    border: theme?.palette?.background?.qrCodeBorder,
    boxShadow: theme?.palette?.background?.qrCodeShadow,
    borderRadius: "12px",
    padding: "10px",
    margin: "0 auto",
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
    },
  },

  doneBtn: {
    background: theme?.palette?.background?.doneBtnBg,
    border: theme?.palette?.background?.balanceBOrder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    width: "100%",
    marginBottom: "-20px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    textTransform: "capitalize",
    color: "#FFFFFF !important",
    marginTop: "30px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "14px",
      borderRadius: " 8px !important",
      marginBottom: "16px",
    },
  },

  topIcon: {
    position: "absolute",
    top: "-12px",
    left: "0",
    right: "0",
    textAlign: "center",
    [theme.breakpoints.down(991)]: {
      top: "-13px",
    },
  },

  modalList: {
    background: theme?.palette?.background?.sidebar,
    borderRadius: "12px",
    marginTop: "15px !important",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "8px",
      padding: "10px !important",
    },
    "& li": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 !important",
      paddingBottom: "15px !important",
      marginBottom: "15px !important",
      borderBottom: "1px solid #A0A0B0",
      borderRadius: "0 !important",
      "& p": {
        margin: "0",
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        "& span": {
          fontSize: "10px",
        },
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      "& span": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#757786",
      },
      "& small": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        color: theme?.palette?.text?.txtcolor,
        paddingLeft: "5px",
      },
    },
  },
  loading: {
    display: "flex",
    justifyContent: "center",
  },
  walletBottom: {
    background: theme?.palette?.background?.btntextBackground,
    borderBottom: "1.4px solid rgba(255, 255, 255, 0.04)",
    borderRadius: "0px 0px 12px 12px",
    paddingTop: "20px",
    marginTop: "-10px",
    paddingBottom: "10px",
    "& .smallHide": {
      marginBottom: "0 !important",
    },
    "& .usdView": {
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 20px",
      alignItems: "center",
      "& .currencySign": {
        fontWeight: "500",
        color: "#6CD9A5",
      },
      "& .currencyValue": {
        fontWeight: "500",
        color: "#fff",
      },
    },

    "& .toggleBtn": {
      display: "flex",
      alignItems: "center",
      position: "relative",
      right: "20px",
    },

    "& div": {
      "& p": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#757786",
        margin: "0",
      },
    },
  },
  modalInputWrap: {
    position: "relative",
  },

  searchIcon: {
    position: "absolute",
    right: "10px",
    bottom: "30px",
    opacity: "0.5",
    filter: "invert(0.5)",
  },

  manageList: {
    background: theme?.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    marginBottom: "10px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    color: "#757786",
    lineHeight: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
    cursor: "pointer",
  },

  bottomText: {
    color: theme?.palette?.text?.default,
    marginTop: "30px",
    "& p": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "9px !important",
        padding: "12px 6px",
      },
      "&:nth-child(1)": {
        background: theme?.palette?.background?.default,
        borderRadius: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: theme?.palette?.text?.color,
        padding: "12px 24px",
        margin: "0",
      },
      "&:nth-child(2)": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        color: "#757786",
        textAlign: "center",
        margin: "0",
      },
    },
  },

  withdrawConfirmInput: {
    marginBottom: "0 !important",
    "& p": {
      right: "10px !important",
      color: theme?.palette?.text?.default,
    },
  },

  confirmInput: {
    position: "relative",
    "& p": {
      position: "absolute",
      top: "8px",
      right: "10px",
      margin: "0 !important",
      color: theme?.palette?.text?.default,
    },
    "& .MuiInputBase-input": {
      color: theme?.palette?.text?.default,
      height: "40px",
      padding: "0",
      background: theme?.palette?.background?.default2,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      marginTop: "0",
      lineHeight: "40px",
      paddingLeft: "15px",
      borderRadius: "12px",
      paddingRight: "50px",
    },
    display: "flex",
    background: `${theme?.palette?.background?.default} !important`,
    borderRadius: "12px !important",
    marginBottom: "0",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "32px",
      borderRadius: "8px !important",
    },
    "& .css-vj1n65-MuiGrid-root": {
      width: "50%",
      "& input": {
        width: "100%",
        color: theme?.palette?.text?.default,
        borderRadius: "12px 0 0 12px",
        padding: "9px 10px",
        [theme.breakpoints.down("sm")]: {
          height: "32px",
          borderRadius: "8px 0 0 8px !important",
          padding: "0 10px",
        },
      },
    },
    "& .MuiTextField-root": {
      width: "100%",
    },
    "& button": {
      width: "50%",
      background: theme?.palette?.background?.withdrawBtn,
      border: "1.4px solid rgba(255, 255, 255, 0.12)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px !important",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      textTransform: "capitalize",
      color: "#FFFFFF",
      height: "44px",
      marginTop: "-2px",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "8px !important",
        fontSize: "12px",
        height: "36px",
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
  addressGenerate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
    "& button": {
      padding: "0",
      color: theme?.palette?.text?.color,
    },
  },
  paymentComplete: {
    background: theme?.palette?.background?.default2,
    color: theme?.palette?.text?.default,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    borderRadius: "12px !important",
    textAlign: "center",
    padding: "0 0 0 10px",
    marginTop: "0",
    "& small": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      "& button": {
        padding: "0 !important",
        background: theme?.palette?.background?.btnbackground,
        border: "1.4px solid rgba(255, 255, 255, 0.04)",
        boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.09)",
        height: "48px",
        width: "48px",
        borderRadius: "12px !important",
        "& svg": {
          color: "#fff",
        },
      },
      "& span": {
        marginBottom: "0",
        color: theme?.palette?.text?.default,
      },
    },
  },

  statusButton: {
    background: theme?.palette?.background?.doneBtnBg,
    border: theme?.palette?.background?.balanceBOrder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    width: "100%",
    marginBottom: "-20px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    textTransform: "capitalize",
    color: "#FFFFFF !important",
    marginTop: "30px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "14px",
      borderRadius: " 8px !important",
      marginBottom: "16px",
    },
    "& span": {
      marginBottom: "0px",
      marginLeft: "8px",
    },
  },
  confirmBtn: {
    width: "100%",
    "& button": {
      width: "100%",
      borderRadius: "8px !important",
      border: "1.4px solid rgba(255, 255, 255, 0.12)",
      background:
        "radial-gradient(118.18% 118.18% at 50.00% 0%, #4CAB7E 0%, #307E59 100%)",
      boxShadow: "0px 2px 12px 0px rgba(255, 255, 255, 0.02) inset",
      marginTop: "30px",
      color: theme?.palette?.text?.default,
    },
  },
  textMessage: {
    textAlign: "center",
    marginBottom: "10px",
    color: theme?.palette?.text?.default,
  },
}));
