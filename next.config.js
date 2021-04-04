// const withSass = require('@zeit/next-sass');

module.exports = {
  future: {
    webpack5: true,
  },
};

// withSass({
//   webpack(config, options) {
//     config.node = { fs: 'empty' };
//     config.future = { webpack5: true };
//     return config;
//   },
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]',
//   },
//   sassLoaderOptions: {},
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// });
