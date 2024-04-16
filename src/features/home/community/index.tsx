"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { communityData } from "@/utils/contents";
import { COLORS } from "@/utils/colors";
import { CommunityCard } from "./card";
export type CommunityProps = {};

export const Community: React.FC<CommunityProps> = ({}) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "50px 10px 0 10px",
          sm: "0px 10px",
          md: "0px 10px",
          lg: "62px 10px",
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: { md: "center", xs: "left" },
          color: COLORS.black,
        }}
        pb={"32px"}
      >
        Community:
      </Typography>
      <Box>
        <Grid container columns={{ lg: 12, md: 8, sm: 1 }} spacing={3}>
          {communityData.map((item, i) => {
            return (
              <Grid item sm={1} md={4} lg={6} key={i}>
                <CommunityCard
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
