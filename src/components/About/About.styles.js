import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  headingStyle: {
    textAlign: "center",
  },
  statciCard: {
    background: "#191A1E",
    borderRadius: "20px",
    padding: "30px",
    margin: "20px 0",
    minHeight: "550px",
    "& p": {
      wordBreak: "break-word",
      textAlign: "center",
    },
  },
  innerPageHeading: {
    borderBottom: "2px solid #7458DC",
    marginBottom: "20px",
    fontSize: "40px",
    color: " #7458DC",
    paddingBottom: "20px",
    textAlign: "center",
  },
}));
