import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { technologyType } from "@/types";

export type TechnologyCardProps = technologyType;

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <Box>
        <Box sx={{ borderBottom: "1px solid #E6E8EC" }}>
          <Typography
            sx={{
              display: "block",
              fontSize: FONTSIZE.lg,
              fontWeight: "600",
              fontFamily: "Bricolage Grotesque",
              lineHeight: "64px",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{ fontFamily: "poppins", fontSize: "16px", lineHeight: "27px" }}
          mt={"32px"}
        >
          {desc.split("\n").map((item, i) => {
            return (
              <Typography
                sx={{ fontFamily: "poppins", color: COLORS.grey }}
                key={i}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Image src={img} width={500} height={500} alt="intro" />
      </Box>
    </Box>
  );
};
