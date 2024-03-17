"use client";
import { COLORS } from "@/utils/colors";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode } from "react";
// import { ebGaramond, formaleGrotesque } from "@/fonts";

const theme = createTheme({
  // Setting breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
  // カラーの設定
  palette: {
    primary: {
      main: COLORS.primary,
      contrastText: COLORS.white,
    },
  },
  typography: {
    fontFamily: [
      // formaleGrotesque.style.fontFamily,
      // ebGaramond.style.fontFamily,
      "sans-serif",
    ].join(","),
    button: {
      // Prevent button component text from being uppercase
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      // @see https://zenn.dev/tak_dcxi/articles/2ac77656aa94c2cd40bf
      styleOverrides: `
        body {
          height: 100vh;
          min-height: -webkit-fill-available;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Make the label color a little lighter
          color: COLORS.grey3,
        },
      },
    },
  },
});

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
