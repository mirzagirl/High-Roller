import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  btnPrimary: {
    background: "#feba19",
    borderRadius: "5px",
    padding: "6px 20px",
    color: "#000",
    height: "36px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "capitalize",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      padding: "6px 10px",
      height: "30px",
      fontSize: "10px",
    },
    "&:hover": {
      background: "#e8a812",
    },
    "& span": {
      marginRight: "5px",
    },
  },
  filterWrap: {
    "& .MuiButtonBase-root.Mui-disabled": {
      display: "none",
      opacity: "0",
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
      [theme.breakpoints.down("md")]: {
        height: "200px",
        gap: "5px",
      },
    },

    "& .react-horizontal-scrolling-menu--arrow-right": {
      position: "absolute",
      right: "0px",
      top: "0",
      transform: "translateY(-55px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-55px)",
      },

      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-48px)",
      },

      [theme.breakpoints.down(991)]: {
        transform: "translateY(-38px)",
      },
    },
    "& .react-horizontal-scrolling-menu--arrow-left": {
      position: "absolute",
      right: "40px",
      top: "0",
      transform: "translateY(-55px)",
      [theme.breakpoints.down("xl")]: {
        transform: "translateY(-55px)",
      },

      [theme.breakpoints.down(1028)]: {
        transform: "translateY(-48px)",
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
        width: "126px",
        height: "162px",
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
  dialogcontainer: {
    maxWidth: "95%",
    margin: "0 auto",
    "& .MuiDialog-container": {
      display: "block",
      [theme.breakpoints.down("md")]: {
        marginTop: "0",
      },
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      padding: "0 !important",
      backdropFilter: "none",
    },
    "& .MuiBackdrop-root": {
      opacity: "0 !important",
    },
  },
  customSearchbar: {
    background: theme.palette.background?.default2,
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
    width: "300px",
    height: "40px",
    [theme.breakpoints.down(1600)]: {
      width: "200px",
    },

    "& .MuiInputBase-input": {
      paddingLeft: "20px",
      color: theme.palette.text?.default,
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

    "& fieldset": {
      border: "none",
      height: "40px",
    },
    position: "relative",
    [theme.breakpoints.down("md")]: {},
    "& img": {
      position: "absolute",
      right: "22px",
      top: "10px",
      [theme.breakpoints.down("sm")]: {
        right: "20px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& .MuiFormControl-root": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        borderRadius: "12px",
      },
    },
  },

  searchResult: {
    position: "absolute",
    left: "300px",
    display: "flex",
    justifyContent: "center",
    right: "0",
    background: theme.palette.background?.iframeBg,
    border: theme.palette.background?.iframeBorder,
    boxShadow: theme.palette.background?.iframeShadow,
    width: "calc(100% - 780px)",
    top: "100px",
    padding: "20px",
    height: "425px",
    overflowY: "auto",
    borderRadius: "20px",
  },

  gameResult: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: "16px",
    "& .MuiGrid-item": {
      height: "200px",
      width: "160px",
      marginBottom: "4rem",
    },
  },
  noGames: {
    justifyContent: "space-between",
    width: "100%",
    "& p": {
      margin: "0",
      width: "100%",
      textAlign: "center",
    },
  },
}));
