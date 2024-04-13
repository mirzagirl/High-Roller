import React from "react";

import parse from "html-react-parser";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useStyles from "./Cms.styles";

const Cms = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const { cmsData } = useSelector((state) => state.cms);
  const mappedData = cmsData?.find((data) => data.slug === slug);

  return (
    <>
      <Grid className={classes.statciCard}>
        <h1 className={classes.innerPageHeading}>
          {mappedData?.title?.charAt(0)?.toUpperCase() +
            mappedData?.title?.slice(1)}
        </h1>
        <p className={classes.textWrap}>
          {mappedData && parse(mappedData?.content)}
        </p>
      </Grid>
    </>
  );
};

export default Cms;
