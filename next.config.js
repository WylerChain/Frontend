// const { PHASE_PRODUCTION_BUILD } = require("next/constants");

const { i18n } = require("./next-i18next.config");

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = (phase) => {
  const nextConfig = {
    i18n,
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "storage.googleapis.com",
    //       port: "",
    //       pathname: "*",
    //     },
    //   ],
    //   domains: ["127.0.0.1", "storage.googleapis.com", "flagcdn.com"],
    // },
  };

  return withVanillaExtract(nextConfig);
};
