import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";

export type ParagraphProps = {
  desc: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ desc }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
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
            // eslint-disable-next-line react/jsx-key
            <Box sx={{ display: "flex" }}>
              <Box>{i == 0 && <CheckIcon sx={{ color: COLORS.green }} />}</Box>{" "}
              <Box>
                <Typography key={i}>{item}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
