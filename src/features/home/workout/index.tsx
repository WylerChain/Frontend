import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { workouts } from "@/utils/contents";
import { Paragraph } from "./paragraph";
export type WorkoutProps = {};

export const Workout: React.FC<WorkoutProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "128px",
        paddingBottom: "88px",
        gap: "32px",
      }}
    >
      <Box>
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
          All your workouts,
          <span style={{ display: "block" }}>in your pocket</span>
        </Typography>
        <Box
          sx={{
            "& p": {
              fontFamily: "poppins",
              fontSize: FONTSIZE.lg,
              color: COLORS.grey,
              display: "block",
            },
          }}
        >
          <Typography>
            <b style={{ color: COLORS.dark }}>Endless Possibilities:</b> Wyler
            Chain's versatility
          </Typography>
          <Typography>opens doors to a vast array of dApp </Typography>
          <Typography>applications. Imagine a future powered by:</Typography>
        </Box>
        <Box>
          {workouts.map((item, i) => {
            return <Paragraph desc={item} key={i}></Paragraph>;
          })}
        </Box>
      </Box>
      <Box>
        <Image src={"/workout.svg"} width={540} height={598} alt="intro" />
      </Box>
    </Box>
  );
};
