"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";

export type ParagraphProps = {
  desc: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ desc }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // gap: "12px",
      }}
    >
      <Box
        sx={{
          lineHeight: "27px",
          "& p": {
            fontSize: FONTSIZE.sm,
            color: COLORS.grey,
            fontFamily: "poppins",
          },
        }}
        mt={"32px"}
      >
        {desc.split("\n").map((item, i) => {
          return (
            <Typography variant="h4" sx={{ color: COLORS.grey }} key={i}>
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
