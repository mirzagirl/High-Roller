import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  casinoWrap: {
    padding: "40px 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 15px",
    },
  },
  casinoCard: {},
  imageHover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: theme?.palette?.background?.hoverBg,
    borderTop: theme?.palette?.background?.gameTopBorder,
    top: "0",
    left: "0",
  },
  "& playBtn": {
    width: "50px",
    objectFit: "contain",
    margin: "0 auto",
  },
  casinoBanner: {
    height: "380px",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  casinoCardRightCard: {
    borderRadius: "10px",
    overflow: "hidden",
    height: "340px",
    marginBottom: "20px",
    "& img": {
      width: "100%",
      height: "100%",
      ObjectFit: "cover",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
}));
