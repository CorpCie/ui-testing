module.exports = () => {
  const {dest} = require('./build-config');

  let options = {
    filename: '[name].js',
    publicPath: '/',
    path: dest.distPath
  };

  return options;
};
