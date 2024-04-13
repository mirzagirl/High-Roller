import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  accordiondetails: {
    overflowY: "scroll",
    backgroundColor: theme?.palette?.background?.default,
    "& .MuiChip-colorPrimary": {
      backgroundColor: theme?.palette?.background?.default,
    },
  },
  chipcontainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    backgroundColor: theme?.palette?.background?.default,
    color: theme?.palette?.text?.color,
    height: "200px",
    "& .MuiChip-root": {
      padding: "0 !important",
    },
  },
}));
