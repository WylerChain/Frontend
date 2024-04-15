"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/";

import CheckIcon from "@mui/icons-material/Check";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";

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
export type ParagraphProps = {
  desc: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ desc }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // gap: "12px",
      }}
    >
      <Box
        sx={{
          lineHeight: "27px",
          "& p": {
            fontSize: FONTSIZE.sm,
            color: COLORS.grey,
            fontFamily: "poppins",
          },
        }}
        mt={"32px"}
      >
        {desc.split("\n").map((item, i) => {
          return (
            <Typography
              variant="h4"
              sx={{ color: COLORS.grey }}
              className={classes.typography}
              key={i}
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
