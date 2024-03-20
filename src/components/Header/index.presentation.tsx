import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { Logo } from "@/components/Logo/index.presentation";
import { COLORS } from "@/utils/colors";
import { getTranslation } from "@/i18n";
import { LANGUAGE_OPTIONS, NAMESPACE_OPTIONS } from "@/i18n/settings";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = async ({}) => {
  const { t: authT } = await getTranslation(
    LANGUAGE_OPTIONS.ENGLISH,
    NAMESPACE_OPTIONS.auth
  );
  const { t } = await getTranslation(LANGUAGE_OPTIONS.ENGLISH);

  return (
    <Box
      sx={{ borderBottom: `1px solid ${COLORS.grey}` }}
      component="header"
      position="sticky"
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-center"
        columns={2}
        pt={2}
        pb={{ md: 1 }}
        px={2}
      >
        <Grid item>
          <Box sx={{ display: { xs: "grid", md: "flex" }, gap: "16px" }}>
            <Box>
              <Box component={Link} href="/">
                <Logo color="black" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Box
                component={Link}
                href="/auctions"
                sx={{ textDecoration: "none" }}
                color={"primary.dark"}
              >
                <Typography fontSize="12px">{t("linkText.auction")}</Typography>
              </Box>
              <Box
                component={Link}
                href="/how-to-join"
                sx={{ textDecoration: "none" }}
                color={"primary.dark"}
              >
                <Typography fontSize="12px">
                  {t("linkText.howToJoin")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: { xs: "grid", md: "flex" }, gap: "16px" }}>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Box component={Link} href="/auth/sign-in">
                <Button color="primary">{authT("signIn.title")}</Button>
              </Box>
              <Box component={Link} href="/auth/sign-up">
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: 0 }}
                >
                  {authT("signUp.title")}
                </Button>
              </Box>
            </Box>
            {/* TODO: Language セレクターが入る。現状はとりあえず空のboxを配置している。 */}
            <Box sx={{ height: "18px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
