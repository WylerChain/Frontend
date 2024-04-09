import { FC } from "react";
import { Grid, Box } from "@mui/material";

interface stateItemProps {
  num: string;
  desc: string;
}
export const StateItem: FC<stateItemProps> = ({ num, desc }) => {
  return (
    <Box
      className="border-2 rounded-2xl min-w-[320px] text-center"
      sx={{
        border: "2px solid #365094",
        py: 2,
        px: 4,
        m: 2,
      }}
    >
      <p className="text-5xl text-primary">{num}</p>
      <p>
        <small className="text-xs text-secondary">{desc}</small>
      </p>
    </Box>
  );
};
