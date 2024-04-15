import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { Typography, Box, Input, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { FC } from "react";
export type NewsletterProps = {};

export const Newsletter: React.FC<NewsletterProps> = ({}) => {
  return (
    <Box
    // sx={{ width: "256px", marginLeft: "auto", marginRight: "auto" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: COLORS.black,
        }}
      >
        Newsletter
      </Typography>
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: COLORS.black,
            lineHeight: "24px",
          }}
          mt={"12px"}
        >
          <span style={{ display: "block" }}>
            Subscribe our newsletter to get
          </span>
          <span style={{ display: "block" }}>more free design course and</span>
          <span style={{ display: "block" }}>resource.</span>
        </Typography>
        <Box>
          {/* <Input />
        <Button
          sx={{
            backgroundColor: COLORS.green,
            borderRadius: "50%",
            width: "30px",
            height: "55px",
            padding: "5px",
          }}
        >
          <ArrowForwardIcon sx={{ color: "#fff", fontSize: "15px" }} />
        </Button> */}
        </Box>
      </Box>
    </Box>
  );
};
