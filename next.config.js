const withReactSvg = require("next-react-svg");
const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/assets"),
  webpack(config, options) {
    return config;
  },
  reactStrictMode: true,
});
