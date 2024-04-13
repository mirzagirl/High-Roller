import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  accountRight: {
    width: "440px",
    padding: "20px",
    background: "#24242B",
    boxShadow: "inset 0px 2px 4px rgba(255, 255, 255, 0.02)",
    borderRadius: "12px",
  },
  currencyIcon: {
    display: "inline-flex",
    "& img": {
      padding: "11px 13px",
    },
  },
  formGroup: {
    position: "relative",
    marginBottom: "10px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& span": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: "#757786",
      marginBottom: "8px",
    },
  },
  heading: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "23px",
    color: "#FFFFFF",
  },

  tabWrap: {},

  tabHeading: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
    background: "#1D1D23",
    boxShadow: "inset 0px 2px 8px rgba(0, 0, 0, 0.12)",
    borderRadius: "12px",
  },
}));
