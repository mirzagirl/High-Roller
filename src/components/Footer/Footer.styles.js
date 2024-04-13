import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  footerWrapper: {
    background: theme.palette?.background?.footer,
    padding: "30px",
    display: "inline-block",
    width: "100%",
    [theme.breakpoints.down("xl")]: {
      padding: "30px",
      marginBottom: "42px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      width: "100%",
    },
  },
  footerWrap: {
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },

  footerLogo: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    color: theme?.palette?.text?.default,
    marginBottom: "23px",
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
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },

  logo: {
    background:
      "conic-gradient(from 180deg at 50% 50%, #695ABE 0deg, rgba(43, 26, 80, 0.44) 360deg)",
    borderRadius: "20px",
    height: "40px",
    minWidth: "40px",
    display: "inline-block",
  },

  logoName: {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "35px",
    paddingLeft: "12px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },

  footrAboutWrap: {
    "& p": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "150%",
      color: "#757786",
      "& a": {
        color: theme?.palette?.text?.default,
        textDecoration: "none",
      },
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "12px",
      },
    },
  },

  footerLink: {
    [theme.breakpoints.down(1536)]: {
      maxWidth: "50% !important",
      flexBasis: "50% !important",
    },

    "& h6": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      display: "flex",
      alignItems: "flex-end",
      color: theme?.palette?.text?.default,
      marginBottom: "10px",
      marginTop: "0",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        marginBottom: "9px",
        lineHeight: "17px",
        justifyContent: "center",
      },
    },
    "& ul": {
      padding: "0",
      margin: "0",
      "& li": {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "23px",
        display: "flex",
        alignItems: "flex-end",
        color: "#757786",
        marginBottom: "10px",
        padding: "0",
        [theme.breakpoints.down("md")]: {
          fontSize: "10px",
          marginBottom: "0px",
          lineHeight: "14px",
          padding: "0",
          justifyContent: "center",
        },
      },
    },
  },

  footerPaymentFollowWrap: {
    [theme.breakpoints.down(1450)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("991")]: {
      display: "flex",
      flexDirection: "row",
    },
    "& h6": {
      marginTop: "0",
      marginBottom: "13px",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "23px",
      display: "flex",
      textTransform: "capitalize",
      color: theme?.palette?.text?.default,
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        marginBottom: "9px",
        lineHeight: "17px",
      },
    },
    "& ul": {
      padding: "0",
      margin: "0 0 20px 0",
      display: "flex",
      gap: "19px",
      flexWrap: "wrap",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        gap: "9px",
        margin: "0",
      },
      "& li": {
        padding: "0",
        margin: "0",
        display: "contents",
        width: "30px",
        "& img": {
          [theme.breakpoints.down("md")]: {
            width: "10px",
          },
        },
      },
    },
  },

  footerCryptoLogo: {
    lineHeight: "68px",
    borderTop: "1px solid rgba(63, 70, 85, 0.3)",
    borderBottom: "1px solid rgba(63, 70, 85, 0.3)",
    margin: "30px 0",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "25px",
    },
    "& ul": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        paddingBottom: "0px",
        paddingTop: "0px",
      },
      "& li": {
        textAlign: "center",
        width: "130px",
        [theme.breakpoints.down("md")]: {
          padding: "0",
          width: "93px",
        },
        "& img": {
          [theme.breakpoints.down("md")]: {
            width: "60px",
          },
        },
        "&:last-child": {
          "& img": {
            [theme.breakpoints.down("md")]: {
              width: "15px",
            },
          },
        },
      },
    },
  },

  copyRight: {
    display: "inline-block",
    width: "100%",
    "& p": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
      textAlign: "center",
      color: "#666773",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
      "& span": {
        color: theme?.palette?.text?.default,
      },
    },
  },
  currencyWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "15px",
    [theme.breakpoints.down(1450)]: {
      flexDirection: "row",
      gap: "10px",
    },

    [theme.breakpoints.down(1200)]: {
      flexDirection: "column",
      gap: "0",
    },
    [theme.breakpoints.down(991)]: {
      flexDirection: "row",
      gap: "10px",
    },
    [theme.breakpoints.down(575)]: {
      gap: "11px",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },

  currencyDetail: {
    [theme.breakpoints.down(1450)]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    [theme.breakpoints.down(1200)]: {
      borderRadius: "8px",
      marginBottom: "10px",
      width: "100%",
    },
    [theme.breakpoints.down(991)]: {
      borderRadius: "8px",
      marginBottom: "0",
      width: "48%",
    },
    display: "flex",
    background: theme.palette?.background?.footerCurrencyChip,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "24px",
    padding: "7px",
    marginBottom: "30px",
    "& p": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "23px",
      display: "flex",
      alignItems: "center",
      color: "#757786",
      margin: "0",
      gap: "5px",
      "& span": {
        "& small": {
          fontSize: "16px",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        },
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "8px",
        lineHeight: "13px",
        justifyContent: "center",
      },
      "&:nth-child(2)": {
        paddingLeft: "5px",
        color: theme?.palette?.text?.default,
      },
      "& img": {
        [theme.breakpoints.down("md")]: {
          width: "10px",
        },
      },
    },
  },
  mobiFooter: {
    display: "none",
    background: theme.palette.background?.sidebar,
    borderRadius: "20px 20px 0 0",
    width: "calc(100% + 40px)",
    marginLeft: "-20px",
    overflow: "hidden",
    [theme.breakpoints.down(991)]: {
      display: "block",
      position: "fixed",
      bottom: "0",
      left: "0",
    },
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 30px",
      "& li": {
        "& a": {
          textDecoration: "none",
        },
        "& p": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          gap: "5px",
          "& ijmg": {
            width: "12px",
          },
          "& span": {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "14px",
            textAlign: "center",
            color: "#757786",
          },
        },
      },
    },
  },

  active: {
    background:
      "radial-gradient(201.67% 201.67% at 50% -31.67%, #5D69CF 0%, #342A6F 100%)",
    border: "1.4px solid rgba(106, 113, 199, 0.16)",
    boxShadow: "0px 4px 24px 2px rgba(108, 93, 193, 0.24)",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  footerflex: {
    gap: "48px",
    [theme.breakpoints.down(1919)]: {
      gap: "0",
    },
  },
}));
