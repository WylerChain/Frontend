import { FC } from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";

interface FeatureItemProps {
  imgPath: string;
  desc: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ imgPath, desc }) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        margin: 2,
      }}
    >
      <Grid item>
        <Image src={imgPath} alt={"image"} width={46} height={46} />
      </Grid>
      <Grid item>
        <Box
          className="text-primary font-Poppins text-lg rounded-3xl"
          sx={{
            py: 1,
            px: 4,
            border: "2px solid #365094",
            fontFamily: "Poppins",
            minWidth: 425,
            textAlign: "center",
          }}
        >
          {desc}
        </Box>
      </Grid>
    </Grid>
  );
};
