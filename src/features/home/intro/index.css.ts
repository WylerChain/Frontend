import { style } from "@vanilla-extract/css";
import { grey, blue } from "@mui/material/colors";

export const tableItemSelected = style({
  cursor: "pointer",
  backgroundColor: blue[50],
  ":hover": {
    backgroundColor: blue[100],
  },
});

export const tableItemNonSelected = style({
  cursor: "pointer",
  ":hover": {
    backgroundColor: grey[200],
  },
});
