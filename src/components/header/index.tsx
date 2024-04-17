"use client";
import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "@/components/header/Logo";
import { Nav } from "@/components/header/Nav";
import { Social } from "@/components/header/Social";
import { ToggleNav } from "./Nav/toggleNav";
import { MenuToggle } from "./Nav/menuToggle";
import { COLORS } from "@/utils/colors";
import { motion, sync, useCycle } from "framer-motion";
import { fadeIn, slideIn } from "@/styles/animations";

export const Header = () => {
  // const toggleMenu = () => {
  //   setIsOpenToggleMenu(!isOpenToggleMenu);
  // };

  const [isOpenToggleMenu, toggleOpen] = useCycle(false, true);
  return (
    <Box
      sx={{
        height: 94,
        position: "fixed",
        width: "100%",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 10,
      }}
      p={"23px 0px"}
    >
      <motion.div
        className="group"
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
      >
        <Box sx={{ width: { lg: 1124 } }} m={{ lg: "auto" }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Box sx={{ display: "flex" }} pl={"10px"} pr={"10px"}>
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
                <motion.nav
                  initial={false}
                  animate={isOpenToggleMenu ? "open" : "closed"}
                >
                  <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
                {/* 
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
              </Button> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <ToggleNav show={isOpenToggleMenu} toggle={toggleOpen} />
      </motion.div>
    </Box>
  );
};
