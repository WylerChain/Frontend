import React, { FC } from "react";
import { Box, List, ListItem, Link, Button } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { menudata } from "@/utils/contents";
export type NavProps = {
  toggle: boolean;
};

export const ToggleNav: React.FC<NavProps> = ({ toggle }) => {
  return (
    <Box
      className="test-box"
      sx={{
        marginTop: "15px",
        overflow: "hidden auto",
        height: "calc(-62px + 100vh)",
        // display: `${toggle == true ? "block" : "none"}`,
        display: {
          lg: "",
          md: "",
          sm: "",
          xs: "",
        },
        position: "fixed",
        top: "80px",
        width: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <List
        sx={{
          backgroundColor: COLORS.white,
          paddingLeft: "23px",
          paddingTop: "12px",
          height: "calc(-62px + 100vh)",
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
            <ListItem key={i}>
              <Link href={item.url}>{item.title}</Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
