import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  betAmountCs: {
    color: theme.palette.text?.default,
  },
  logoSize: {
    width: "60px",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  fadeIn: {
    animation: "$fadeIn 0.5s ease-in",
  },
  "@keyframes slideIn": {
    from: {
      transform: "translateY(-100%)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  slideIn: {
    animation: "$slideIn 0.8s linear",
  },

  referralText: {
    maxWidth: "278px",
    [theme.breakpoints.down(991)]: {
      maxWidth: "190px",
    },
  },

  bonusSectionAlign: {
    margin: "0",
    width: "100%",
  },

  semiBannerImage: {
    position: "relative",
    "& img": {
      width: "100%",
    },
  },

  BannerImageTopAlign: {
    "& img": {
      marginTop: "16px",
    },
  },

  bonusHeading: {
    display: "flex",
    gap: "14px",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "24px",
    lineHeight: "32px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    padding: "24px 0",
    "& img": {
      width: "20px",
    },
  },

  semiBanner: {
    "& react-multi-carousel-item react-multi-carousel-item--active ": {
      width: "597px",
      [theme.breakpoints.down(991)]: {
        width: "100%",
      },
    },
  },

  semiBannerImageText: {
    top: "0",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    height: "100%",
    left: "55px",
    [theme.breakpoints.down(1100)]: {
      left: "20px",
    },

    [theme.breakpoints.down(991)]: {
      left: "25px",
    },
    "& h5": {
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "24px",
      lineHeight: "32px",
      textTransform: "uppercase",
      color: "#FFFFFF",
      [theme.breakpoints.down(1100)]: {
        fontSize: "20px",
        lineHeight: "20px",
      },
      [theme.breakpoints.down(991)]: {
        fontSize: "14px",
      },
    },
    "& p": {
      marginTop: "16px",
      marginBottom: "24px",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "160%",
      color: "#FFFFFF",
      [theme.breakpoints.down(1745)]: {
        marginBottom: "10px",
        marginTop: "10px",
        fontSize: "14px",
      },

      [theme.breakpoints.down(1100)]: {
        fontSize: "12px",
      },

      [theme.breakpoints.down(991)]: {
        fontSize: "12px",
        marginTop: "0px",
        marginBottom: "10px",
      },
    },
    "& button": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      border: "2px solid rgba(106, 113, 199, 0.84)",
      boxShadow: "0px 4px 12px 2px rgba(108, 93, 193, 0.24)",
      borderRadius: "8px !important",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: "#FFFFFF",
      minWidth: "160px",
      maxWidth: "160px",
      [theme.breakpoints.down(1100)]: {
        fontSize: "12px",
        borderRadius: "4px !important",
        padding: "4px !important",
        maxWidth: "100px",
        minWidth: "100px",
      },
    },
  },

  providerName: {
    borderTop: "1px solid",
    width: "100%",
    paddingTop: "5px",
    marginTop: "8px !important",
  },

  bannerImage: {
    marginTop: "80px",
    position: "relative",
    "& img": {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        maxHeight: "148px",
        aspectRatio: "1",
      },
    },
  },

  position: {
    position: "relative",
  },
  position2: {
    position: "relative",
    width: "378px",
  },

  imageText: {
    position: "absolute",
    right: "40px",
    top: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textWidth: {
    maxWidth: "130px",
    textAlign: "right",
  },

  bannerText: {
    display: "flex",
    position: "absolute",
    left: "0",
    right: "0",
    textAlign: "center",
    flexDirection: "column",
    top: "120px",
    [theme.breakpoints.down(1536)]: {
      top: "40px",
    },
    "& h2": {
      fontWeight: "800",
      fontSize: "40px",
      lineHeight: "32px",
      textTransform: "uppercase",
      color: theme.palette.text?.default,
      [theme.breakpoints.down(1536)]: {
        fontSize: "16px",
      },
      "& span": {
        color: "#00daea",
      },
    },
    "& p": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "160%",
      textAlign: "center",
      color: "#757786",
      margin: "40px 0",

      [theme.breakpoints.down(1536)]: {
        fontSize: "11px",
        marginTop: "10px",
        marginBottom: "10px",
      },
      [theme.breakpoints.down(991)]: {
        fontSize: "12px",
        marginTop: "10px",
        marginBottom: "20px",
      },
      "& span": {
        color: "#00daea",
      },
    },
    "& button": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      border: "2.4px solid rgba(106, 113, 199, 0.84)",
      boxShadow: "0px 4px 24px 2px rgba(108, 93, 193, 0.44)",
      borderRadius: "12px !important",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "16px",
      lineHeight: "22px",
      textTransform: "capitalize",
      color: "#FFFFFF",
      minWidth: "300px !important",
      maxWidth: "300px !important",
      margin: "0 auto",
      padding: "17px 0 !important",
      [theme.breakpoints.down(1536)]: {
        padding: "7px 0 !important",
        fontSize: "12px",
        maxWidth: "160px !important",
        minWidth: "160px !important",
        borderRadius: "4px !important",
      },
    },
  },

  containerWraper: {
    flexWrap: "nowrap",
    gap: "10px",
  },

  btnWrap: {
    margin: "10px 0",
    display: "block",
  },
  btnPrimary: {
    background: "linear-gradient(270deg, #7458DC 0%, #9787D2 100%)",
    borderRadius: "30px",
    padding: "6px 30px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    transition: "background 400ms ease-in-out",
  },
  btnSecondary: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    display: "flex",
    alignItems: "center",
    color: theme.palette?.background?.seeAll,
    padding: "5px 16px",
    textDecoration: "none",
    marginRight: "80px",
    [theme.breakpoints.down(1028)]: {
      padding: "0px 10px",
      fontSize: "12px",
      marginRight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 12px",
      fontSize: "14px",
      marginBottom: "0",
      borderRadius: "6px",
    },

    "&:hover": {
      background: theme.palette?.background?.highlightSocialApp,
      color: theme.palette?.background?.seeAll,
    },
  },
  bannerContent: {
    padding: "30px 0 30px 60px",
    "& .MuiTypography-h1": {
      fontWeight: "bold",
      fontSize: "45px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
      },
      "& br": {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    "& img": {
      marginRight: "5px",
      [theme.breakpoints.down("sm")]: {
        marginRight: "0",
        width: "100px",
      },
    },
    "& .MuiTypography-body1": {
      fontSize: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    "& .MuiButton-textPrimary": {
      padding: "6px 40px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px",
    },
  },
  homeFilter: {
    justifyContent: "space-between",
    padding: "30px 200px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px",
      overflowX: "auto",
    },
    "& .MuiInputBase-colorPrimary": {
      width: "333px",
      background: "#7458DC",
      borderRadius: "10px",
      color: "#000",
      margin: "20px",
      [theme.breakpoints.down("md")]: {
        marginRight: "10px",
        width: "100px",
        fontSize: "12px",
      },
    },
    "& .MuiInputBase-input": {
      height: "20px",
      padding: "10px",
      background: "#7458DC",
      borderRadius: "10px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down("md")]: {
        width: "150px",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "& .MuiSvgIcon-root": {
      color: "#000",
    },
  },

  casinoCard: {
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    borderRadius: "10px",
    height: "100%",
    aspectRatio: "1",
    width: "100%",
    "& .css-vj1n65-MuiGrid-root": {
      height: "100%",
    },

    "& img": {
      height: "100%",
      width: "100%",
      borderTop: theme?.palette?.background?.gameTopBorder,
      borderRadius: "12px",
    },
    "& .MuiTypography-body1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        maxWidth: "120px",
      },
    },
    "&:hover": {
      "& .MuiBox-root": {
        opacity: "1",
      },
    },
  },
  casinoOverlay: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiTypography-body1": {
      paddingRight: "10px",
      fontWeight: " 500",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.default,
      width: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },

  customInfoModal: {
    borderRadius: "10px",
    background: "#6201A6",
    position: "absolute",
    minWidth: "270px",
    left: "-52px",
    right: "auto",
    top: "-100px",
    padding: "5px",
    zIndex: "5",
    display: "none",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("sm")]: {
      left: "-132px",
    },
  },
  customInfoCard: {
    padding: "10px",
    background: "#480279",
    margin: "5px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& span": {
      fontSize: "12px",
      color: "#bbb7b7",
    },
    "& .MuiTypography-body1": {
      fontSize: "14px",
      color: "#fff",
    },
  },
  innerHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
      marginTop: "15px",
    },
  },
  innerHeadingLeft: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "15px",
      width: "20px",
      [theme.breakpoints.down("md")]: {
        marginRight: "6px",
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
        marginRight: "5px",
      },
    },
    "& .MuiTypography-h6": {
      fontSize: "20px",
      lineHeight: "29px",
      textTransform: "capitalize",
      color: theme.palette?.text?.default,
      margin: "0",
      [theme.breakpoints.down(1200)]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down(1028)]: {
        fontSize: "14px",
      },
    },
  },
  noGamesMsg: {
    textAlign: "center",
  },
  categoryLoader: {
    margin: "40px",
  },
  homePromotionCard: {
    "& img": {
      width: "100%",
    },
  },
  filterWrapCenter: {
    background: theme.palette?.background?.sidebar,
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    overflowX: "auto",
    margin: "40px 0 !important",
    padding: "9px 30px !important",
    [theme.breakpoints.down("md")]: {
      padding: "10px !important",
    },
  },

  filterWrap: {
    "& .MuiButtonBase-root.Mui-disabled": {
      display: "none",
      opacity: "0",
    },
    "& .MuiTabs-flexContainer": {
      display: "-webkit-box !important",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: "9px 3px",
    "& .MuiInputBase-root": {
      width: "100%",
    },

    "& fieldset": {
      border: "none",
    },

    "& .MuiSelect-select": {
      padding: "3px 14px",
    },

    [theme.breakpoints.down("md")]: {
      margin: "30px 0 24px 0 !important",
    },
    "& .react-horizontal-scrolling-menu--wrapper": {
      maxWidth: "100% !important",
    },

    "& .react-horizontal-scrolling-menu--scroll-container": {
      height: "230px",
      gap: "9px",
      [theme.breakpoints.down("md")]: {
        height: "160px",
        gap: "5px",
      },
    },

    "& .react-horizontal-scrolling-menu--arrow-right": {
      position: "absolute",
      right: "0px",
      top: "0",
      transform: "translateY(-53px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-53px)",
      },

      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-43px)",
      },

      [theme.breakpoints.down(991)]: {
        transform: "translateY(-38px)",
      },
    },
    "& .react-horizontal-scrolling-menu--arrow-left": {
      position: "absolute",
      right: "40px",
      top: "0",
      transform: "translateY(-53px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-53px)",
      },

      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-43px)",
        right: "30px",
      },

      [theme.breakpoints.down(991)]: {
        transform: "translateY(-38px)",
      },
    },

    "& .react-horizontal-scrolling-menu--item": {
      height: "200px",
      width: "154px",
      aspectRatio: "1",
      [theme.breakpoints.down("md")]: {
        width: "96px",
        height: "122px",
      },
      "& .MuiGrid-item": {
        height: "100%",
      },
    },
  },

  filterWrapSlider: {
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      margin: "0px 0 0px 0 !important",
      padding: "0 !important",
    },
  },
  filterWrapSliderOverride: {
    "& .react-horizontal-scrolling-menu--wrapper": {
      "&:after": {
        display: "none",
      },
    },
  },

  leftArrow: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px !important",
    height: "33px",
    width: "33px",
    minWidth: "33px !important",
    padding: "0 !important",
    display: "flex !important",
    opacity: "1 !important",
    [theme.breakpoints.down(1028)]: {
      height: "25px",
      width: "25px",
      minWidth: "25px !important",
    },
    "& svg": {
      fill: "#666773",
      [theme.breakpoints.down("md")]: {
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "26px",
      width: "26px",
      minWidth: "26px !important",
      borderRadius: "6px",
    },
    "&:hover": {
      backgroundColor: "rgba(43, 43, 56, 0.8)",
    },
  },
  rightArrow: {
    background: theme.palette?.background?.highlightSocialApp,
    border: "1.4px solid rgba(255, 255, 255, 0.04)",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "8px !important",
    height: "33px",
    width: "33px",
    minWidth: "33px !important",
    padding: "0 !important",
    [theme.breakpoints.down(1028)]: {
      height: "25px",
      width: "25px",
      minWidth: "25px !important",
    },
    "& svg": {
      fill: "#666773",
      [theme.breakpoints.down("md")]: {
        width: "15px",
      },
      [theme.breakpoints.down(1028)]: {
        width: "15px",
      },
    },
    [theme.breakpoints.down("md")]: {
      height: "26px",
      width: "26px",
      minWidth: "26px !important",
    },
    "&:hover": {
      backgroundColor: "rgba(43, 43, 56, 0.8)",
    },
  },

  active: {
    background: `${theme?.palette?.background?.colorbutton} !important`,
    border: "1.4px solid rgba(255, 255, 255, 0.04) !important",
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px !important",
    color: "#fff",
    "& img": {
      filter: "brightness(1)",
    },
  },

  filterWrapLeft: {
    textDecoration: "none",
    color: theme?.palette?.text?.filterbtn,
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    borderRadius: "30px",
    fontWeight: "500",
    fontSize: "14px",
    textTransform: "capitalize",
    border: "1.4px solid transparent",
    lineHeight: "40px",
    whiteSpace: "nowrap",
    "&:hover": {
      background: theme?.palette?.text?.fliterbtnhover,
      border: "1.4px solid rgba(255, 255, 255, 0.04)",
      boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
      borderRadius: "12px !important",
      color: theme?.palette?.text?.default,
      opacity: "1",
      "& button": {
        color: theme?.palette?.text?.default,
      },
    },
    "& button": {
      padding: "0 !important",
      fontWeight: "500",
      textTransform: "capitalize",
      opacity: "1",
      color: theme?.palette?.text?.buttoncolor,
      fontSize: "14px",
      minWidth: "inherit",
      maxWidth: "inherit",
    },
    "& img": {
      marginRight: "8px",
      width: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1px 15px",
      fontSize: "12px",
    },
    [theme.breakpoints.down("lg")]: {
      overflowX: "auto",
      whiteSpace: "nowrap",
      marginRight: "15px",
      height: "54px",
    },
  },

  hrOrignalsSection: {
    display: "inline-block",
    width: "100%",
  },

  themeCard: {
    background: theme?.palette?.background?.tablebackground,
    boxShadow: "inset 0px 2px 12px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
    position: "relative",
    margin: "40px 0",

    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      margin: "70px 0",
    },
    [theme.breakpoints.down(991)]: {
      display: "none",
    },
  },
  hrOrignalsImg: {
    minHeight: "250px",
    backgroundImage: "url('/images/crash-card.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "20px",
    backgroundPosition: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "68% 40%",
    },
  },
  hrOrignalsContent: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    alignItems: "flex-start",
    padding: "40px 0 40px 30px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      transform: "translate(-50%, -50%)",
      top: "50%",
      left: "50%",
      position: "absolute",
      width: "100%",
      padding: "0",
    },
    "& .MuiTypography-h4": {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "50px",
      fontStyle: "italic",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        marginBottom: "10px",
      },
    },
    "& .MuiTypography-h5": {
      fontSize: "25px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        marginBottom: "10px",
      },
    },
  },
  themeHeading: {
    background: "#1C1E22",
    padding: "8px 30px 5px",
    display: "flex",
    alignItems: "center",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    position: "absolute",
    top: "-44px",
    left: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 30px 5px",
    },
    "& img": {
      width: "40px",
      marginLeft: "-10px",
    },
    "& .MuiTypography-body1": {
      fontSize: "16px",
      marginLeft: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        marginLeft: "5px",
      },
    },
  },

  legend: {
    position: "absolute",
    top: "60px",
    left: "50px",
    minHeight: "100%",
    [theme.breakpoints.down("xl")]: {
      top: "30px",
      left: "20px",
    },

    [theme.breakpoints.down("lg")]: {
      top: "10px",
      left: "10px",
    },

    [theme.breakpoints.down("md")]: {
      top: "40px",
      left: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      top: "16px",
      left: "16px",
    },

    "& h6": {
      color: "#FFF",
      margin: "0",
      fontSize: "32px",
      fontStyle: "normal",
      [theme.breakpoints.down("xl")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& p": {
      color: "#FFF",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "140%",
      margin: "30px 0",
      [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
        margin: "10px 0",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "10px",
        margin: "0",
      },
      [theme.breakpoints.down("md")]: {
        margin: "20px 0",
        fontSize: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        padding: "16px 0",
        maxWidth: "62%",
        margin: "0",
      },
    },
    "& button": {
      borderRadius: "12px",
      border: "1.4px solid rgba(255, 255, 255, 0.24)",
      background: theme.palette?.background?.bannerIcon,
      color: theme.palette?.background?.proColor,
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      textTransform: "capitalize",
      padding: "14px 75px",
      cursor: "no-drop",
      "&:hover": {
        background: theme.palette?.background?.bannerIcon,
        color: theme.palette?.background?.proColor,
        opacity: "1",
      },
      [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
        padding: "10px 45px",
        borderRadius: "8px !important",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "10px",
        padding: "8px 25px",
        borderRadius: "8px !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
        padding: "10px 45px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        padding: "8px 25px",
        borderRadius: "8px !important",
      },
    },
  },

  lobbysearchInput: {
    position: "relative",
    "& svg": {
      top: "7px",
      right: "20px",
      opacity: "0.5",
      position: "absolute",
      width: "15px",
    },
  },

  filterWrapRight: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    "& .MuiInputBase-input": {
      background: theme?.palette?.background?.default2,
      color: theme?.palette?.text?.default,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px",
      height: "40px",
      minWidth: "240px",
      padding: "0 16px 0 22px",
      fontSize: "14px",
      fontWeight: "400",
      marginRight: "8px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
      [theme.breakpoints.down("md")]: {
        minWidth: "100%",
        marginRight: "0",
      },
      "&::-webkit-input-placeholder": {},
    },
    "& .MuiInputBase-root": {
      "&:after, &:before": {
        display: "none",
      },
    },
    "& img": {
      position: "absolute",
      right: "20px",
      top: "10px",
    },
  },
  formGroup: {
    position: "relative",
  },
  currenciesSection: {
    marginBottom: "100px",
  },
  currencyListing: {
    background: "#1E2024",
    borderRadius: "20px",
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      "& li": {
        width: "100%",
        display: "flex",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRight: " 2px solid #191A1E",

        "&:last-child": {
          border: "none",
        },
        "& img": {
          marginRight: "20px",
          [theme.breakpoints.down("sm")]: {
            width: "40px",
          },
        },
        "& .MuiTypography-h6": {
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        },
      },
    },
    [theme.breakpoints.down("lg")]: {
      overflowX: "auto",
    },
  },

  tableResponsive: {
    minWidth: "800px",
    overflowX: "auto",
  },

  latestBetSection: {
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      [theme.breakpoints.down("xl")]: {
        tableLayout: "inherit",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
      "& .liveUser": {
        background: theme.palette.background?.userImgBorder,
      },
      "& .userName": {
        color: theme.palette.text?.default,
      },
      "& thead": {
        borderRadius: "12px",
        "& th": {
          padding: "20px",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          textTransform: "capitalize",
          color: "#757786",
          "&:nth-child(1)": {
            paddingLeft: "35px",
          },
        },
      },
      "& tbody": {
        "& td": {
          padding: "13px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#757786",
          "&:nth-child(1)": {
            paddingLeft: "35px",
          },
          "& span": {
            fontWeight: "normal",
            display: "flex",
          },
          "& b": {
            fontWeight: "normal",
          },
        },
        "& tr": {
          "&:nth-child(odd)": {
            background: theme?.palette?.background?.tablerow,
          },
          "&:last-child": {
            "& td": {
              "&:first-child": {
                borderRadius: "0 0 0 12px",
              },
              "&:last-child": {
                borderRadius: "0  0 12px 0",
              },
            },
          },
        },
      },
    },
  },

  mobTabSection: {
    padding: "15px 10px 20px 10px",
    "& button": {
      minWidth: "inherit !important",
      maxWidth: "inherit",
      padding: "0 !important",
      margin: "0 !important",
      minHeight: "inherit",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px !important",
      lineHeight: "16px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.color,
    },
    "& .Mui-selected": {
      background: theme?.palette?.background?.buttonbackground,
      border: theme?.palette?.background?.balanceBOrder,
      boxShadow: theme?.palette?.background?.toggleShadow,
      borderRadius: "12px !important",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
      textTransform: "capitalize",
      color: "#FFFFFF",
      padding: "5px 16px !important",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTabs-root": {
      minHeight: "inherit",
    },
    "& .MuiTabs-flexContainer": {
      gap: "15px",
    },
  },

  tableBg: {
    background: theme?.palette?.background?.mobiTableBg,
    boxShadow: theme?.palette?.background?.mobiTableShadow,
    borderRadius: "8px",
    marginBottom: "40px",
    marginTop: "40px",
    display: "none",
    [theme.breakpoints.down(991)]: {
      display: "block",
    },
  },

  mobileTable: {
    padding: "6px 10px",
    "&:nth-child(odd)": {
      background: theme?.palette?.background?.mobiTableOddBg,
    },
  },

  mobileTableDetail: {
    display: "flex",
    alignItems: "center",
    "& p": {
      margin: "0",
    },
  },

  gameName: {
    flexGrow: "1",
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "25px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.mobiTableText_2,
      "&:nth-child(1)": {
        color: theme?.palette?.text?.mobiTableText_1,
      },
    },
  },

  amountSection: {
    display: "flex",
    alignItems: "center",
  },

  currencyStatus: {
    width: "60px",
    "& p": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "10px",
      lineHeight: "25px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.mobiTableText_1,
    },
  },

  currencySection: {
    "& p": {
      display: "flex",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "25px",
      justifyContent: "flex-end",
      color: theme?.palette?.text?.mobiTableText_2,
      minWidth: "70px",
      "& span": {
        width: "20px",
        height: "20px",
      },
      "& img": {
        marginLeft: "5px",
      },
    },
  },

  betTableWrap: {
    [theme.breakpoints.down("xl")]: {
      overflowY: "scroll",
      overflowX: "auto",
      whiteSpace: "nowrap",
      position: "relative",
    },
    [theme.breakpoints.down("md")]: {
      overflowY: "scroll",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },
  },
  imageHover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(2px)",
    background: theme?.palette?.background?.hoverBg,
    borderTop: theme?.palette?.background?.gameTopBorder,
    top: "0",
    transition: "top 0.8s",
    left: "0",
    textAlign: "center",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "0",
    opacity: "0",
    "& img": {
      width: "60px",
      height: "60px",
      objectFit: "contain",
      margin: "0 auto",
      borderTop: "none",
      transform: "inherit !important",
      [theme.breakpoints.down("md")]: {
        width: "30px",
        height: "30px",
      },
    },
    "& p": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.default,
      margin: "0",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
        lineHeight: "12px",
      },
    },

    "& .favBtnClass": {
      position: "absolute",
      top: "10px",
      right: "10px",
      padding: "0 !important",
      justifyContent: "flex-end",
      minWidth: "inherit !important",
      [theme.breakpoints.down("md")]: {
        top: "0px",
        right: "5px",
      },
      "& svg": {
        color: `${theme?.palette?.text?.default} !important`,
        [theme.breakpoints.down("md")]: {
          width: "0.9rem",
        },
      },
    },
    "& .playBtn": {
      flexDirection: "column",
      padding: "0 !important",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
      },
    },
  },
  cryptoSection: {
    padding: "40px 20px 0 20px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down(1200)]: {
      padding: "40px 10px 0 10px",
    },
    [theme.breakpoints.down(1200)]: {
      padding: "20px 0px 0 0px",
    },
    [theme.breakpoints.down(768)]: {
      padding: "20px 0px 0 10px",
      alignItems: "center",
    },
    "& ul": {
      padding: "0",
      listStyle: "none",
      "& li": {
        padding: "0",
        display: "flex",
        [theme.breakpoints.down(575)]: {
          textAlign: "center",
        },
        [theme.breakpoints.between(991, 1199)]: {
          flexDirection: "column",
          textAlign: "center",
        },
      },
    },
    "& .MuiGrid-item": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },

  cryptoText: {
    float: "left",
    width: "313px",
    [theme.breakpoints.down(1536)]: {
      width: "130px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "120px",
    },

    [theme.breakpoints.down(991)]: {
      width: "220px",
    },

    [theme.breakpoints.down(769)]: {
      width: "220px",
    },

    [theme.breakpoints.down(575)]: {
      width: "200px",
    },
    "& ul": {
      display: "flex",
      "& span": {
        "&:nth-child(1)": {
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "40px",
          lineHeight: "58px",
          textTransform: "capitalize",
          color: "#757786",
          paddingRight: "12px",
          [theme.breakpoints.down("xl")]: {
            fontSize: "20px",
            lineHeight: "28px",
          },
          [theme.breakpoints.down(1200)]: {
            fontSize: "26px",
            lineHeight: "28px",
            paddingRight: "5px",
          },
        },
        "&:nth-child(2)": {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "20px",
          textTransform: "capitalize",
          color: "#757786",
          maxWidth: "40px",
          display: "inline-block",
          [theme.breakpoints.down("xl")]: {
            lineHeight: "15px",
            fontSize: "12px",
          },
        },
        [theme.breakpoints.down(1200)]: {
          fontSize: "10px",
        },
      },
      "& li": {
        [theme.breakpoints.between(1199, 1536)]: {
          flexDirection: "column",
        },
        "&:nth-child(2)": {
          [theme.breakpoints.down(575)]: {
            borderRight: "1px solid #2E2E37",
            borderRadius: "2px",
          },
        },
      },
    },
  },

  cryptoLogo: {
    borderLeft: theme.palette?.background?.cryprosectionBorder,
    borderRight: theme.palette?.background?.cryprosectionBorder,
    borderRadius: "2px",
    paddingLeft: "35px",
    paddingRight: "35px",
    float: "left",
    width: "calc(100% - 413px)",
    minHeight: "58px",
    [theme.breakpoints.down(1536)]: {
      width: "calc(100% - 190px)",
      paddingLeft: "0",
      paddingRight: "0px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "calc(100% - 180px)",
      paddingLeft: "0",
      paddingRight: "0px",
    },
    [theme.breakpoints.down(991)]: {
      minHeight: "30px",
      width: "calc(100% - 330px)",
    },
    [theme.breakpoints.down(769)]: {
      width: "calc(100% - 330px)",
      minHeight: "inherit",
    },
    [theme.breakpoints.down(575)]: {
      width: "calc(100% - 200px)",
      border: "none",
      minHeight: "inherit",
      display: "inline-block",
    },
    "& ul": {
      "& li": {
        textAlign: "center",
        "& img": {
          width: "80px",
          margin: "0 auto",
        },
      },
    },
  },

  showAll: {
    whiteSpace: "nowrap",
    lineHeight: "58px",
    minHeight: "58px",
    float: "left",
    width: "100px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down(1536)]: {
      width: "60px",
    },
    [theme.breakpoints.down(991)]: {
      minHeight: "30px",
    },
    [theme.breakpoints.down(769)]: {
      minHeight: "inherit",
      width: "70px",
    },
    [theme.breakpoints.down(575)]: {
      display: "none",
    },
    "& div": {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: "#757786",
      textAlign: "right",
      [theme.breakpoints.down("xl")]: {
        fontSize: "12px",
      },
    },
  },

  gameIcon: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: "12px",
    },
  },

  playerIcon: {
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.text?.default,
    "& span": {
      "& img": {
        marginRight: "12px",
        width: "100%",
        clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        objectFit: "cover",
        aspectRatio: "1",
        borderRadius: "4px",
        maxHieght: "5px",
        maxWidth: "30px",
      },
    },
  },

  betIcon: {
    display: "flex",
    alignItems: "center",
    color: theme?.palette?.text?.default,
    justifyContent: "center",
    "& img": {
      marginRight: "12px",
    },
    "& span": {
      display: "inherit",
      width: "28px",
    },
  },

  greenColor: {
    color: "#6CD9A5",
  },

  redColor: {
    color: "#F25C5C",
  },

  tabSection: {
    borderRadius: "12px 12px 0 0",
    padding: "15px 0 0px 35px",
    "& .MuiTabs-flexContainer": {
      gap: "28px",
    },
    "& .Mui-selected": {
      background:
        "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
      border: "1.4px solid rgba(106, 113, 199, 0.84)",
      boxShadow: "0px 4px 12px 2px rgba(108, 93, 193, 0.24)",
      borderRadius: "12px !important",
      color: "#FFFFFF !important",
      padding: "0 24px !important",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& button": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: theme?.palette?.text?.color,
      borderRadius: "12px !important",
      margin: "0",
      padding: "0px !important",
      minHeight: "32px",
      minWidth: "inherit",
    },
  },

  mobSearch: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "24px",
    },
  },
  modalFavBtn: {
    margin: "0 2px",
    "& .MuiButtonBase-root ": {
      fontSize: "6px",
      background: theme?.palette?.primary1?.color,
      width: "100%",
      padding: "4px 5px",
      color: "#fff",
      borderRadius: "2px",
      "& img": {
        width: "10px",
        marginLeft: "5px",
      },
      "&:hover": {
        background: theme?.palette?.primary1?.color,
        color: "#fff",
      },
    },
  },

  noBets: {
    width: "100%",
    textAlign: "center",
    color: `${theme?.palette?.text?.default} !important`,
    fontSize: "20px !important",
  },
}));
