/*
 * Return loader options for imported html files
 */

module.exports = () => {
  let options = {
    test: /\.html$/,
    loader: 'raw-loader'
  };

  return options;
};
