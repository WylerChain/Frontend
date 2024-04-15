"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { COLORS } from "@/utils/colors";
import { benefits } from "@/utils/contents";
import { BenefitCard } from "./card";

export type BenefitProps = {};

export const Benefits: React.FC<BenefitProps> = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFD",
        padding: {
          xs: "0 10px",
          sm: "0 10px",
          md: "0 10px",
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ textAlign: { md: "center", xs: "left" }, color: COLORS.black }}
        my={5}
      >
        Benefits of Wyler Chain
      </Typography>
      <Grid container columns={{ xs: 1, sm: 4, md: 12, lg: 12 }} spacing={4}>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <BenefitCard title={benefits[0].title} desc={benefits[0].desc} />
        </Grid>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <BenefitCard title={benefits[1].title} desc={benefits[1].desc} />
        </Grid>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <BenefitCard title={benefits[2].title} desc={benefits[2].desc} />
        </Grid>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <BenefitCard title={benefits[3].title} desc={benefits[3].desc} />
        </Grid>
      </Grid>
      <Grid container columns={{ xs: 1, md: 12, lg: 12 }} spacing={4} mt={4}>
        <Grid item xs={1} md={6} lg={3}>
          <BenefitCard title={benefits[4].title} desc={benefits[4].desc} />
        </Grid>
        <Grid item xs={1} md={6} lg={3}>
          <BenefitCard title={benefits[5].title} desc={benefits[5].desc} />
        </Grid>
        <Grid item xs={1} md={6} lg={3}>
          <BenefitCard title={benefits[6].title} desc={benefits[6].desc} />
        </Grid>
      </Grid>
    </Box>
  );
};
