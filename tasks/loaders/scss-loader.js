module.exports = () => {
  const {dest, src} = require('../build-config');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  let extractor = new ExtractTextPlugin({
    filename: `${dest.styleFileName}.css`,
    allChunks: true
  });

  let loaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('autoprefixer')()
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [src.appPath] // ensure "assets/[...]" import resolve
      }
    }
  ];

  let scssLoader = {
    test: /\.scss$/,
    include: [src.appPath],
    use: ExtractTextPlugin.extract({use: loaders})
  };

  return {
    scssLoader,
    extractor
  };
};
