"use client";
import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "@/components/header/Logo";
import { Nav } from "@/components/header/Nav";
import { Social } from "@/components/header/Social";
import { ToggleNav } from "./Nav/toggleNav";
import { COLORS } from "@/utils/colors";
export const Header = () => {
  const [isOpenToggleMenu, setIsOpenToggleMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenToggleMenu(!isOpenToggleMenu);
  };
  return (
    <Box
      sx={{ width: { lg: 1124, sm: 600 }, height: 94 }}
      m={{ lg: "auto" }}
      pt={"23px"}
      pb={"23px"}
    >
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Logo />
            <Nav />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Social />
            <Button
              variant="contained"
              disableElevation
              href=""
              sx={{
                backgroundColor: COLORS.green,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: COLORS.green,
                },
                color: "#fff",
                padding: "16px 24px",
                borderRadius: "90px",
                fontSize: "16px",
                fontFamily: "poppins",
                lineHeight: "16px",
              }}
            >
              Learn more
            </Button>

            <Button
              sx={{
                borderRadius: 0,
                float: "left",
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                },
              }}
              onClick={toggleMenu}
            >
              <MenuIcon sx={{ color: COLORS.grey }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* <ToggleNav toggle={isOpenToggleMenu} /> */}
    </Box>
  );
};
