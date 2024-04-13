import React from "react";

import { ListItem, Grid, List, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useStyles from "./ChatBox.styles";

const ChatRules = ({ handleChatRules }) => {
  const classes = useStyles();
  return (
    <div className={classes.chatRuleSection}>
      <div className={classes.closeIconWrap}>
        <Typography variant="h4" gutterBottom>
          Chat Rules
        </Typography>

        <span className={classes.closeIcon}>
          <CloseIcon onClick={handleChatRules} style={{ cursor: "pointer" }} />
        </span>
      </div>
      <Grid className={classes.chatRules}>
        <List>
          <ListItem>
            1. Don&apos;t spam, harass or be offensive to other users. Also,
            avoid using CAPS! No one likes to be screamed at!
          </ListItem>

          <ListItem>
            2. Don&apos;t beg or ask for loans, rains, tips and doubling coins.
          </ListItem>

          <ListItem>
            3. No suspicious behavior that can be seen as potential scams.
          </ListItem>

          <ListItem>
            4. Don&apos;t engage in any forms of advertising/trading/
            selling/buying or offering services.
          </ListItem>

          <ListItem>
            5. Don&apos;t use URL shortener. Always submit the original link.
          </ListItem>
          <ListItem>
            6. Use the designated language chatrooms accordingly.
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};

export default ChatRules;
