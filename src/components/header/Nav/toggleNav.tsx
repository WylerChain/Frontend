"use client";
import React, { FC } from "react";
import { Box, List, ListItem, Link, Button } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { menudata } from "@/utils/contents";
export type NavProps = {
  show: boolean;
};

export const ToggleNav: React.FC<NavProps> = ({ show }) => {
  return (
    <Box
      className="test-box"
      sx={{
        marginTop: "14px",
        overflow: "hidden auto",

        display: {
          lg: "none",
          md: "none",
          xs: show ? "block" : "none",
          sm: show ? "block" : "none",
        },
        top: "80px",
        width: "100%",
        height: "100vh",
        backgroundColor: COLORS.white,
      }}
    >
      <List
        sx={{
          backgroundColor: COLORS.white,
          paddingLeft: "23px",
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
            <ListItem key={i} sx={{ textAlign: "center", display: "block" }}>
              <Link href={item.url} sx={{ textAlign: "center" }}>
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
