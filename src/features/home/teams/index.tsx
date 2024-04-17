"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { COLORS } from "@/utils/colors";
import { teamData } from "@/utils/contents";
import { MemberCard } from "./card";
import { motion } from "framer-motion";
import { slideIn, getSectionAnimation } from "@/styles/animations";

export type BenefitProps = {};

export const Team: React.FC<BenefitProps> = ({}) => {
  return (
    <Box
      id="team"
      sx={{
        backgroundColor: "#FCFCFD",
        padding: {
          xs: "0 10px",
          sm: "0 10px",
          md: "0 10px",
        },
      }}
    >
      <motion.div {...getSectionAnimation}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: { md: "center", xs: "left" }, color: COLORS.black }}
          my={5}
        >
          Meet the team
        </Typography>
        <Grid
          container
          columns={{ xs: 1, sm: 4, md: 12, lg: 12 }}
          spacing={3}
          sx={{ marginTop: "32px" }}
        >
          {teamData.map((item, i) => {
            return (
              <Grid item key={i} lg={4} md={4} sm={2} xs={1}>
                <MemberCard {...item} />
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
};
