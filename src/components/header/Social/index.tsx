import React, { FC } from "react";
import Link from "next/link";
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
        <Link href="">
          <Image src="/facebook.svg" width={20} height={20} alt="facebook" />
        </Link>
      </IconButton>
      <IconButton aria-label="twitter">
        <Link href="https://x.com/wylerchain">
          <Image src="/twitter.svg" width={20} height={20} alt="twitter" />
        </Link>
      </IconButton>
      <IconButton aria-label="instragram">
        {/* <Instagram /> */}
        <Link href="">
          <Image src="/instagram.svg" width={20} height={20} alt="instagram" />
        </Link>
      </IconButton>
    </Box>
  );
};
