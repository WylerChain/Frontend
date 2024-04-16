import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Logo } from "@/components/footer/Logo";
import { Links } from "@/components/footer/Links";
import { Newsletter } from "@/components/footer/Newsletter";
import { Copyright } from "@/components/footer/Copyright";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      sx={{
        padding: {
          sm: "50px 10px 0  10px",
          xs: "50px 10px 0 10px",
        },
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid #E6E8EC",
        }}
        mt={"150px"}
      >
        <Box
          sx={{
            maxWidth: "1124px",
            margin: "auto",
          }}
        >
          <Box pt={"48px"} pb={"30px"}>
            <Grid
              container
              columns={{ lg: 12, md: 12, sm: 2, xs: 2 }}
              // justifyContent="center"
            >
              <Grid item xs={1} sm={1} md={4} lg={4}>
                <Logo />
              </Grid>
              <Grid item xs={1} sm={1} md={8} lg={8}>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      md: "flex",
                    },
                    justifyContent: "space-between",
                  }}
                >
                  <Links />
                  <Newsletter />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderTop: "1px solid #E6E8EC" }}>
        <Box
          sx={{ maxWidth: "1124px", margin: "auto" }}
          pt={"20px"}
          pb={"20px"}
        >
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
};
