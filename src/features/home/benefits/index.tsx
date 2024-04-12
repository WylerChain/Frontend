"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { benefits } from "@/utils/contents";
import { BenefitCard } from "./card";
export type BenefitProps = {};

export const Benefits: React.FC<BenefitProps> = ({}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontSize: FONTSIZE.xl,
          textAlign: "center",
        }}
        pb={"32px"}
      >
        Benefits of Wyler Chain
      </Typography>
      <Box>
        <Grid container columns={4} gap={"32px"}>
          {benefits.map((item, i) => {
            if (i > 3) {
              return;
            }
            return (
              <>
                <BenefitCard title={item.title} desc={item.desc} key={i} />
              </>
            );
          })}
        </Grid>
        <Grid
          container
          columns={4}
          sx={{ width: "832px", marginLeft: "auto", marginRight: "auto" }}
          gap={"32px"}
        >
          {benefits.map((item, i) => {
            if (i < 4) {
              return;
            }
            return (
              <>
                <BenefitCard title={item.title} desc={item.desc} key={i} />
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
