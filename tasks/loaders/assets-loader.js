module.exports = () => {
  const {dest, src} = require('../build-config');

  let fileLoader = 'file-loader?name=';

  let imagesLoader = {
    test: src.imagesTypes,
    loaders: [
      `${fileLoader + dest.images}/[name].[ext]`
    ]
  };

  let fontsLoader = {
    test: src.fontsTypes,
    loader: `${fileLoader + dest.fonts}/[name].[ext]`
  };

  return {
    imagesLoader,
    fontsLoader
  };
};
