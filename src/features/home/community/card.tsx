"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/";

import { COLORS } from "@/utils/colors";
import { CommunityType } from "@/types";

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

export type CommunityCardProps = CommunityType;

export const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  desc,
  img,
}) => {
  const classes = useStyles();
  return (
    <Grid>
      <Box pt={"20px"} pb={"20px"} mb={"38px"}>
        <Image
          src={img}
          width={544}
          height={402}
          alt="be"
          layout="responsive"
          sizes="(max-width: 768px) 100% 100%"
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: COLORS.black,
          borderBottom: "1px solid #E6E8EC",
        }}
        pb={"20px"}
      >
        {title}
      </Typography>
      <Box sx={{ color: COLORS.grey }} mt={"16px"}>
        {desc.split("\n").map((item, i) => {
          return (
            <Typography variant="h4" key={i} className={classes.typography}>
              {item}
            </Typography>
          );
        })}
      </Box>
    </Grid>
  );
};
