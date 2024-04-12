"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { CommunityType } from "@/types";
export type CommunityCardProps = CommunityType;

export const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <Box>
      <Box pt={"20px"} pb={"20px"} mb={"38px"}>
        <Image src={img} width={544} height={402} alt="be" />
      </Box>
      <Typography
        sx={{
          color: COLORS.dark,
          fontSize: FONTSIZE.lg,
          fontWeight: 600,
          lineHeight: "24px",
          fontFamily: "poppins",
          borderBottom: "1px solid #E6E8EC",
        }}
        pb={"20px"}
      >
        {title}
      </Typography>
      <Box sx={{ color: COLORS.grey, fontFamily: "poppins" }} mt={"16px"}>
        {desc.split("\n").map((item, i) => {
          return (
            <Typography
              key={i}
              style={{
                lineHeight: "24px",
                fontFamily: "poppins",
                fontSize: FONTSIZE.sm,
              }}
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
