"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/";
import { COLORS } from "@/utils/colors";
import { technologyType } from "@/types";

const useStyles = makeStyles((theme) => ({
  typography: {
    lineHeight: "24px",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      display: "inline",
    },
  },
}));

export type TechnologyCardProps = technologyType;

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  desc,
  img,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      columns={{ sm: 2, xs: 1, md: 8, lg: 12 }}
      my={4}
      columnSpacing={6}
    >
      <Grid item xs={1} sm={2} md={4} lg={6}>
        <Box sx={{ borderBottom: "1px solid #E6E8EC" }}>
          <Typography
            variant="h2"
            sx={{
              lineHeight: "64px",
              color: COLORS.black,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box mt={"32px"}>
          {desc.split("\n").map((item, i) => {
            return (
              <Typography
                variant="h4"
                sx={{ color: COLORS.grey }}
                key={i}
                className={classes.typography}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Grid>
      <Grid item xs={1} sm={2} md={4} lg={6} pt={4}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="intro"
          layout="responsive"
          sizes="(max-width: 768px) 100% 100%"
        />
      </Grid>
    </Grid>
  );
};
