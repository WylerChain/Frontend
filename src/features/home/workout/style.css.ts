import { style } from "@vanilla-extract/css";

export const responsiveParagraph = style({
  lineHeight: "24px",
  "@media": {
    "(max-width: 1025px)": {
      display: "block",
    },
    "(max-width: 769px)": {
      display: "inline",
    },
  },
});

export const responsiveText = style({
  "@media": {
    "(max-width: 600px)": {
      fontSize: "20px",
    },
  },
});
