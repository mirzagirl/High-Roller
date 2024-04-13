import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Search from "./Search";
import useStyles from "./SearchModalContent.styles";

const SearchComponent = ({ handleSearchBox }) => {
  const classes = useStyles();
  return (
    <div className={classes.mobileBgColor}>
      <Grid className={classes.modal}>
        <Grid className={classes.modalheader}>
          <Typography variant="h6" textAlign="center">
            Search games
          </Typography>

          <Box>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleSearchBox()}
            />
          </Box>
        </Grid>
        <Grid>
          <Search handleSearchBox={handleSearchBox} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchComponent;
