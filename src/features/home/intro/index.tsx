"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";

export type IntroProps = {};

export const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "50px 10px",
          sm: "50px 10px",
          md: "134px 10px",
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
            <Typography variant="subtitle1">What is Wyler</Typography>
            <Typography variant="subtitle1">Chain</Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="body1">
              Wyler Chain is a revolutionary Layer 3 blockchain network
            </Typography>
            <Typography variant="body1">
              designed to propel the future of decentralized applications
            </Typography>
            <Typography variant="body1">
              (dApps). By building on top of established Layer 1 and Layer 2
            </Typography>
            <Typography variant="body1">
              solutions, Wyler Chain overcomes scalability limitations and
              offers
            </Typography>
            <Typography variant="body1">
              enhanced security for a robust foundation. Leveraging the power
            </Typography>
            <Typography variant="body1">
              of Polkadot and Substrate, Wyler Chain unlocks a world of
            </Typography>
            <Typography variant="body1">
              interoperability and customization, empowering developers to
            </Typography>
            <Typography variant="body1">craft groundbreaking dApps.</Typography>
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
