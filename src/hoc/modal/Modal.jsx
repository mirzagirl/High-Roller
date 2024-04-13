import React from "react";

import { Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import clsx from "clsx";

import useStyles from "./Modal.styles";

export default function Modal(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isShowing, hide, content, maxWidth, className } = props;

  function getContent() {
    if (typeof content === "function") {
      return content();
    }

    return content;
  }

  if (!isShowing) {
    return null;
  }

  const modalContent = getContent();

  return (
    <Dialog
      fullScreen={fullScreen}
      onClose={(event, reason) => {
        if (reason === "backdropClick") return;
        hide();
      }}
      aria-labelledby="customized-dialog-title"
      open={isShowing}
      maxWidth={maxWidth}
      fullWidth={maxWidth ? true : false}
      className={clsx(className, [classes.dialogBox])}
    >
      {modalContent}
    </Dialog>
  );
}
