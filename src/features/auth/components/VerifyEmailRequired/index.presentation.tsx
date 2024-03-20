import React, { FC } from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  Box,
  Skeleton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { UserState } from "@/contexts/authContext";

type VerifyEmailProps = {
  // user: UserState;
  user: {};
  onClickResendMail: () => void;
};

export const VerifyEmailRequired: React.FC<VerifyEmailProps> = ({
  user,
  onClickResendMail,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      {user ? (
        <React.Fragment>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
              Verify your email address
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, whiteSpace: "pre-wrap" }}
              textAlign="center"
            >
              {`Please check your inbox and follow the link to finish setting up your account.\n We have sent you an email to verify your email address for ${user.email}`}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, borderRadius: 0 }}
              onClick={onClickResendMail}
            >
              Resend mail
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton variant="circular" width={60} height={60} />
            <Skeleton
              variant="rectangular"
              width="80%"
              height={60}
              sx={{ mt: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={100}
              width="90%"
              sx={{ mt: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={36}
              width="40%"
              sx={{ mt: 3 }}
            />
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
};
