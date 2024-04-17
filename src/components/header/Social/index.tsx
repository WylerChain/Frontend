import React, { FC } from "react";
import Link from "next/link";
import { Box, IconButton } from "@mui/material";
import Telegram from "@mui/icons-material/Telegram";
import Image from "next/image";
import { COLORS } from "@/utils/colors";
export type SocialProps = {};

export const Social: React.FC<SocialProps> = ({}) => {
  return (
    <Box
      sx={{ display: "flex", columnGap: { lg: "24px", md: "5px" } }}
      pt={"5px"}
    >
      {/* <IconButton aria-label="facebook">
        <Link href="">
          <Image src="/facebook.svg" width={20} height={20} alt="facebook" />
        </Link>
      </IconButton> */}
      <IconButton aria-label="twitter">
        <Link href="https://x.com/wylerchain">
          <Image src="/twitter.svg" width={20} height={20} alt="twitter" />
        </Link>
      </IconButton>
      <IconButton aria-label="telegram">
        {/* <Instagram /> */}
        <Link href="https://t.me/wylerchain">
          {/* <Image src="/instagram.svg" width={20} height={20} alt="instagram" /> */}
          <Telegram
            sx={{ width: "20px", height: "20px", color: COLORS.grey90 }}
          />
        </Link>
      </IconButton>
    </Box>
  );
};
