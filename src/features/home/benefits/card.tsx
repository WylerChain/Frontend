"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { benefitsType } from "@/types";
export type BenefitCardProps = benefitsType;

export const BenefitCard: React.FC<BenefitCardProps> = ({ title, desc }) => {
  return (
    <Box>
      <Box
        sx={{ borderBottom: `1px solid #E6E8EC` }}
        pt={"20px"}
        pb={"20px"}
        mb={"38px"}
      >
        <Image src="/benefit-icon.svg" width={40} height={40} alt="be" />
      </Box>
      {title.split("\n").map((item, i) => {
        return (
          <Typography
            sx={{
              color: COLORS.dark,
              fontSize: FONTSIZE.md,
              fontWeight: 600,
              lineHeight: "24px",
            }}
            key={i}
          >
            {item}
          </Typography>
        );
      })}
      <Box sx={{ color: COLORS.grey, fontFamily: "poppins" }} mt={"16px"}>
        {desc.map((item, i) => {
          return (
            <Typography
              key={i}
              style={{
                lineHeight: "24px",
                fontFamily: "poppins",
                fontSize: FONTSIZE.xs,
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
