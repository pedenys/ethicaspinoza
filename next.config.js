const withOffline = require('next-offline')

const nextConfig = {
   webpack: (config) => {
      //    do webpack things
      return config
   },
}

module.exports = withOffline(nextConfig)
