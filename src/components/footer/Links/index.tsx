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
        variant="h5"
        sx={{
          fontWeight: 600,
          color: COLORS.black90,

          // textAlign: "center",
        }}
      >
        QUICK LINKS
      </Typography>
      <Box
      // sx={{ display: "flex", justifyContent: "center" }}
      >
        <List
          sx={{
            "&  li": {
              padding: "4px 8px!important",
            },
            "& a": {
              textDecoration: "none",
              "&:hover": {
                cursor: "pointer",
              },
            },
          }}
        >
          {menudata.map((item, i) => {
            return (
              <ListItem
                key={i}
                sx={{
                  marginTop: "5px",
                }}
              >
                <Link href={item.url}>
                  <Typography variant="h6" sx={{ color: COLORS.grey }}>
                    {item.title}
                  </Typography>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
