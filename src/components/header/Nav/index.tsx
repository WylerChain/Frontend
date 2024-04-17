import React, { FC } from "react";
import { Box, List, ListItem, Link } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { menudata } from "@/utils/contents";
export type NavProps = {};

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Box>
      <List
        sx={{
          display: {
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none",
          },
          paddingLeft: "23px",
          paddingTop: "12px",
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
