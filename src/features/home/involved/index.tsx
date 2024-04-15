import React, { FC } from "react";
import { COLORS } from "@/utils/colors";
import { FONTSIZE } from "@/utils/fonts";
import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { involvedData } from "@/utils/contents";
import { InvolvedSection } from "./section";

export type InvolvedProps = {};

export const Involved: React.FC<InvolvedProps> = ({}) => {
  return (
    <Box
      sx={{
        padding: {
          sm: "0px",
          xs: "0px 20px",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          backgroundColor: COLORS.green,
          color: "#fff",
        }}
        p={"48px"}
        gap={2}
      >
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: {
              sm: "left",
              md: "center",
            },
          }}
        >
          Get Involved
        </Typography>
        <Grid container columns={{ md: 8, lg: 12 }}>
          {involvedData.map((item, i) => {
            return (
              <Grid item key={i} lg={4} md={4}>
                <InvolvedSection
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
