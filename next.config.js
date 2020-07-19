const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config, options) {
    config.node = { fs: 'empty' };
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  sassLoaderOptions: {},
});
