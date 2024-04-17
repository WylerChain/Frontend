"use client";
import React, { FC } from "react";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { involvedData } from "@/utils/contents";
import { InvolvedSection } from "./section";

import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  getSectionAnimation,
  projectVariants,
} from "@/styles/animations";
export type InvolvedProps = {};

export const Involved: React.FC<InvolvedProps> = ({}) => {
  return (
    <Box
      id="involved"
      sx={{
        padding: {
          xs: "0px 10px",
          sm: "0px 10px",
          md: "0px 10px",
        },
      }}
    >
      <motion.section {...getSectionAnimation}>
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: COLORS.green,
            color: "#fff",
          }}
          p={"48px"}
          gap={2}
        >
          <motion.div
            className="group"
            variants={slideIn({
              delay: 0.8 + 0 / 10,
              direction: "down",
            })}
            initial="hidden"
            whileInView="show"
          >
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: {
                  sm: "left",
                  md: "center",
                },
              }}
            >
              Get Involved
            </Typography>
          </motion.div>
          <Grid container columns={{ md: 8, lg: 12 }}>
            {involvedData.map((item, i) => {
              return (
                <Grid item key={i} lg={4} md={4}>
                  <motion.div
                    className="group"
                    variants={slideIn({
                      delay: 0.8 + i / 10,
                      direction: "down",
                    })}
                    initial="hidden"
                    whileInView="show"
                  >
                    <InvolvedSection
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </motion.section>
    </Box>
  );
};
