import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  headingStyle: {},
  textWrap: {
    "& p": {
      color: theme?.palette?.text?.btntextcolor,
      "& a": {
        color: theme?.palette?.text?.btntextcolor,
      },
      "& li": {
        color: theme?.palette?.text?.btntextcolor,
      },
    },
    "& li": {
      color: theme?.palette?.text?.btntextcolor,
    },
    "& h1": {
      color: "#ffffff",
    },
  },
  statciCard: {
    background: theme.palette.background?.sidebar,
    borderRadius: "20px",
    padding: "30px",
    margin: "20px 0",
    minHeight: "550px",
    marginTop: "100px",
    "& p": {
      wordBreak: "break-word",
    },
  },
  innerPageHeading: {
    marginBottom: "20px",
    fontSize: "40px",
    color: theme?.palette?.text?.btntextcolor,
    paddingBottom: "20px",
  },
}));
