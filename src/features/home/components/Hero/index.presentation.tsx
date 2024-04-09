// import Socials from "@/components/Shared/Socials";
import Image from "next/image";
import { Grid, Box } from "@mui/material";

import { FeatureItem } from "@/features/home/components/FeatureItem/index.presentation";
import { StateItem } from "@/features/home/components/StateItem/index.presentation";

interface FeatureItemData {
  image: string;
  desc: string;
}

interface StateItemData {
  num: string;
  desc: string;
}

const Hero = (): JSX.Element => {
  const featureItemImgs: FeatureItemData[] = [
    { image: "item1.png", desc: "Optimized specifically for financial apps" },
    { image: "item2.png", desc: "Continuous and seamless upgrades" },
    { image: "item3.png", desc: "High Grade & Customizable Solutions" },
    { image: "item4.png", desc: "Customizable code and skills" },
    { image: "item5.png", desc: "A new platform for all" },
  ];

  const stateItems: StateItemData[] = [
    { num: "295,883", desc: "Cross-chain Transfers" },
    { num: "114,345", desc: "Account Holders" },
    { num: "182,394,291", desc: "Total value locked" },
  ];

  return (
    <Box sx={{}} className="max-w-[1600px] mx-auto ">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Grid xs={12}>
            <Box className="text-primary  text-center mt-10">
              <h1 className=" text-[64px] font-poppinsbold">
                Democratising <span className="text-secondary">Finance</span>
              </h1>
              <p className="text-2xl">
                Fiction is building the liquidity layer of Web3 finance.
              </p>
            </Box>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={7}>
              <FeatureItem
                imgPath={`/heroitems/item1.png`}
                desc={"Optimized specifically for financial apps"}
              />
              <FeatureItem
                imgPath={`/heroitems/item2.png`}
                desc={"Continuous and seamless upgrades"}
              />
              <FeatureItem
                imgPath={`/heroitems/item3.png`}
                desc={"High Grade & Customizable Solutions"}
              />
              <FeatureItem
                imgPath={`/heroitems/item4.png`}
                desc={"Customizable code and skills"}
              />
              <FeatureItem
                imgPath={`/heroitems/item5.png`}
                desc={"A new platform for all"}
              />
            </Grid>
            <Grid item xs={5} sx={{ my: 2 }}>
              {stateItems.map(({ num, desc }, index) => (
                <StateItem num={num} desc={desc} key={index} />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Image
              src="/biglogo.png"
              width={350}
              height={600}
              alt="biglogo"
              className="mx-auto"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
