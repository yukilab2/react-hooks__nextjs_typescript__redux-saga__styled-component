const path = require('path')
const Dotenv = require('dotenv-webpack')
const env = process.env.NODE_ENV;

module.exports = {
  esModule: true,
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, `.env.${env}`),
        systemvars: true,
      })
    ]
    return config;
  }
};


