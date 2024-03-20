// React
import * as React from "react";
import Link from "next/link";

// MUI
import {
  Avatar,
  TextField,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  TextFieldProps,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// others
import { TFunction } from "i18next";

export type ResetPasswordFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  emailTextFieldProps: TextFieldProps;
  isValid: boolean;
  isLoading: boolean;
  authT: TFunction<string | readonly string[], "metadata">;
};
export type FormValue = { email: string };

export const ResetPasswordReqForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
  emailTextFieldProps,
  isValid,
  isLoading,
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
        <Typography component="h1" variant="h5">
          {authT("resetPassword.title")}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, whiteSpace: "pre-wrap" }} textAlign="center">
          {`Enter the email address associated with your account and we'll send you a link to reset your password.`}
        </Typography>
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            variant="standard"
            {...emailTextFieldProps}
          />
          <LoadingButton
            loading={isLoading}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
          >
            {authT("resetPassword.title")}
          </LoadingButton>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item />
            <Grid item>
              <Box component={Link} href="/auth/sign-up" color={"primary.dark"}>
                <Typography fontSize="14px">{authT("signUp.promptText")}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
