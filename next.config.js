const withOffline = require("next-offline")
const withImages = require("next-images")

const nextConfig = {
  webpack: (config) => {
    //    do webpack things
    return config
  },
}

module.exports = withImages(withOffline(nextConfig))
