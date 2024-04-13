import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  sidebarWrap: {
    overflowY: "auto",
    flex: "0 0 210px",
    height: "100%",
    background: theme.palette.background?.sidebar,
    marginTop: "80px",
    position: "fixed",
    top: "0px",
    left: "0",
    zIndex: "1",
    flexFlow: "column",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "0",
      marginTop: "50px",
      zIndex: "9",
      width: "100%",
      height: "auto",
    },
    "& .MuiToolbar-gutters": {
      padding: "0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "36px",
    },
    "& .MuiListItem-button": {
      "&.active": {
        borderRadius: "30px",
        background: "#7458DC",
        margin: "5px 0",
      },
    },
  },
  navIconHighlighted: {
    background: theme.palette.background?.sidebarList,
    boxShadow: theme.palette.background?.bg1,
    borderRadius: "12px !important",
    color: "#A0A0B0 !important",
  },
  closeSidebarWrap: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    width: "60px",
    minWidth: "60px",
    flex: "0 0 50px",
    marginTop: "80px",
    backgroundColor: theme.palette.background?.sidebar,
    height: "100%",
    zIndex: "1",
    position: "fixed",
    top: "0",
    left: "0",
    overflowY: "auto",
    "& .MuiToolbar-gutters": {
      padding: "0",
      height: "auto",
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiListItemIcon-root": {
      justifyContent: "center",
      minWidth: "20px",
      "& img": {
        width: "20px",
      },
    },
    "& .MuiListItem-button": {
      padding: "15px !important",
      justifyContent: "center",
      border: "1.4px solid transparent",
      "&:hover": {
        border: theme.palette.background?.socialIconBorder,
        background: theme.palette.background?.highlightSocialApp,
        boxShadow: theme.palette.background?.socialIconShadow,
        borderRadius: "8px !important",
      },
      "&:last-child": {
        marginBottom: "80px",
      },
    },

    "& .MuiBox-root-15": {
      padding: "20px 0",
    },
  },
  menuSliderContainer: {
    width: "240px",
    padding: "20px",
    "& svg": {
      float: "right",
    },
    "& .MuiPaper-elevation1": {
      background: "transparent",
      boxShadow: "inherit",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "22px",
      color: "#FFFFFF",
      marginBottom: "0",
      "& .MuiSvgIcon-root": {
        "& path": {
          fill: theme?.palette?.text?.iconColor,
        },
      },
      "& .MuiAccordionSummary-root": {
        padding: "0 !important",
      },
    },
    "& .MuiIconButton-edgeEnd": {
      padding: "0 !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100vh",
      overflowY: "scroll",
    },
  },

  menuSliderContainerClose: {},
  listItem: {
    cursor: "pointer",
    color: "#99a4b1",
    textDecoration: "none",
    padding: "0 !important",
  },
  sidebarTabsWrap: {
    background: "#24262B",
    padding: "20px 0 20px 20px",
    display: "flex",
    alignItems: "center",
  },

  sidebarTabs: {
    background: "#26282D",
    padding: "5px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "space-between",
    "& .MuiButtonBase-root": {
      padding: "8px 30px",
      borderRadius: "30px",
      "&.active": {
        background: " #7458DC",
      },
    },
  },

  dividerStyle: {
    background: theme.palette.background?.divider,
    borderRadius: "2px",
    width: "100%",
    height: "2px !important",
  },

  languageText: {
    fontSize: "small",
    color: "#99a4b1",
    marginLeft: "6px",
    textAlign: "center",
  },

  languageSelectOpen: {
    background: "#26282d",
    borderRadius: "12px",
    width: "80%",
    margin: "1vw",
    padding: "0.5vw",
    color: "#fff",
  },

  languageSelectClose: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    color: "#7C8497 !important",
    justifyContent: "center",
    "&:before": {
      display: "none",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      padding: "0",
      textAlign: "center",
      color: "#7C8497 !important",
      height: "30px",
      width: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.background?.promotionIcon,
      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.08)",
      borderRadius: "7px",
    },
    "& .MuiSelect-icon": {
      display: "none",
    },
  },

  promotionIcon: {
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background?.promotionIcon,
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: "7px",
  },
  acord: {
    fontFamily: "Proxima Nova",
    color: theme.palette.text?.default,
  },
  mobiInput: {
    width: "100%",
    background: "#202026",
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    height: "33px",
    border: "none",
    paddingLeft: "30px",
    color: "#4D4D5B",
    "&:focus-visible": {
      outline: "none",
    },
  },

  customSearchbar: {
    marginBottom: "0",
    position: "relative",
  },

  inputChat: {
    display: "flex",
    gap: "10px",
    "& button": {
      padding: "0 !important",
      minWidth: "auto",
    },
  },

  searchIcon: {
    top: "10px",
    left: "12px",
    position: "absolute",
    width: "12px",
  },

  featureGameList: {
    height: (props) => {
      if (!props.len || props.len === 0) return "0px";
      else if (props.len === 1) return "50px";
      else if (props.len === 2) return "100px";
      else if (props.len === 3) return "150px";
      else return "250px";
    },
    overflowY: "scroll",
  },

  leftListItemWrap: {
    padding: "0",
    display: "inline-block",
    width: "100%",
    "& ul": {
      width: "100%",
      padding: "0",
      "& li": {
        fontWeight: "normal",
        fontSize: "16px",
        fontFamily: "Proxima Nova",
        marginTop: "10px",
        lineHeight: "19px",
        display: "flex",
        alignItems: "center",
        color: theme.palette.text?.sidebar,
        cursor: "pointer",
        padding: "13px 10px",
        border: "1.4px solid transparent",
        position: "relative",
        "& img": {
          marginRight: "10px",
          width: "20px",
        },
        "&:hover": {
          background: theme.palette.background?.sidebarList,
          boxShadow: theme.palette.background?.bg1,
          borderRadius: "12px !important",
        },
        "& span": {
          fontSize: "6px",
          position: "absolute",
          background:
            "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
          color: "#fff",
          top: "4px",
          right: "30px",
          display: "inline-block",
          lineHeight: "normal",
          padding: "2px 5px",
          borderRadius: "2px",
        },
      },
    },
  },

  promotionButton: {
    "& button": {
      width: "100%",
      padding: "12px 0px !important",
      justifyContent: "flex-start",
      gap: "10px",
      display: "flex",
      fontStyle: "normal",
      fontFamily: "Proxima Nova",
      fontSize: "16px",
      color: theme.palette?.text?.sideBarListColor,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "transparent !important",
      },
      "& img": {
        paddingRight: "10px",
      },
    },
  },

  expandIcon: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-end",
    color: theme.palette?.text?.iconColor,
  },

  favoriteSection: {
    padding: "0",
  },

  navigationBar: {
    padding: "0",
  },

  languageButton: {
    marginTop: "30px",
    "& p": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      display: "flex",
      alignItems: "center",
      color: theme?.palette?.text?.default,
      margin: "0 0 10px 0",
    },

    "& button": {
      fontFamily: "Proxima Nova",
      background: theme.palette?.background?.sidebarList,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px !important",
      width: "100%",
      padding: "12px 15px !important",
      justifyContent: "flex-start",
      gap: "10px",
      display: "flex",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "17px",
      alignItems: "center",
      color: "#4D4D5B",
      textTransform: "capitalize",
      marginBottom: "30px",
      minHeight: "46px",
    },
  },

  liveChatBtn: {
    "& button": {
      background: theme.palette?.background?.sidebarList,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px !important",
      width: "100%",
      padding: "12px 15px !important",
      justifyContent: "flex-start",
      gap: "10px",
      display: "flex",
      fontStyle: "normal",
      fontFamily: "Proxima Nova",
      fontSize: "16px",
      lineHeight: "19px",
      color: theme.palette?.text?.sideBarListColor,
      textTransform: "capitalize",
      marginBottom: "30px",
      minHeight: "46px",
      "& img": {
        paddingRight: "10px",
      },
    },
  },

  socialIcon: {
    cursor: "pointer",
    padding: "0",
    display: "flex",
    marginBottom: "100px",
    justifyContent: "space-between",
    "& li": {
      padding: "0",
      width: "auto",
    },
  },

  toggleSection: {
    marginBottom: "30px",
  },

  checkbox: {
    opacity: "0",
    position: "absolute",
  },

  label: {
    width: "65px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    background: theme.palette?.background?.sidebarList,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "8px",
    padding: "0 7px",
    cursor: "pointer",
    "& img": {
      width: "15px",
      position: "relative",
    },
  },

  switchTab: {
    "& p": {
      margin: "0",
      "&:nth-child(1)": {
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        alignItems: "center",
        color: theme.palette.text?.default,
      },
      "&:nth-child(2)": {
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "10px",
        color: "#757786",
      },
    },
  },

  modeOption: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  ball: {
    marginLeft: "35px",
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "0px",
    left: "0px",
    transform: "translateX(0px)",
    transition: "transform 0.2s linear",
    border: theme.palette?.background?.toggleBorder,
    background: theme.palette?.background?.toggleBackground,
    boxShadow: theme.palette?.background?.toggleShadow,
    borderRadius: "8px",
  },
  themeChangeBtn: {
    border: theme.palette?.background?.toggleBorder,
    background: theme.palette?.background?.toggleBackground,
    boxShadow: theme.palette?.background?.toggleShadow,
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "15px",
    },
  },

  liveChaticon: {
    background: theme.palette?.background?.highlightSocialApp,
    border: theme.palette?.background?.socialIconBorder,
    boxShadow: theme.palette?.background?.socialIconShadow,
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "15px",
    },
  },

  socialIcons: {
    background: theme.palette?.background?.highlightSocialApp,
    border: theme.palette?.background?.socialIconBorder,
    boxShadow: theme.palette?.background?.socialIconShadow,
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationIcon: {
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationIconHighlighted: {
    border: theme.palette?.background?.toggleBorder,
    background: theme.palette?.background?.toggleBackground,
    boxShadow: theme.palette?.background?.toggleShadow,
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  languageSelectDropDown: {
    "& .MuiPaper-root": {
      borderRadius: "12px",
    },
    "& .MuiList-root": {
      backgroundColor: theme.palette.background.languageBg,
    },
    "& .MuiListItem-root": {
      color: theme.palette.text.default,
      fontSize: "14px",
      "&:hover": {
        backgroundColor: theme.palette.background.languageSelect,
      },
    },
    "& .Mui-selected": {
      backgroundColor: theme.palette.background.languageSelect,
      "&:hover": {
        backgroundColor: theme.palette.background.languageSelect,
      },
    },
  },

  demoCustomizedMenu: {
    "& .MuiPaper-root": {
      borderRadius: "12px",
      backgroundColor: "transparent",
    },
    "& .MuiList-root": {
      backgroundColor: theme.palette.background.languageBg,
    },
    "& .MuiListItem-root": {
      color: theme.palette.text.default,
      fontSize: "14px",
      "&:hover": {
        backgroundColor: theme.palette.background.languageSelect,
      },
    },
    "& .Mui-selected": {
      backgroundColor: theme.palette.background.languageSelect,
      "&:hover": {
        backgroundColor: theme.palette.background.languageSelect,
      },
    },
  },

  promotionActive: {
    background: theme.palette.background?.sidebarList,
    boxShadow: theme.palette.background?.bg1,
    borderRadius: "12px",
    margin: "10px 0",
    padding: "0 10px",
    "&:hover": {
      background: theme.palette.background?.sidebarList,
      boxShadow: theme.palette.background?.bg1,
    },
  },
}));
