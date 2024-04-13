import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mobChatPannel: {
    position: "fixed",
    left: "0",
    top: "52px",
    zIndex: "9",
    width: "100%",
  },

  mobChatClose: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));
