"use client";
import React, { FC } from "react";
import { Box, List, ListItem, Link, Button, Collapse } from "@mui/material";
import { motion } from "framer-motion";
import { COLORS } from "@/utils/colors";
import { menudata } from "@/utils/contents";
export type NavProps = {
  show: boolean;
  toggle: () => void;
};
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const ToggleNav: React.FC<NavProps> = ({ show, toggle }) => {
  const toggleOpen = () => {
    toggle();
  };
  return (
    <Collapse in={show}>
      <Box
        className="test-box"
        sx={{
          marginTop: "14px",
          overflow: "hidden auto",
          top: "80px",
          width: "100%",
          height: "100vh",
          backgroundColor: COLORS.white,
          borderTop: `1px solid ${COLORS.grey80}`,
        }}
      >
        <List
          sx={{
            backgroundColor: COLORS.white,
            paddingTop: "12px",
            position: "sticky",

            "&  li": {
              padding: "4px 8px!important",
            },
            "& a": {
              textDecoration: "none",
              fontSize: 14,
              fontFamily: "poppins",
              color: COLORS.grey,
              "&:hover": {
                cursor: "pointer",
              },
            },
          }}
        >
          {menudata.map((item, i) => {
            return (
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                style={{ textAlign: "center", display: "block" }}
              >
                <Link
                  href={item.url}
                  sx={{ textAlign: "center" }}
                  onClick={() => {
                    toggleOpen();
                  }}
                >
                  {item.title}
                </Link>
              </motion.li>
            );
          })}
          <ListItem sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              disableElevation
              href=""
              sx={{
                width: "100%",
                backgroundColor: COLORS.grey80,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: COLORS.grey80,
                },
                color: "#000",
                padding: "16px 24px",
                fontSize: "16px",
                fontFamily: "poppins",
                borderRadius: 0,
              }}
            >
              Learn more
            </Button>
          </ListItem>
        </List>
      </Box>
    </Collapse>
  );
};
