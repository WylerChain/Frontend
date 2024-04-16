"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { responsiveParagraph } from "./style.css";

import { COLORS } from "@/utils/colors";
import { technologyType } from "@/types";

export type TechnologyCardProps = technologyType;

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <Grid
      container
      columns={{ sm: 2, xs: 1, md: 8, lg: 12 }}
      my={4}
      columnSpacing={6}
    >
      <Grid item xs={1} sm={2} md={4} lg={6}>
        <Box sx={{ borderBottom: "1px solid #E6E8EC" }}>
          <Typography
            variant="h2"
            sx={{
              lineHeight: "64px",
              color: COLORS.black,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box mt={"32px"}>
          {desc.split("\n").map((item, i) => {
            return (
              <Typography
                variant="h4"
                sx={{ color: COLORS.grey }}
                key={i}
                className={responsiveParagraph}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={1} sm={2} md={4} lg={6} pt={4}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="intro"
          sizes="(max-width: 768px) 100% 100%"
        />
      </Grid>
    </Grid>
  );
};
