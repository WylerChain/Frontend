/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { workouts } from "@/utils/contents";
import { Paragraph } from "./paragraph";
import { motion } from "framer-motion";
import { responsiveText } from "./style.css";

import {
  fadeIn,
  slideIn,
  getSectionAnimation,
  projectVariants,
} from "@/styles/animations";
export type WorkoutProps = {};

export const Workout: React.FC<WorkoutProps> = ({}) => {
  return (
    <Grid
      container
      columns={{ sm: 2, xs: 1, md: 8, lg: 12 }}
      columnSpacing={6}
      py={"136px"}
      sx={{
        padding: {
          xs: "0px 10px",
          sm: "0px 10px",
          md: "0px 10px",
          lg: "136px 0px",
        },
      }}
    >
      <Grid item xs={1} sm={2} md={4} lg={6}>
        <motion.div
          className="group"
          variants={slideIn({ delay: 0.6 + 0 / 10, direction: "down" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              display: "block",
              marginBottom: "84px",
              color: COLORS.black,
            }}
          >
            All your workouts,
            <span style={{ display: "block" }}>in your pocket</span>
          </Typography>
        </motion.div>

        <motion.div
          className="group"
          variants={slideIn({ delay: 0.6 + 1 / 10, direction: "down" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{ color: COLORS.grey }}
            className={responsiveText}
          >
            <span style={{ color: COLORS.black, fontWeight: 600 }}>
              Endless Possibilities&nbsp;:&nbsp;
            </span>
            <span style={{ fontWeight: 100, lineHeight: "32px" }}>
              Wyler Chain's versatility
            </span>
            <span
              style={{ fontWeight: 100, display: "block", lineHeight: "32px" }}
            >
              opens doors to a vast array of dApp
            </span>
            <span style={{ fontWeight: 100, lineHeight: "32px" }}>
              {" "}
              applications. Imagine a future powered by:
            </span>
          </Typography>
        </motion.div>
        {workouts.map((item, i) => {
          return (
            <Box key={i}>
              <motion.div
                className="group"
                variants={slideIn({ delay: 0.6 + i / 10, direction: "down" })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Paragraph desc={item}></Paragraph>
              </motion.div>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={1} sm={2} md={4} lg={6} sx={{ marginTop: "20px" }} pt={4}>
        <motion.div
          className="group"
          variants={slideIn({ delay: 0.6 + 3 / 10, direction: "down" })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src={"/workout.svg"}
            width={540}
            height={598}
            alt="workout"
            layout="responsive"
            sizes="(max-width: 768px) 100% 100%"
          />
        </motion.div>
      </Grid>
    </Grid>
  );
};
