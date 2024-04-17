"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { TechnologyCard } from "./card";
import { technologies } from "@/utils/contents";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  getSectionAnimation,
  projectVariants,
} from "@/styles/animations";
export type TechnologyProps = {};

export const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <Box
      id="technology"
      my={"180px"}
      sx={{
        padding: {
          xs: "0px 10px",
          sm: "0px 10px",
          md: "0px 10px",
        },
      }}
    >
      <motion.section {...getSectionAnimation} viewport={{ once: true }}>
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
            <motion.div
              className="group"
              variants={slideIn({
                delay: 0.8 + i / 10,
                direction: "down",
              })}
              initial="hidden"
              whileInView="show"
              key={i}
              viewport={{ once: true }}
            >
              <TechnologyCard
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            </motion.div>
          );
        })}
      </motion.section>
    </Box>
  );
};
