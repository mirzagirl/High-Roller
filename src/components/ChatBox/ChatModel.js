import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Button } from "@material-ui/core";

import ChatBox from "../ChatBox";
import useStyles from "./ChatModel.styles";
import { toggleChatBox } from "../../redux-saga/redux/settings/themeSettings";

const ChatModel = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isChatBoxOpen } = useSelector((state) => state.themeSettings);
  const handleChatBoxModel = () => {
    dispatch(toggleChatBox(!isChatBoxOpen));
  };

  return (
    <>
      <Button type="button" onClick={handleChatBoxModel}>
        <img src="/images/mob-chat-icon.svg" alt="" />
      </Button>
      <Grid className={classes.mobChatPannel}>
        <ChatBox />
      </Grid>
    </>
  );
};

export default ChatModel;
