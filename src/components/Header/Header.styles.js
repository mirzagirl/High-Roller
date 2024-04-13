import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  WalletMenu: {
    backdropFilter: "blur(2px)",
    "& .MuiMenu-list": {
      position: "relative",
    },
    "& ul": {
      background: "#24242B",
      boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px",
      padding: "20px",
      display: "inline-block",
      width: "100%",
      position: "relative",
      "& li": {
        display: "flex",
        padding: "12px 0 !important",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: "500",
        width: "50%",
        float: "left",
        "&:last-child": {
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          background: "#2B2B38",
          border: "1.4px solid rgba(255, 255, 255, 0.04)",
          boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
          borderRadius: "12px !important",
          marginTop: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#757786",
          "&:hover": {
            background: "#2B2B38",
            color: "#757786",
          },
        },
        "& span": {
          marginRight: "15px",
          display: "flex",
          "& img": {
            width: "18px",
          },
        },
        "&:hover": {
          color: "#757786",
          backgroundColor: "transparent",
        },
      },
    },
  },
  headerContent: {
    padding: "20px 60px 20px 20px",
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.background?.sidebar,
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "9",
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px",
      zIndex: "99",
    },
  },

  logo: {
    background:
      "conic-gradient(from 180deg at 50% 50%, #695ABE 0deg, rgba(43, 26, 80, 0.44) 360deg)",
    borderRadius: "20px",
    height: "40px",
    width: "40px",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      height: "32px",
      width: "32px",
    },
  },
  logoName: {
    color: theme.palette.text?.default,
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "35px",
    paddingLeft: "12px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  headerActive: {
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
  headerLeftSection: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    [theme.breakpoints.down("xl")]: {
      gap: "40px",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "25px",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "10px",
    },
  },

  SearchInput: {
    background: theme.palette.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    width: "300px",
    height: "40px",
    [theme.breakpoints.down("xl")]: {
      width: "200px",
    },
    "& .MuiInputBase-input": {
      color: theme.palette.text?.placeholder,
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    "& .MuiInputBase-formControl": {
      borderRadius: "12px",
      height: "40px",
    },
    "& .MuiOutlinedInput-input": {
      paddingLeft: "20px",
    },
    "& fieldset": {
      border: "none",
      height: "40px",
    },
  },

  navigationWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexGrow: "1",
    marginLeft: "40px",
    [theme.breakpoints.down(1699)]: {
      gap: "40px",
    },
    [theme.breakpoints.down("xl")]: {
      gap: "25px",
      marginLeft: "20px",
    },
    "& ul": {
      display: "flex",
      gap: "60px",
      "& li": {
        whiteSpace: "nowrap",
        padding: "0",
        "& a": {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "23px",
          textTransform: "capitalize",
          color: "#757786",
          textDecoration: "none",
          position: "relative",
          "& span": {
            fontSize: "6px",
            position: "absolute",
            background:
              "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
            color: "#fff",
            top: "-11px",
            right: "-35px",
            display: "inline-block",
            lineHeight: "normal",
            padding: "2px 5px",
            borderRadius: "2px",
          },

          "&:hover": {
            color: theme.palette.text?.default,
          },
          [theme.breakpoints.down("xl")]: {
            fontSize: "15px",
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: "14px",
          },
        },
      },

      [theme.breakpoints.down("xl")]: {
        gap: "20px",
      },

      [theme.breakpoints.down("lg")]: {
        gap: "20px",
      },

      [theme.breakpoints.down("md")]: {
        gap: "25px",
      },

      [theme.breakpoints.down("sm")]: {
        gap: "25px",
      },

      [theme.breakpoints.down("xs")]: {
        gap: "25px",
      },
    },
  },

  navigation: {
    [theme.breakpoints.down(1200)]: {
      display: "none !important",
    },
  },
  listItemHighlight: {
    color: `${theme.palette.text?.default} !important`,
  },

  sidebarToggleIconClose: {
    left: "0px",
    textAlign: "center",
    transform: "rotate(-180deg)",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
  sidebarToggleIcon: {
    left: "0px",
    paddingBottom: "5px",
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      display: "none !important",
    },
  },
  headerLogo: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
    "& img": {
      width: "280px",
      [theme.breakpoints.down("lg")]: {
        width: "160px",
      },
      [theme.breakpoints.down("md")]: {
        width: "120px",
      },
    },
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      gap: "5px",
    },
    "& .hamburgerIcon": {
      display: "none",
      "& svg": {
        color: "#6D6F8A",
        width: "20px",
      },
    },
  },
  headerRightMobCta: {
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  afterLoginHeaderRight: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  btnSecondary: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04) !important",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px !important",
    padding: "8px 30px !important",
    height: "40px",
    fontSize: "16px !important",
    fontWeight: "500",
    textTransform: "capitalize !important",
    color: `${theme.palette?.text?.default} !important`,
    "&:hover": {
      background: theme.palette?.background?.highlightSocialApp,
    },
    "& img": {
      marginRight: "10px",
      [theme.breakpoints.down("lg")]: {
        marginRight: "5px",
        width: "20px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      padding: "6px 20px",
      fontSize: "12px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "6px 10px !important",
      height: "32px",
      borderRadius: "8px !important",
      minWidth: "80px !important",
      fontSize: "12px !important",
    },
  },
  btnPrimary: {
    background: theme.palette?.background?.signUp,
    boxShadow: "0px 4px 12px 2px rgba(108, 93, 193, 0.24)",
    borderRadius: "12px !important",
    height: "40px",
    padding: "8px 30px !important",
    fontSize: "16px !important",
    color: `${theme?.palette?.text?.btntextcolor} !important`,
    fontWeight: "500",
    textTransform: "capitalize !important",
    [theme.breakpoints.down("lg")]: {
      padding: "6px 20px",
      fontSize: "12px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "6px 10px !important",
      height: "32px",
      borderRadius: "8px !important",
      minWidth: "80px !important",
      fontSize: "12px !important",
    },
  },
  balanceBtnWrap: {
    marginRight: "15px",
    "&> span": {
      display: "flex",
      padding: "0 !important",
      alignItems: "center",
      background: theme.palette?.background?.buttonWallet,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px !important",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      color: theme.palette?.text?.default,
      whiteSpace: "nowrap",
      "&:hover": {
        background: theme.palette?.background?.buttonWallet,
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
      },
    },
  },

  headerLink: {
    textDecoration: "none",
    color: "#fff",
    textTransform: "uppercase",
    padding: "5px 20px",
    fontWeight: "500",
    "&:hover": {
      color: "#7458DC",
    },
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
    },
  },
  myAccountLink: {
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#757786",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      fontSize: "12px",
    },
    "& img": {
      width: "20px",
    },
  },
  signupWrap: {
    borderRadius: "12px",
    padding: "0 !important",
    width: "440px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "0",
      marginBottom: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .css-1idn90j-MuiGrid-root": {
      padding: "0",
    },
    "& .MuiGrid-spacing-xs-2": {
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: "0",
      },
    },
  },
  loginWrap: {
    borderRadius: "12px",
    width: "440px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "0",
      marginBottom: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  walletModal: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      display: "flex",
      flex: "inherit",
      marginBottom: "0",
    },
  },

  resetWrap: {
    backgroundColor: "#24242B",
  },

  profileShapIcon: {
    position: "absolute",
    top: "-12px",
    left: "0",
    right: "0",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  accountMenu: {
    backdropFilter: "blur(2px)",
    "& .MuiMenu-list": {
      position: "relative",
    },
    "& ul": {
      background: theme.palette?.background?.sidebar,
      boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px",
      padding: "20px !important",
      display: "inline-block",
      width: "100% !important",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        padding: "10px !important",
      },
      "& li": {
        display: "flex",
        padding: "12px 0 !important",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: "500",
        width: "50%",
        float: "left",
        "&:last-child": {
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          background: theme?.palette?.background?.btnbackground,
          border: "1.4px solid rgba(255, 255, 255, 0.04)",
          boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
          borderRadius: "12px !important",
          marginTop: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          color: theme?.palette?.text?.buttoncolor,
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            minHeight: "32px",
            lineHeight: "0",
            padding: "0 !important",
            borderRadius: "8px !important",
          },
          "&:hover": {
            background: theme?.palette?.background?.btnbackground,
            color: "#757786",
          },
        },
        "& span": {
          marginRight: "15px",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            marginRight: "8px",
          },
          "& img": {
            width: "18px",
          },
        },
        "&:hover": {
          color: "#757786",
          backgroundColor: "transparent",
        },
      },
    },
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    marginLeft: "75px",
  },
  headerLeftOpen: {
    display: "flex",
    alignItems: "center",
    marginLeft: "250px",
  },

  sidebarClose: {
    cursor: "pointer",
    position: "absolute",
    right: "-29px",
    top: "0",
    background: "rgb(247 247 248 / 30%)",
    padding: "8px",
    display: "flex",
    borderRadius: "100%",

    "& img": {
      width: "14px",
    },
  },
  balanceIcon: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette?.background?.balanceBg,
    border: theme.palette?.background?.balanceBOrder,
    boxShadow: theme.palette?.background?.balanceBgShadow,
    borderRadius: "24px",
    height: "50px",
    width: "50px",
    position: "relative",
    right: "-10px",
    [theme.breakpoints.down(991)]: {
      height: "28px",
      width: "28px",
      right: "-5px",
      "& img": {
        width: "12px",
      },
    },
    "& button": {
      border: "none",
    },
  },
  currencyIcon: {
    display: "inline-flex",
    "& img": {
      padding: "11px 13px",
      width: "80%",
      [theme.breakpoints.down("xl")]: {
        padding: "6px 5px",
      },
    },
  },

  userImage: {
    height: "40px",
    width: "40px",
    position: "relative",
    cursor: "pointer",
    "& svg": {
      stroke: theme.palette.background?.userImgBorder,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
    "& img": {
      width: "100%",
      clipPath:
        "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
      objectFit: "cover",
      aspectRatio: "1",
      borderRadius: "4px",
      maxHeight: "40px",
      maxWidth: "40px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  userBorder: {
    width: "100%",
    clipPath:
      "polygon(40% 7.67949%, 43.1596% 6.20615%, 46.52704% 5.30384%, 50% 5%, 53.47296% 5.30384%, 56.8404% 6.20615%, 60% 7.67949%, 81.65064% 20.17949%, 84.50639% 22.17911%, 86.97152% 24.64425%, 88.97114% 27.5%, 90.44449% 30.6596%, 91.34679% 34.02704%, 91.65064% 37.5%, 91.65064% 62.5%, 91.34679% 65.97296%, 90.44449% 69.3404%, 88.97114% 72.5%, 86.97152% 75.35575%, 84.50639% 77.82089%, 81.65064% 79.82051%, 60% 92.32051%, 56.8404% 93.79385%, 53.47296% 94.69616%, 50% 95%, 46.52704% 94.69616%, 43.1596% 93.79385%, 40% 92.32051%, 18.34936% 79.82051%, 15.49361% 77.82089%, 13.02848% 75.35575%, 11.02886% 72.5%, 9.55551% 69.3404%, 8.65321% 65.97296%, 8.34936% 62.5%, 8.34936% 37.5%, 8.65321% 34.02704%, 9.55551% 30.6596%, 11.02886% 27.5%, 13.02848% 24.64425%, 15.49361% 22.17911%, 18.34936% 20.17949%)",
    objectFit: "cover",
    aspectRatio: "1",
    borderRadius: "4px",
    maxHeight: "40px",
    maxWidth: "40px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background?.userImgBorder,
    border: "1px solid",
  },

  userProfileLevel: {
    position: "absolute",
    left: "4px",
    width: "32px",
    lineHeight: "16px",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    background: theme.palette.background?.chatTagBg,
    border: theme.palette.background?.chatTagBorder,
    boxShadow: theme.palette.background?.chatTagShadow,
    borderRadius: "4px",
    textAlign: "center",
    bottom: "-13px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("xl")]: {},
  },

  userNameEmail: {
    flexGrow: "1",
    paddingLeft: "20px",
    "& p": {
      color: theme?.palette?.text?.txtcolor,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      margin: "0",
    },
  },
  userEmail: {
    color: theme?.palette?.text?.textcolor,
    [theme.breakpoints.down("xl")]: {
      fontSize: "12px !important",
    },
  },

  userIcon: {
    [theme.breakpoints.down("sm")]: {
      width: "26px",
    },
  },

  userName: {
    color: "#FFFFFF",
  },

  linearBar: {
    background: theme?.palette?.background?.default2,
    borderRadius: "4px",
    minHeight: "6px",
    overflow: "visible",
  },

  progressBar: {
    marginTop: "20px",
    marginBottom: "9px",
    "& .MuiLinearProgress-barColorPrimary": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      boxShadow: "0px 2px 12px 2px rgba(108, 93, 193, 0.24)",
      borderRadius: "12px",
      width: (props) => `${props.gameProgressWidth}%`,
      transform: "inherit !important",
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
          color: theme?.palette?.text?.txtcolor,
        },
      },
    },
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    top: "-5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
    "& .arrowIcon": {
      marginLeft: "60px",
      transform: "rotate(180deg)",
      marginTop: "10px",
      [theme.breakpoints.down("1600")]: {
        marginLeft: "10px",
      },
    },
  },
  headerUserName: {
    marginRight: "12px",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    [theme.breakpoints.down("xl")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& p": {
      margin: "0 0 5px 0",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      color: theme?.palette?.text?.default,
      textAlign: "right",
    },
  },
  headerProgressBar: {
    width: "120px",
    "& .MuiLinearProgress-barColorPrimary": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      boxShadow: "0px 2px 12px 2px rgba(108, 93, 193, 0.24)",
      borderRadius: "12px",
      width: (props) => `${props.gameProgressWidth}%`,
      transform: "inherit !important",
    },
  },
  headerLinearBar: {
    background: theme?.palette?.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    overflow: "visible",
  },

  userProgress: {
    display: "flex",
    flexDirection: "column",
  },

  headerSearchIcon: {
    position: "relative",
    "& img": {
      position: "absolute",
      top: "10px",
      right: "15px",
    },
  },
}));
