import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { TechnologyCard } from "./card";
import { technologyType } from "@/types";
import { technologies } from "@/utils/contents";
export type TechnologyProps = {};

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <Box mt={"180px"}>
      <Typography
        sx={{
          display: "block",
          fontSize: "64px",
          fontWeight: "600",
          fontFamily: "Bricolage Grotesque",
          lineHeight: "64px",
          marginBottom: "84px",
        }}
      >
        Technology
      </Typography>
      <Box>
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
    </Box>
  );
};
