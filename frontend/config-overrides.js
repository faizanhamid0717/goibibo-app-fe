const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@apps': path.resolve(__dirname, 'src/apps'),
    '@common': path.resolve(__dirname, 'src/libs/common/src/lib'),
    '@features': path.resolve(__dirname, 'src/libs/features/src/lib'),
    '@utils': path.resolve(__dirname, 'src/libs/utils/src/lib'),
    '@store': path.resolve(__dirname, 'src/apps/goibibo/src/store'),
  };
  return config;
};
