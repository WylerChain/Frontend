"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/";
import { COLORS } from "@/utils/colors";

export type IntroProps = {};

const useStyles = makeStyles((theme) => ({
  typography: {
    [theme.breakpoints.down("md")]: {
      display: "inline",
    },
  },
}));
export const Intro: React.FC<IntroProps> = ({}) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: {
          md: "134px 0",
          sm: "50px 0",
          xs: "50px 20px",
        },
      }}
    >
      <Grid container columns={{ sm: 2, xs: 1, md: 8, lg: 12 }} spacing={4}>
        <Grid item xs={1} sm={2} md={4} lg={6}>
          <Box
            sx={{
              color: COLORS.black,
            }}
          >
            <Typography variant="subtitle1" className={classes.typography}>
              What is Wyler
            </Typography>
            <Typography variant="subtitle1" className={classes.typography}>
              Chain
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="body1" className={classes.typography}>
              Wyler Chain is a revolutionary Layer 3 blockchain network
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              designed to propel the future of decentralized applications
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              (dApps). By building on top of established Layer 1 and Layer 2
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              solutions, Wyler Chain overcomes scalability limitations and
              offers
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              enhanced security for a robust foundation. Leveraging the power
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              of Polkadot and Substrate, Wyler Chain unlocks a world of
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              interoperability and customization, empowering developers to
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              craft groundbreaking dApps.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} sm={2} md={4} lg={6}>
          <Image
            src={"/intro-logo.svg"}
            width={500}
            height={500}
            alt="intro"
            layout="responsive"
            sizes="(max-width: 768px) 80% 80%"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
