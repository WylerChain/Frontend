"use client";
import { COLORS } from "@/utils/colors";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",
    h2: {
      fontSize: "24px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "16px",
      lineHeight: "27px",
    },
    h5: {
      fontSize: "14px",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    subtitle1: {
      fontFamily: "Bricolage Grotesque",
      fontSize: "64px",
      lineHeight: "64px",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "16px",
          lineHeight: "16px",
          padding: "16px 24px",
          borderRadius: "90px",
          gap: "12px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

//Override subtitle1 styles for different breakpoints
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontFamily: "Bricolage Grotesque",
  [theme.breakpoints.down("lg")]: {
    fontSize: "48px",
    lineHeight: "48px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "36px",
  },
};

theme.typography.body1 = {
  ...theme.typography.body1,
  fontFamily: "poppins",
  color: COLORS.grey90,
  lineHeight: "27px",
};

type Props = { children: ReactNode };
export const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
