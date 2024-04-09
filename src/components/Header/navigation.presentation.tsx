import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { TFunction } from "i18next";
import { common } from "@mui/material/colors";

interface navItemData {
  title: string;
  link: string;
}
export const Nav = (): JSX.Element => {
  const navItems: navItemData[] = [
    { title: "Network", link: "/network" },
    { title: "Staking", link: "/staking" },
    { title: "Developer", link: "/developer" },
    { title: "Community", link: "/community" },
    { title: "Whitepaper", link: "/whitepaper" },
  ];
  return (
    <Box
      component="nav"
      aria-label="My site"
      className=" text-primary"
      sx={{ display: { xs: "grid", md: "flex" }, gap: "16px" }}
    >
      {navItems.map(({ title, link }, index) => (
        <Typography key={index}>
          <Link href={`/${link}`} key={index} className="font-Poppins text-lg">
            {title}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};
