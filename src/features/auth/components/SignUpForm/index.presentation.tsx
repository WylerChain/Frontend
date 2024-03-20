// React
import * as React from "react";
import Link from "next/link";
// MUI
import {
  Button,
  Avatar,
  FormControlLabel,
  Checkbox,
  TextField,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  TextFieldProps,
  CheckboxProps,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// others
import { TFunction } from "i18next";

export type FormValue = {
  password: string;
  email: string;
  confirmedPolicy: boolean;
};

export type SignUpFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  emailTextFieldProps: TextFieldProps;
  passwordTextFieldProps: TextFieldProps;
  confirmedCheckboxProps: CheckboxProps;
  isValid: boolean;
  isLoading: boolean;
  authT: TFunction<string | readonly string[], "metadata">;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  emailTextFieldProps,
  passwordTextFieldProps,
  confirmedCheckboxProps,
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
          {authT("signUp.title")}
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
          <FormControlLabel
            control={
              <Checkbox value="confirmedPolicy" color="primary" {...confirmedCheckboxProps} />
            }
            label={
              <span style={{ width: "100%", display: "block" }}>
                I&apos;ve read and accept the&nbsp;
                <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy&nbsp;
                </Link>
                and&nbsp;
                <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </Link>
                .
              </span>
            }
          />
          <LoadingButton
            loading={isLoading}
            disabled={!isValid}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            {authT("signUp.title")}
          </LoadingButton>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography fontSize="14px">{authT("signIn.promptText")}</Typography>
            </Grid>
            <Grid item>
              <Box component={Link} href="/auth/sign-in" color={"primary.dark"}>
                <Typography fontSize="14px">{authT("signIn.title")}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
