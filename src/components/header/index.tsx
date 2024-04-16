"use client";
import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
      sx={{
        height: 94,
        position: "fixed",
        width: "100%",
        top: 0,
        backgroundColor: "#fff",
      }}
      p={"23px 0px"}
    >
      <Box sx={{ width: { lg: 1124 } }} m={{ lg: "auto" }}>
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
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                  },
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
                <MenuIcon
                  sx={{
                    color: COLORS.grey,
                    display: {
                      lg: "none",
                      xs: !isOpenToggleMenu ? "block" : "none",
                      sm: !isOpenToggleMenu ? "block" : "none",
                    },
                  }}
                />
                <CloseIcon
                  sx={{
                    color: COLORS.grey,
                    display: {
                      lg: "none",
                      xs: isOpenToggleMenu ? "block" : "none",
                      sm: isOpenToggleMenu ? "block" : "none",
                    },
                  }}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ToggleNav show={isOpenToggleMenu} />
    </Box>
  );
};
