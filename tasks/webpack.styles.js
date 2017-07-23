/*
 * Return loader options for imported html files
 */
module.exports = () => {
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const _ = require('lodash');

  const scss = require('./loaders/scss-loader')();
  const css = require('./loaders/css-loader')();
  const assets = require('./loaders/assets-loader')();

  return _.merge(
    scss,
    css,
    assets,
    {
      optimizer: new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      })
    }
  );
};
