import React from "react";

import { Grid, Typography, Button, Card } from "@mui/material";

import useStyles from "./Bonus.styles";

const Bonus = () => {
  const classes = useStyles();

  return (
    <div className={classes.accountRight}>
      <Grid className={classes.myprofileBottom}>
        <Typography variant="h4" gutterBottom>
          ALL BONUSES
        </Typography>
        <br></br>
        <Grid className={classes.myprofileForm}>
          <Grid className={classes.signupFromFname}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-1.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 2 Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>250FS</span>
                      Bonus 100% on a deposit for a casino + 250FS when
                      depositing from 1 000 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-2.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 2 Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>30% + 30FS</span>
                      When depositing from 1000 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-3.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 2 Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>50FS</span>
                      When depositing from 1000 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-4.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 2 Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>20% + 50FS</span>
                      1500 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-5.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 4+ Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>20% + 40FS</span>
                      When depositing from 1500 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.bonusCard}>
                  <img
                    src="/images/bonus-bg-6.png"
                    className="bgImg"
                    alt="Background Card"
                  />
                  <div className="contentBox">
                    <Typography className="topText">
                      Bonus for 4+ Deposit
                    </Typography>
                    <Typography className="middleText">
                      <span>10% + 10FS</span>
                      When depositing from 1500 ₹
                    </Typography>
                    <Button className={classes.btnPrimary}>Redeem Now</Button>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bonus;
