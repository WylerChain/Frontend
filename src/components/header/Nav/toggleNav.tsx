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
          md: show ? "block" : "none",
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
        <ListItem sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            disableElevation
            href=""
            sx={{
              width: "100%",
              display: {
                lg: "none",
                md: "block",
                sm: "block",
                xs: "block",
              },
              backgroundColor: COLORS.green,
              "&:hover": {
                opacity: 0.8,
                backgroundColor: COLORS.green,
              },
              color: "#fff",
              padding: "16px 24px",
              fontSize: "16px",
              fontFamily: "poppins",
            }}
          >
            Learn more
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
