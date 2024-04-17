"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Grid, Box, Typography } from "@mui/material";
import { responsiveParagraph } from "./style.css";

import { COLORS } from "@/utils/colors";
import { communityType } from "@/types";

export type CommunityCardProps = communityType;

export const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <Grid>
      <Box pt={"20px"} pb={"20px"} mb={"38px"}>
        <Image
          src={img}
          width={544}
          height={402}
          alt="be"
          layout="responsive"
          sizes="(max-width: 768px) 100% 100%"
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: COLORS.black,
          borderBottom: "1px solid #E6E8EC",
        }}
        pb={"20px"}
      >
        {title}
      </Typography>
      <Box sx={{ color: COLORS.grey }} mt={"16px"}>
        {desc.split("\n").map((item, i) => {
          return (
            <Typography variant="h4" key={i} className={responsiveParagraph}>
              {item}
            </Typography>
          );
        })}
      </Box>
    </Grid>
  );
};
