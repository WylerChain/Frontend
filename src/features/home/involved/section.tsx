"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/";
import { COLORS } from "@/utils/colors";
import { involvedType } from "@/types";

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

export type InvolvedSectionProps = involvedType;

export const InvolvedSection: React.FC<InvolvedSectionProps> = ({
  title,
  desc,
  img,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Box pt={"20px"} pb={"20px"} mb={"28px"}>
        <Image src={img} width={48} height={48} alt="be" />
      </Box>
      {title.split("\n").map((item, i) => {
        return (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
            className={classes.typography}
            key={i}
          >
            {item}
          </Typography>
        );
      })}
      <Box sx={{}} mt={"16px"}>
        {desc.split("\n").map((item, i) => {
          return (
            <Typography
              variant="body1"
              key={i}
              style={{
                color: COLORS.white80,
              }}
              className={classes.typography}
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
