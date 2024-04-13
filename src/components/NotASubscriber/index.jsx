import React from "react";

import { Box, Typography } from "@mui/material";

const NotASubscriber = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"calc(100vh - 66px)"}
    >
      <img
        alt="yo"
        src="/images/server_down.svg"
        width="700px"
        height={"700px"}
      />
      <Typography mt={"-70px"} sx={{ color: "#8b5ef9" }} variant="h4">
        Site is only Available for Subscribers
      </Typography>
    </Box>
  );
};

export default NotASubscriber;
