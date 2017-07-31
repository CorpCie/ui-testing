module.exports = () => {
  const webpack = require('webpack');
  const path = require('path');
  const {src} = require('./build-config');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CopyWebpackPlugin = require('copy-webpack-plugin');

  const output = require('./webpack.output')();

  const htmlLoader = require('./loaders/html-loader')();
  const scriptLoader = require('./loaders/script-loader')();
  const stylesConfig = require('./webpack.styles')();

  let config = {
    devtool: 'source-map',
    output,
    entry: {
      vendors: src.vendorsEntry,
      app: src.appEntry
    },
    module: {
      rules: [
        scriptLoader,
        htmlLoader,
        stylesConfig.scssLoader,
        stylesConfig.cssLoader,
        stylesConfig.imagesLoader,
        stylesConfig.fontsLoader
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'], // enables to leave off the extension when importing
      alias: {
        commonStyles: path.resolve(__dirname, '../app/modules/styles'),
        images: src.images,
        fonts: src.fonts
      }
    },
    plugins: [
      stylesConfig.extractor,

      // multiple bundles share some of the same dependencies
      // CommonsChunkPlugin extract those dependencies into a shared bundle to avoid duplication
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: Infinity
      }),

      new HtmlWebpackPlugin({
        template: `!!ejs-loader!${src.htmlIndex}`, // uses lodash template function to compile templates
        inject: false
      }),

      // provide context to Angular's use of System.import
      // https://github.com/angular/angular/issues/11580
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../src')
      ),

      // copy avatars just for mock testing purpose
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../apimocks/avatars'),
        to: 'assets/avatars'
      }])
    ]
  };

  return config;
};
