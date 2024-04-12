"use client";
import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export type HeroProps = {};

export const Hero: React.FC<HeroProps> = ({}) => {
  const theme = createTheme();
  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "50%",
          color: "#fff",
          width: "100vw",
          padding: "90px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "294px",
            gap: "32px",
          }}
        >
          <Box
            sx={{
              lineHeight: "64px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: "block",
                fontSize: "64px",
                fontFamily: "Bricolage Grotesque",
              }}
            >
              Unleash the Power of Fiction:
            </Typography>

            <Typography
              variant="h3"
              sx={{
                display: "block",
                fontSize: "64px",
                fontFamily: "Bricolage Grotesque",
              }}
            >
              Introducing Fiction Chain
            </Typography>
          </Box>
          <Box
            sx={{
              lineHeight: "27px",
              textAlign: "center",
              color: "#EFEFEF",
            }}
            mt={""}
          >
            <Typography
              variant="h3"
              sx={{
                display: "block",
                fontSize: "16px",
                color: "#EFEFEF",
                fontFamily: "poppins",
              }}
            >
              A next-generation Layer 3 blockchain built for limitless
              innovation
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "block",
                fontSize: "16px",
                lineHeight: "27px",
                color: "#EFEFEF",
              }}
            >
              and scalability.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "16px",
              "& button": {
                padding: "16px 24px",
                fontFamily: "poppins",
              },
              fontFamily: "poppins",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "90px",
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              Learn more
            </Button>
            <Button
              variant="outlined"
              disableElevation
              sx={{
                background: "transparent",
                borderRadius: "90px",
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                },
              }}
            >
              Explore Applications
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
