import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  dialogBox: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
      paddingLeft: "10px !important",
      paddingRight: "10px !important",
      backdropFilter: "blur(2px)",
    },
    "& .MuiDialog-paperWidthsm": {
      minWidth: "100%",
    },
    "& .MuiPaper-rounded": {
      maxWidth: "100%",
      backgroundColor: "inherit",
      backgroundImage: "inherit",
    },
    "& .MuiPaper-root": {
      backgroundColor: "inherit",
      backgroundImage: "inherit",
      boxShadow: "inherit",
    },
    "& .MuiDialogContent-root": {
      overflowX: "hidden",
      padding: "0px",
    },
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
