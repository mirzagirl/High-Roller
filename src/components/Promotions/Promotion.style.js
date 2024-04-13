import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  promotionWrap: {
    marginTop: "120px",
    marginBottom: "40px",
  },
  promotionCard: {
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  },

  promotionBg: {
    background: theme.palette.background?.sidebar,
    padding: "15px",
    borderRadius: "10px",
  },

  promotionCta: {
    background: "#24242B",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },

  promotionAccordion: {
    background: "transparent",
    "&:before": {
      display: "none",
    },
  },

  promotionImg: {
    height: "200px",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover ",
      aspectRatio: "1",
      objectPosition: "top",
    },
  },
  promotionOverlayText: {
    bottom: "70px",
    left: "20px",
    "& .MuiTypography-body1": {
      fontSize: "20px",
      fontWeight: "500",
      padding: "10px 0",
    },
  },

  btnPrimary: {
    background: theme?.palette?.background?.buttonbackground,
    border: theme?.palette?.background?.toggleBorder,
    boxShadow: theme?.palette?.background?.toggleShadow,
    borderRadius: "12px !important",
    marginRight: "5px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "29px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    "&:hover": {
      background: theme?.palette?.background?.buttonbackground,
    },
  },
  btnSecondary: {
    border: "2px solid rgba(106, 113, 199, 0.84)",
    borderRadius: "12px !important",
    marginRight: "5px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "29px",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  promotionAccordionSummary: {
    border: theme.palette.background?.socialIconBorder,
    background: theme.palette.background?.highlightSocialApp,
    boxShadow: theme.palette.background?.socialIconShadow,
    borderRadius: "12px!important",
    color: theme.palette.text?.default,
    minHeight: "66px !important",
    width: "100% !important",
    "& .MuiAccordionSummary-content": {
      margin: "0 !important",
    },
  },

  promotionAccordionDetail: {
    color: theme.palette.text?.default,
  },
}));
