"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { communityData } from "@/utils/contents";
import { CommunityCard } from "./card";
export type CommunityProps = {};

export const Community: React.FC<CommunityProps> = ({}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontSize: FONTSIZE.xl,
          textAlign: "center",
          fontWeight: 600,
        }}
        pb={"32px"}
      >
        Community:
      </Typography>
      <Box>
        <Grid container columns={4} gap={"32px"}>
          {communityData.map((item, i) => {
            return (
              <>
                <Grid item key={i}>
                  <CommunityCard
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
