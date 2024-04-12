import React, { FC } from "react";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { involvedData } from "@/utils/contents";
import { InvolvedSection } from "./section";

export type InvolvedProps = {};

export const Involved: React.FC<InvolvedProps> = ({}) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: COLORS.green,
        color: "#fff",
      }}
      p={"48px"}
      gap={"24px"}
    >
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontSize: FONTSIZE.xl,
          textAlign: "center",
        }}
      >
        Get Involved
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {involvedData.map((item, i) => {
          return (
            <InvolvedSection
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
