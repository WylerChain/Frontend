import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
export type CopyrightProps = {};

export const Copyright: React.FC<CopyrightProps> = ({}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: FONTSIZE.xs,
          color: COLORS.grey,
        }}
      >
        Copyright © 2021 UI8 LLC. All rights reserved
      </Typography>
    </Box>
  );
};
