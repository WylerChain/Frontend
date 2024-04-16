import { style } from "@vanilla-extract/css";

export const responsiveParagraph = style({
  "@media": {
    "(max-width: 1025px)": {
      display: "block",
    },
    "(max-width: 769px)": {
      display: "inline",
    },
  },
});
