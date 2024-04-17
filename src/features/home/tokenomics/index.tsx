"use client";
import React, { FC } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { COLORS } from "@/utils/colors";
import { motion } from "framer-motion";
import { getSectionAnimation } from "@/styles/animations";

// import { MemberCard } from "./card";

export type TokenomicsProps = {};
const pieParams = { height: 300 };
export const Tokenomics: React.FC<TokenomicsProps> = ({}) => {
  const TokenomicsData: { title: string; value: string; color: string }[] = [
    {
      title: "presale",
      value: "40.0000",
      color: "#7F56D9",
    },
    {
      title: "Liquidity",
      value: "22.8000",
      color: "#4B5DFF",
    },
    {
      title: "Team",
      value: "10.00",
      color: "#EA7000",
    },
    {
      title: "Holdback",
      value: "10.00",
      color: "#FFBE41",
    },
    {
      title: "Ecosystem",
      value: "12.50",
      color: "#1A9FFF",
    },
    {
      title: "Staking",
      value: "4.7000",
      color: "#CE1BB1",
    },
  ];
  return (
    <Grid
      id="tokenomics"
      container
      columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      columnSpacing={3}
      mt={"134px"}
      sx={{
        padding: {
          xs: "0px 10px",
          sm: "0px 10px",
          md: "0px 10px",
        },
      }}
    >
      <Grid item xs={1} sm={1} md={1} lg={1}>
        <motion.div {...getSectionAnimation}>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", color: COLORS.black, fontWeight: 600 }}
          >
            Tokenomics
          </Typography>
          <Box mt={4}>
            <PieChart
              {...pieParams}
              series={[
                {
                  outerRadius: 163,
                  innerRadius: 90,
                  data: [
                    {
                      value: parseFloat(TokenomicsData[0].value),
                      color: TokenomicsData[0].color,
                    },
                    {
                      value: parseFloat(TokenomicsData[1].value),
                      color: TokenomicsData[1].color,
                    },
                    {
                      value: parseFloat(TokenomicsData[2].value),
                      color: TokenomicsData[2].color,
                    },
                    {
                      value: parseFloat(TokenomicsData[3].value),
                      color: TokenomicsData[3].color,
                    },
                    {
                      value: parseFloat(TokenomicsData[4].value),
                      color: TokenomicsData[4].color,
                    },
                    {
                      value: parseFloat(TokenomicsData[5].value),
                      color: TokenomicsData[5].color,
                    },
                  ],
                },
              ]}
              width={500}
              height={500}
            />
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}>
        <motion.div {...getSectionAnimation}>
          <Grid container columns={2} spacing={4}>
            {TokenomicsData.map((item, i) => {
              return (
                <Grid item key={i} xs={1} sm={1} md={1} lg={1} mb={2}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: COLORS.black,
                      pb: 3,
                      borderBottom: `1px solid ${COLORS.grey80}`,
                      fontWeight: 100,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ color: item.color, pt: 2, fontWeight: 600 }}
                  >
                    {item.value}%
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              borderRadius: "20px",
              backgroundColor: COLORS.green,
              color: COLORS.white,
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              padding: "20px 40px",
            }}
            mt={3}
          >
            <Typography
              variant="h2"
              sx={{ textAlign: "center", paddingTop: "4px" }}
            >
              Total Supply
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              100.0000%
            </Typography>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};
