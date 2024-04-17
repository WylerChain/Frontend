"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { teamType } from "@/types";
import { COLORS } from "@/utils/colors";

export type MemberCardProps = teamType;

export const MemberCard: React.FC<MemberCardProps> = ({ title, desc, img }) => {
  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image src={img} width={128} height={128} alt="member" priority />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: COLORS.black,
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h4" mt={"16px"} sx={{ textAlign: "center" }}>
        {desc}
      </Typography>
    </Box>
  );
};
