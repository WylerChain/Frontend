import { style } from "@vanilla-extract/css";

export const responsiveParagraph = style({
  "@media": {
    "(max-width: 600px)": {
      display: "inline",
    },
  },
});
