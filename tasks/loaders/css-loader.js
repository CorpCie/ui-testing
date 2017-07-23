module.exports = () => {
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    }
  ];

  let cssLoader = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({use: loaders})
  };

  return {
    cssLoader
  };
};
