import * as React from "react";
import Link from "next/link";
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
import { TFunction } from "i18next";

export type FormValue = { password: string };

export type ResetPasswordFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  passwordTextFieldProps: TextFieldProps;
  isValid: boolean;
  isLoading: boolean;
  authT: TFunction<string | readonly string[], "metadata">;
};

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
  passwordTextFieldProps,
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
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            variant="standard"
            {...passwordTextFieldProps}
          />
          <LoadingButton
            loading={isLoading}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 0 }}
          >
            {authT("resetPassword.title")}
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Box component={Link} href="/auth/reset-password" color={"primary.dark"}>
                <Typography fontSize="12px">
                  {authT("resetPassword.reRequestResetPassword")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
