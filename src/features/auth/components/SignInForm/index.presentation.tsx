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

export type FormValue = {
  password: string;
  email: string;
};

export type SignInFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  emailTextFieldProps: TextFieldProps;
  passwordTextFieldProps: TextFieldProps;
  isValid: boolean;
  isLoading: boolean;
  authT: TFunction<string | readonly string[], "metadata">;
};

export const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  emailTextFieldProps,
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
        <Typography component="h1" variant="h5" fontSize="20px">
          {authT("signIn.title")}
        </Typography>
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            variant="standard"
            autoComplete="email"
            {...emailTextFieldProps}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            variant="standard"
            autoComplete="new-password"
            {...passwordTextFieldProps}
          />
          <LoadingButton
            loading={isLoading}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, borderRadius: 0 }}
          >
            {authT("signIn.title")}
          </LoadingButton>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box component={Link} href="/auth/reset-password" color={"primary.dark"}>
                <Typography fontSize="14px">{authT("resetPassword.promptText")}</Typography>
              </Box>
            </Grid>
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
