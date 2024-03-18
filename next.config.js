// const { PHASE_PRODUCTION_BUILD } = require("next/constants");

const { i18n } = require("./next-i18next.config");

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = (phase) => {
  const nextConfig = {
    i18n,
  };

  return withVanillaExtract(nextConfig);
};
