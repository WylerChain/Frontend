import React, { FC } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { menudata } from "@/utils/contents";
import { menuType } from "@/types";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
export type LinksProps = {};

export const Links: React.FC<LinksProps> = ({}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "poppins",
          fontWeight: 600,
          fontSize: "12px",
        }}
      >
        QUICK LINKS
      </Typography>
      <List
        sx={{
          "&  li": {
            padding: "4px 8px!important",
          },
          "& a": {
            textDecoration: "none",
            fontSize: FONTSIZE.xs,
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
