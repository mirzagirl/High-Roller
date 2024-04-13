import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  casinoCard: {
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderTop: "2px solid #2F3446",
      borderRadius: "12px",
    },
    "& .MuiTypography-body1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        maxWidth: "120px",
      },
    },
    "& a": {
      display: "inline-block",
      width: "100%",
    },
  },

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
}));
