"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { COLORS } from "@/utils/colors";
import { benefits } from "@/utils/contents";
import { BenefitCard } from "./card";
import { motion } from "framer-motion";

import {
  fadeIn,
  slideIn,
  getSectionAnimation,
  projectVariants,
} from "@/styles/animations";
export type BenefitProps = {};

export const Benefits: React.FC<BenefitProps> = ({}) => {
  return (
    <Box
      id="benefits"
      sx={{
        backgroundColor: "#FCFCFD",
        padding: {
          xs: "0 10px",
          sm: "0 10px",
          md: "0 10px",
        },
      }}
    >
      <motion.section {...getSectionAnimation}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: { md: "center", xs: "left" }, color: COLORS.black }}
          my={5}
        >
          Benefits of Wyler Chain
        </Typography>
      </motion.section>

      <Grid container columns={{ xs: 1, sm: 4, md: 12, lg: 12 }} spacing={3}>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 0 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            <BenefitCard title={benefits[0].title} desc={benefits[0].desc} />
          </motion.div>
        </Grid>
        <Grid item xs={1} sm={2} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 1 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            <BenefitCard title={benefits[1].title} desc={benefits[1].desc} />
          </motion.div>
        </Grid>

        <Grid item xs={1} sm={2} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 2 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            <BenefitCard title={benefits[2].title} desc={benefits[2].desc} />
          </motion.div>
        </Grid>

        <Grid item xs={1} sm={2} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 3 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            <BenefitCard title={benefits[3].title} desc={benefits[3].desc} />
          </motion.div>
        </Grid>
      </Grid>
      <Grid container columns={{ xs: 1, md: 12, lg: 12 }} spacing={3} mt={4}>
        <Grid item xs={1} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 0 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            <BenefitCard title={benefits[4].title} desc={benefits[4].desc} />
          </motion.div>
        </Grid>
        <Grid item xs={1} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 1 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            <BenefitCard title={benefits[5].title} desc={benefits[5].desc} />
          </motion.div>{" "}
        </Grid>
        <Grid item xs={1} md={6} lg={3}>
          <motion.div
            className="group"
            variants={slideIn({ delay: 0.6 + 2 / 10, direction: "down" })}
            initial="hidden"
            whileInView="show"
          >
            <BenefitCard title={benefits[6].title} desc={benefits[6].desc} />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};
