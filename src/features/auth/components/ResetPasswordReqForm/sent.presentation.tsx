import React, { FC } from "react";
import { Typography, Box, Container } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { TFunction } from "i18next";

export type ResetPasswordFormSentProps = {
  email: string;
  authT: TFunction<string | readonly string[], "metadata">;
};

export const ResetPasswordReqFormSent: React.FC<ResetPasswordFormSentProps> = ({
  email,
  authT,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MarkEmailReadIcon color="success" sx={{ fontSize: 60 }} />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          Check your email
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }} textAlign="center">
          {authT("resetPassword.sentCompletedText", { email: email })}
        </Typography>
      </Box>
    </Container>
  );
};
