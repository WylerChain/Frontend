import { Box, Grid, Button } from "@mui/material";
import { Logo } from "@/components/header/Logo";
import { Nav } from "@/components/header/Nav";
import { Social } from "@/components/header/Social";
import { COLORS } from "@/utils/colors";
export const Header = () => {
  return (
    <Box
      sx={{ width: { lg: 1124, sm: 600 }, height: 94 }}
      m={{ lg: "auto" }}
      pt={"23px"}
      pb={"23px"}
    >
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Logo />
            <Nav />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Social />
            <Button
              variant="contained"
              disableElevation
              href=""
              sx={{
                backgroundColor: COLORS.green,
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: COLORS.green,
                },
                color: "#fff",
                padding: "16px 24px",
                borderRadius: "90px",
                fontSize: "16px",
                fontFamily: "poppins",
                lineHeight: "16px",
              }}
            >
              Learn more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
