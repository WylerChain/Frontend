import React, { FC } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
export type LogoProps = {};

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        verticalAlign: "middle",
      }}
    >
      <Image src={"/logo.svg"} width={160} height={168} alt="logo" />
    </Box>
  );
};
