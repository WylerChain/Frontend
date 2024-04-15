"use client";
import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
export type HeroProps = {};

export const Hero: React.FC<HeroProps> = ({}) => {
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
            <Typography variant="subtitle1">
              <span className="block">Unleash the Power of Fiction:</span>
              <span className="block">Introducing Fiction Chain</span>
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
              variant="h4"
              sx={{
                color: "#EFEFEF",
              }}
            >
              <span className="block">
                A next-generation Layer 3 blockchain built for limitless
                innovation
              </span>
              <span className="block">and scalability.</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "block",
                xs: "block",
              },
              columnGap: "16px",
              // "& button": {
              //   padding: "16px 24px",
              // },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: {
                  md: "250px",
                  sm: "100%",
                  xs: "100%",
                },
                position: "inherit",
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "600",
                padding: "16px 34px",
                "&:hover": {
                  backgroundColor: "#fff",
                },
                marginTop: "10px",
              }}
            >
              Learn more
            </Button>
            <Button
              variant="outlined"
              disableElevation
              sx={{
                width: {
                  sm: "100%",
                  xs: "100%",
                },
                position: "inherit",
                background: "transparent",
                borderRadius: "90px",
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                },
                marginTop: "10px",
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
