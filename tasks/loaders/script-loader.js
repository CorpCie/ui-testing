/*
 * Return loader options for imported html files
 */

module.exports = () => {
  const {src} = require('../build-config');

  let options = {
    test: /\.js$/,
    include: [src.appPath],
    loader: 'babel-loader'
  };

  return options;
};
