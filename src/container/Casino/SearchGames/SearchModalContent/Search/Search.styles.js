import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    "&  .MuiInputBase-root": {
      [theme.breakpoints.down("md")]: {
        background: "#fff !important",
      },
    },
  },

  category: {
    background: theme?.palette?.background?.sidebar,
    padding: "0.2rem",
  },

  accordian: {
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      width: "100%",
      margin: "0 !important",
      minHeight: "44px !important",
      padding: "10px !important",
      background: theme?.palette?.background?.default,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      borderRadius: "12px !important",
      "& p": {
        fontSize: "12px",
      },
      "& .MuiAccordionSummary-content": {
        margin: "0",
      },
      color: theme?.palette?.text?.color,
    },
  },

  search: {
    padding: "20px 15px",
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
    backgroundColor: theme?.palette?.background?.sidebar,
  },

  selectemItemBtn: {
    marginTop: "10px",
    textTransform: "none",
  },
  searchGames: {
    minHeight: "23rem",
    margin: "0",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme?.palette?.text?.placeholder,
  },
  searchGamesshow: {
    paddingLeft: "1rem",
  },
  headerSearch: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    "& .MuiTextField-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      color: theme?.palette?.text?.default,
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    "& .MuiInputBase-root": {
      borderRadius: "12px",
      height: "40px",
      fontSize: "14px",
      background: theme?.palette?.background?.default,
      boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
      color: theme?.palette?.text?.default,
      padding: "0 20px",
      "&::placeholder": {
        color: "#4D4D5B",
        fontWeight: "500",
        fontSize: "16px",
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    "& img": {
      top: "0px",
      right: "10px",
      position: "absolute",
      bottom: "0px",
      margin: "auto",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  searchImg: {
    textAlign: "center",
    "& img": {
      width: "300px",
    },
    "& .MuiTypography-h6": {
      fontSize: "14px",
      [theme.breakpoints.down("md")]: {
        background: "transparent",
        textAlign: "center",
        padding: "0 10px",
      },
    },
  },
  gamesWrapper: {
    justifyContent: "center",
    "& .MuiGrid-item": {
      float: "left",
      marginBottom: "50px",
      width: "152px",
      height: "200px",
      aspectRatio: "1",
      marginRight: "18px",
      [theme.breakpoints.down("sm")]: {
        width: "128px",
        height: "170px",
        marginRight: "5px",
      },
    },
    "& .casinoCard": {
      "& .MuiTypography-body1": {
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: "120px",
        },
      },
    },
  },

  btnPrimary: {
    backgroundColor: `${theme?.palette?.primary2?.color} !important`,
    borderRadius: "5px",
    padding: "6px 20px",
    color: `${theme?.palette?.text?.default} !important`,
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    "&:hover": {
      background: theme?.palette?.primary1?.color,
      color: theme?.palette?.text?.default,
    },
  },
}));
