/*
 * Return loader options for imported html files
 */

module.exports = () => {
  const {src} = require('../build-config');

  let options = {
    test: /\.ts$/,
    include: [src.appPath],
    loader: 'awesome-typescript-loader'
  };

  return options;
};
