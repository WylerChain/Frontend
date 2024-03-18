import { Box, CircularProgress } from "@mui/material";

// TODO: Since there is no design specification, I created it temporarily.
export const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "400px", height: "100px", mt: "20px" }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};
