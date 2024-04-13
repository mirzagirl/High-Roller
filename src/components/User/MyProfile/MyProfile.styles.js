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
    maxWidth: "540px",
    margin: "0 auto",
    position: "relative",
  },

  closeIconWrap: {
    position: "absolute",
    right: "-10px",
    top: "-20px",
    "& svg": {
      width: "20px",
      height: "20px",
      color: " #858DA0",
    },
    "&:hover": {
      transform: "rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
    },
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
    marginBottom: "20px",
    marginRight: "20px",
    width: "100%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "5px",
    },
  },
  profileUpdateRight: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0 30px",
    "& .MuiButton-root": {
      width: "auto",
      height: "40px",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  profileUpdateIcon: {
    height: "70px",
    width: "70px",
    flex: "0 0 70px",
    borderRadius: "100%",
    marginRight: "20px",
    "& img": {
      width: "100%",
      height: "100%",
      ObjectFit: "cover",
    },
    "& .MuiAvatar-root": {
      height: "100%",
      width: "100%",
      border: "3px solid #7458DC",
    },
    "& .MuiBadge-standard": {
      "& .MuiIconButton-root": {
        background: "#7458DC",
        padding: "2px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "24px",
        padding: "2px",
      },
    },
  },
  accountRight: {
    width: "440px",
    padding: "30px 20px",
    background: theme.palette?.background?.providers,
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      width: "100%",
      borderRadius: "8px",
    },
  },
  myprofileBottom: {
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
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
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
    margin: "15px 0",
    "& button": {
      fontSize: "20px",

      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
  },
  metamaskBtn: {
    marginBottom: "10px",
    background: "linear-gradient(270deg, #7458DC  0%, #9787D2  100%)",
    borderRadius: "30px",
    padding: "6px 20px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    height: "45px",
    textTransform: "capitalize",

    "&:hover": {
      background: "linear-gradient(270deg, #9787D2 0%, #7458DC  100%)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  walletAddress: {
    cursor: "pointer",
  },
  sidebarUserIcon: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
    "& img": {
      width: "100%",
      clipPath:
        "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
      objectFit: "cover",
      aspectRatio: "1",
      borderRadius: "4px",
      maxHeight: "58px",
      maxWidth: "58px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        width: "38px",
        height: "38px",
      },
    },
    "& svg": {
      stroke: theme.palette.background?.userImgBorder,
    },
  },

  userBorder: {
    width: "100%",
    clipPath:
      "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
    objectFit: "cover",
    aspectRatio: "1",
    borderRadius: "4px",
    maxHeight: "60px",
    maxWidth: "60px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background?.userImgBorder,
    border: "1px solid",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },

  sidebarUserName: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    color: theme?.palette?.text?.default,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },

  linearBar: {
    background: theme?.palette?.background?.default2,
    borderRadius: "4px",
    minHeight: "6px",
    overflow: "visible",
  },

  progressBar: {
    [theme.breakpoints.down("sm")]: {
      padding: "18px 12px",
    },
    marginTop: "20px",
    display: "inline-block",
    width: "100%",
    background: theme.palette?.background?.profileModal,
    border: "1.4px solid rgba(255, 255, 255, 0.02)",
    boxShadow:
      "0px 4px 6px rgba(31, 31, 37, 0.12), inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    padding: "16px 20px",
    "& .MuiLinearProgress-barColorPrimary": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      boxShadow: "0px 2px 12px 2px rgba(108, 93, 193, 0.24)",
      borderRadius: "12px",
      width: (props) => `${props.gameProgressWidth}%`,
      transform: "inherit !important",
    },
  },

  profileTopIcon: {
    float: "left",
    width: "40px",
    marginRight: "20px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "26px",
      marginRight: "10px",
    },
    "& img": {
      width: "100%",
    },
  },

  rightSection: {
    width: "calc(100% - 70px)",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 36px)",
    },
  },

  grandStep: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      margin: "0",
      "& span": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "17px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
        },
        "&:nth-child(1)": {
          color: "#757786",
          paddingRight: "4px",
        },
        "&:nth-child(2)": {
          color: theme?.palette?.text?.default,
        },
      },
    },
  },

  totalSection: {
    display: "inline-block",
    width: "100%",
  },

  total: {
    display: "inline-block",
    width: "calc(100% / 3 - 4px)",
    background: theme.palette?.background?.profileModal,
    border: "1.4px solid rgba(255, 255, 255, 0.02)",
    boxShadow:
      "0px 4px 6px rgba(31, 31, 37, 0.12), inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    padding: "17px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "11px 0",
    },
    "&:nth-child(2)": {
      margin: "0 5px",
    },
    "& p": {
      textAlign: "center",
      margin: "0",
      "&:nth-child(1)": {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "23px",
        color: theme?.palette?.text?.default,
        paddingBottom: "5px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
          lineHeight: "14px",
        },
      },
      "&:nth-child(2)": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "17px",
        color: "#858DA0",
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
        },
      },
    },
  },
  gameWrapper: {
    background: theme.palette?.background?.profileModal,
    border: "1.4px solid rgba(255, 255, 255, 0.02)",
    textAlign: "center",
    boxShadow:
      "0px 4px 6px rgba(31, 31, 37, 0.12), inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "12px",
    },
  },

  gameSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "13px",
    "&:last-child": {
      marginBottom: "0",
    },
  },

  gameHeading: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "15px",
    "& p": {
      margin: "0",
      "&:nth-child(1)": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        color: theme?.palette?.text?.default,
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
        },
      },
      "&:nth-child(2)": {
        display: "flex",
        gap: "5px",
        "& span": {
          "&:nth-child(1)": {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "17px",
            display: "flex",
            alignItems: "center",
            color: "#858DA0",
            [theme.breakpoints.down("sm")]: {
              fontSize: "10px",
            },
          },
          "&:nth-child(2)": {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            display: "flex",
            alignItems: "center",
            color: theme?.palette?.text?.default,
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
            },
          },
        },
      },
    },
  },

  floatLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  gameImage: {
    width: "44px",
    height: "56px",
    "& img": {
      width: "100%",
      height: "100%",
      aspectRadio: "1",
      borderRadius: "4px",
    },
  },

  gameName: {
    width: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inherit !important",
    textAlign: "left !important",
  },

  gameNameDetail: {
    width: "calc(100% - 44px)",
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "17px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme?.palette?.text?.default,
      margin: "0",
      "&:nth-child(2)": {
        padding: "2px 0",
        "& span": {
          "&:nth-child(1)": {
            color: "#858DA0",
            paddingRight: "4px",
          },
          "&:nth-child(2)": {
            color: theme?.palette?.text?.default,
          },
        },
      },
      "&:nth-child(3)": {
        "& span": {
          "&:nth-child(1)": {
            color: "#858DA0",
            paddingRight: "4px",
          },
          "&:nth-child(2)": {
            color: theme?.palette?.text?.default,
          },
        },
      },
    },
  },
}));
