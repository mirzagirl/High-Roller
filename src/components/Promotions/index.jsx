import React, { useEffect } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { getPromotionsStart } from "../../redux-saga/redux/promotions";
import useStyles from "./Promotion.style";

const Promotions = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { promotions } = useSelector((state) => state.promotions);
  useEffect(() => {
    dispatch(getPromotionsStart());
  }, [dispatch]);

  return (
    <div className={classes.promotionWrap}>
      <Grid container spacing={2}>
        {promotions?.map((item, index) => (
          <Grid item xs={12} md={6} key={item.id}>
            <div className={classes.promotionBg} key={item.id}>
              <Grid className={classes.promotionImg}>
                <img src={item?.images} alt={item.description} />
              </Grid>
              <Grid className={classes.promotionOverlayText}>
                <Typography>
                  {item.name?.charAt(0)?.toUpperCase() + item?.name?.slice(1)}
                </Typography>
              </Grid>
              <Accordion className={classes.promotionAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.promotionAccordionSummary}
                >
                  <Typography>Read More</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.promotionAccordionDetail}>
                  <Typography>{item?.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Promotions;
