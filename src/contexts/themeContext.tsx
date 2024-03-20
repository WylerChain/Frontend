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
  // ブレイクポイントの設定
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
    // fontFamily: [formaleGrotesque.style.fontFamily, ebGaramond.style.fontFamily, "sans-serif"].join(
    //   ","
    // ),
    button: {
      // button componentのテキストが大文字になるのを防ぐ
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      // iOSのSafariでは100vhの計算にアドレスバーが考慮されていないため、アドレスバー分押し出されてしまう問題を解消する
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
          // labelの色を少し薄くする
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
