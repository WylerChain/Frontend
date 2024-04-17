import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  Hero,
  Intro,
  Benefits,
  Technology,
  Workout,
  Involved,
  Community,
  Team,
  Partner,
  Tokenomics,
} from "@/features/home";
export default function Home() {
  return (
    <>
      <Box sx={{ marginTop: "94px" }}>
        <Hero />
        <Box
          sx={{
            maxWidth: "1124px",
            margin: "auto",
          }}
        >
          <Intro />
          <Benefits />
        </Box>
        <Box sx={{ maxWidth: "1124px", margin: "auto" }}>
          <Box mt={"150px"}>
            <Involved />
          </Box>
          <Technology />
          <Workout />
          <Community />
          <Team />
          <Partner />
          <Tokenomics />
        </Box>
      </Box>
    </>
  );
}
