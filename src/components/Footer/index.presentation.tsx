import { Box, Grid, Typography, TypographyProps, styled } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Logo } from "@/components/Logo/index.presentation";
import { COLORS } from "@/utils/colors";
import Image from "next/image";
import { useTranslation } from "@/i18n/client";
import { LANGUAGE_OPTIONS } from "@/i18n/settings";
import { getTranslation } from "@/i18n";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = async ({}) => {
  const { t } = await getTranslation(LANGUAGE_OPTIONS.ENGLISH);

  return (
    <Box
      component="footer"
      position="sticky"
      top="100vh"
      sx={{ bgcolor: COLORS.black }}
      px={{ xs: "20px", md: "50px" }}
      py={{ xs: "30px", md: "50px" }}
    >
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "flex-start", md: "space-between" }}
        alignItems="flex-center"
        columns={3}
        spacing={3}
      >
        {/* ロゴ */}
        <Grid item xs={1}>
          <Grid container direction="column" justifyContent="flex-start" columns={2}>
            <Grid item xs={1}>
              <Logo color="white" />
            </Grid>
            <Grid item xs={1}>
              <Typography fontSize="12px" color={COLORS.white}>
                {t("linkText.copyLight")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* リンク */}
        {/* TODO: リンクとSNSリンクの間に余分な余白ができてしまうので修正したい */}
        <Grid item xs={1}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            columns={2}
            width={{ xs: "100%" }}
          >
            <Grid item xs={1}>
              <Box>
                <Typography color={COLORS.white} fontSize="15px" fontWeight="bold" mb="5px">
                  {t("linkText.aboutUs")}
                </Typography>
                <Typography fontSize="12px" color={COLORS.white} mb="5px">
                  {t("linkText.termsOfUse")}
                </Typography>
                <Typography fontSize="12px" color={COLORS.white} mb="5px">
                  {t("linkText.privacyPolycy")}
                </Typography>
                <Typography fontSize="12px" color={COLORS.white} mb="5px">
                  {t("linkText.cookiePolicy")}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box>
                <Typography fontSize="15px" color={COLORS.white} fontWeight="bold" mb="5px">
                  {t("linkText.service")}
                </Typography>
                <Typography fontSize="12px" color={COLORS.white} mb="5px">
                  {t("linkText.artx")}
                </Typography>
                <Typography fontSize="12px" color={COLORS.white} mb="5px">
                  {t("linkText.artxCloud")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* SNSリンク */}
        <Grid item xs={1}>
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="flex-center"
            columns={2}
            spacing={5}
          >
            <Grid item>
              <Image
                src={"/instagram.svg"}
                alt="Logo"
                height="21"
                width="21"
                loading="lazy"
                objectFit="contain"
                objectPosition="center"
              />
            </Grid>
            <Grid item>
              <Image
                src={"/twitter.svg"}
                alt="Logo"
                height="21"
                width="21"
                loading="lazy"
                objectFit="contain"
                objectPosition="center"
              />
            </Grid>
            <Grid item>
              <Image
                src={"/facebook.svg"}
                alt="Logo"
                height="21"
                width="21"
                loading="lazy"
                objectFit="contain"
                objectPosition="center"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
