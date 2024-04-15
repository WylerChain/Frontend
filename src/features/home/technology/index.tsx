import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { TechnologyCard } from "./card";
import { technologies } from "@/utils/contents";
export type TechnologyProps = {};

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <Box
      my={"180px"}
      sx={{
        padding: {
          xs: "0px 10px",
          sm: "0px 10px",
          md: "0px 10px",
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          display: "block",
          marginBottom: "84px",
          color: COLORS.black,
        }}
      >
        Technology
      </Typography>
      {technologies.map((item, i) => {
        return (
          <TechnologyCard
            title={item.title}
            desc={item.desc}
            img={item.img}
            key={i}
          />
        );
      })}
    </Box>
  );
};
