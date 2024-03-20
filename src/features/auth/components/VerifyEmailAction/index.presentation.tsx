import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React, { FC } from "react";
import { LinearProgress } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TFunction } from "i18next";
import { Result } from "./index.container";
import Link from "next/link";

type VerifyEmailAction = {
  result: Result;
  authT: TFunction<string | readonly string[], "metadata">;
};
export const VerifyEmailAction: React.FC<VerifyEmailAction> = ({ result, authT }) => {
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
        {result.type == "success" ? (
          <React.Fragment>
            <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
            <Typography variant="h5" textAlign="center" sx={{ mt: 2, fontWeight: "bold" }}>
              Verified
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }} textAlign="center">
              <Link href="/auth/sign-in">
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                  Continue
                </Button>
              </Link>
            </Typography>
          </React.Fragment>
        ) : result.type == "error" ? (
          <React.Fragment>
            <ErrorIcon color="error" sx={{ fontSize: 60 }} />
            <Typography variant="h5" textAlign="center" sx={{ mt: 2, fontWeight: "bold" }}>
              {authT("errors.failedResetEmailLink")}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }} textAlign="center">
              {result.message}
            </Typography>
          </React.Fragment>
        ) : (
          <LinearProgress />
        )}
      </Box>
    </Container>
  );
};
