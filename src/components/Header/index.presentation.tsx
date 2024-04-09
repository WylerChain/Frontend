import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { Logo } from "@/components/Logo/index.presentation";
import { COLORS } from "@/utils/colors";
import { getTranslation } from "@/i18n";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";
import { Divider } from "./devider.presentation";
import { Nav } from "./navigation.presentation";
export type HeaderProps = {};

export const Header = async ({}) => {
  const { t: authT } = await getTranslation(
    LANGUAGE_OPTIONS.ENGLISH,
    NAMESPACE_OPTIONS.auth
  );
  const { t } = await getTranslation(LANGUAGE_OPTIONS.ENGLISH);

  return (
    <Grid container sx={{ maxWidth: 1600 }} className="mx-auto my-10">
      <Grid item xs={5} sx={{ paddingTop: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Image src={`/sLogo.svg`} width={45} height={45} alt="logo" />
          <span className="font-poppinsbold text-5xl text-primary ml-2">
            Fiction
          </span>
        </Box>
        <Divider />
      </Grid>
      <Grid item xs={2}>
        <Image
          src={`/middleLogo.svg`}
          width={200}
          height={200}
          alt="middle logo"
          className="mx-auto"
        />
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          paddingTop: "80px",
        }}
      >
        <Divider />
        <Nav />
      </Grid>
    </Grid>
  );
};
