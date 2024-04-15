import React, { FC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
export type LogoProps = {};
import { COLORS } from "@/utils/colors";
export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "inline",
        fontSize: "42px",
        color: `${COLORS.black}`,
        pr: "20px",
        // borderRight: `1px solid ${COLORS.greyLight}`,
        fontFamily: "Bricolage Grotesque",
        fontWeight: 600,
      }}
    >
      <Box sx={{ mt: "10px" }}>
        <Image src="/logo.svg" width={54} height={44} alt="logo" />
      </Box>
    </Box>
  );
};
