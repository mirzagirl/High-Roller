import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  verifyEmail: {
    width: "100%",
    margin: "50px 0 50px",
    "& .MuiTypography-root": {
      textAlign: "center",
    },
  },
  content: {
    maxWidth: "320px",
    margin: "0 auto",
  },
  verifyEmailWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  verifyEmailContainer: {
    background: "#440073",
    borderRadius: "10px",
    marginTop: "10px",
    padding: "20px 40px",
  },
}));
