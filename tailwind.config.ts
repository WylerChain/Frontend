import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/**/**/*.{js,ts,tsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,tsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#010101",
        // secondary: "#131313",
        primary: "#b5e0f3",
        secondary: "#365094",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      Poppins: ["Poppins"],
      poppinsbold: ["poppinsbold"],
    },
  },
  plugins: [],
};
export default config;
