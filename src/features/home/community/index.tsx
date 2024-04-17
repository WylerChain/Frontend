"use client";
import React, { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { communityData } from "@/utils/contents";
import { COLORS } from "@/utils/colors";
import { CommunityCard } from "./card";
import { motion } from "framer-motion";
import { slideIn } from "@/styles/animations";
export type CommunityProps = {};

export const Community: React.FC<CommunityProps> = ({}) => {
  return (
    <Box
      id="community"
      sx={{
        padding: {
          xs: "50px 10px 0 10px",
          sm: "0px 10px",
          md: "0px 10px",
          lg: "62px 10px",
        },
      }}
    >
      <motion.div
        className="group"
        variants={slideIn({ delay: 0.6 + 0 / 10, direction: "down" })}
        initial="hidden"
        whileInView="show"
      >
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: { md: "center", xs: "left" },
            color: COLORS.black,
          }}
          pb={"32px"}
        >
          Community:
        </Typography>
      </motion.div>
      <Box>
        <Grid container columns={{ lg: 12, md: 8, sm: 1 }} spacing={3}>
          {communityData.map((item, i) => {
            return (
              <Grid item sm={1} md={4} lg={6} key={i}>
                <motion.div
                  className="group"
                  variants={slideIn({ delay: 0.6 + i / 10, direction: "down" })}
                  initial="hidden"
                  whileInView="show"
                >
                  <CommunityCard
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
    </Box>
  );
};
