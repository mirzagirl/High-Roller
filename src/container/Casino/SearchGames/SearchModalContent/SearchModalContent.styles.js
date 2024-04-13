import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  modal: {
    width: "80%",
    margin: "0 auto",
    marginTop: "80px",
    [theme.breakpoints.down(575)]: {
      width: "100%",
      marginTop: "0px",
    },
  },

  mobileBgColor: {
    [theme.breakpoints.down(991)]: {
      width: "100%",
      marginTop: "50px",
      backgroundColor: theme?.palette?.background?.default,
      height: "94%",
    },
  },

  modalheader: {
    padding: "1rem",
    backgroundColor: theme?.palette?.background?.sidebar,
    color: theme?.palette?.text?.placeholder,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiTypography-h6": {
      fontSize: "16px",
    },
    "& svg": {
      width: "15px",
      height: "15px",
      cursor: "pointer",
    },
  },
}));
