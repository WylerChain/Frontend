"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { FONTSIZE } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { involvedType } from "@/types";
export type InvolvedSectionProps = involvedType;

export const InvolvedSection: React.FC<InvolvedSectionProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <Box>
      <Box pt={"20px"} pb={"20px"} mb={"28px"}>
        <Image src={img} width={48} height={48} alt="be" />
      </Box>
      {title.split("\n").map((item, i) => {
        return (
          <Typography
            sx={{
              fontSize: FONTSIZE.md,
              fontWeight: 600,
            }}
            key={i}
          >
            {item}
          </Typography>
        );
      })}
      <Box
        sx={{
          fontFamily: "poppins",
          "& p": {
            lineHeight: "24px",
            fontFamily: "poppins",
            fontSize: FONTSIZE.xs,
            color: "#fff",
          },
        }}
        mt={"16px"}
      >
        {desc.split("\n").map((item, i) => {
          return (
            <Typography
              key={i}
              style={{
                color: "#fff",
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
