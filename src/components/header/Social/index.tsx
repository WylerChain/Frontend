import React, { FC } from "react";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
export type SocialProps = {};

export const Social: React.FC<SocialProps> = ({}) => {
  return (
    <Box
      sx={{ display: "flex", columnGap: { lg: "24px", md: "5px" } }}
      pt={"8px"}
    >
      <IconButton aria-label="facebook">
        <Image src="/facebook.svg" width={20} height={20} alt="facebook" />
      </IconButton>
      <IconButton aria-label="twitter">
        {/* <Twitter /> */}
        <Image src="/twitter.svg" width={20} height={20} alt="twitter" />
      </IconButton>
      <IconButton aria-label="instragram">
        {/* <Instagram /> */}
        <Image src="/instagram.svg" width={20} height={20} alt="instagram" />
      </IconButton>
    </Box>
  );
};
