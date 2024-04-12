import React, { FC } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/colors";
export type IntroProps = {};

export const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "128px",
        paddingBottom: "128px",
        gap: "32px",
      }}
    >
      <Box>
        <Box sx={{}}>
          <Typography
            sx={{
              display: "block",
              fontSize: "64px",
              fontWeight: "600",
              fontFamily: "Bricolage Grotesque",
              lineHeight: "64px",
            }}
          >
            What is Wyler
          </Typography>
          <Typography
            sx={{
              display: "block",
              fontSize: "64px",
              fontWeight: "600",
              fontFamily: "Bricolage Grotesque",
              lineHeight: "64px",
            }}
          >
            Chain
          </Typography>
        </Box>
        <Box
          sx={{ fontFamily: "poppins", fontSize: "16px", lineHeight: "27px" }}
          mt={"32px"}
        >
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            Wyler Chain is a revolutionary Layer 3 blockchain network
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            designed to propel the future of decentralized applications
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            (dApps). By building on top of established Layer 1 and Layer 2
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            solutions, Wyler Chain overcomes scalability limitations and offers
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            enhanced security for a robust foundation. Leveraging the power
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            of Polkadot and Substrate, Wyler Chain unlocks a world of
          </Typography>

          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            interoperability and customization, empowering developers to
          </Typography>
          <Typography sx={{ fontFamily: "poppins", color: COLORS.grey }}>
            craft groundbreaking dApps.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image src={"/intro-logo.svg"} width={500} height={500} alt="intro" />
      </Box>
    </Box>
  );
};
