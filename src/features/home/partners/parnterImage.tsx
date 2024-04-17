import React, { FC } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export type PartnerImgProps = { src: string };

export const PartnerImg: React.FC<PartnerImgProps> = ({ src }) => {
  return (
    <Box>
      <Image src={src} width={128} height={128} alt="partner" priority />
    </Box>
  );
};
