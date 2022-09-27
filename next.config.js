const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pandascore.co",
      "img-cdn.hltv.org",
      "purecatamphetamine.github.io",
    ],
  },
});
