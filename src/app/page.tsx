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
} from "@/features/home";
export default function Home() {
  return (
    <Box>
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
      </Box>
    </Box>
  );
}
