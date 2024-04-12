import React, { FC } from "react";
import { Box } from "@mui/material";
import { Logo } from "@/components/footer/Logo";
import { Links } from "@/components/footer/Links";
import { Newsletter } from "@/components/footer/Newsletter";
import { Copyright } from "@/components/footer/Copyright";
import { Social } from "@/components/footer/Social";
import { display } from "@mui/system";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box pt={"48px"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <Links />
        <Newsletter />
        {/* <Social /> */}
      </Box>
    </Box>
  );
};
