import { Box, CircularProgress } from "@mui/material";

// TODO: デザイン指定がないので仮で作成
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
