const gulp = require('gulp');

module.exports = gulp.task('connect', ['i18n'], () => {
  const webpack = require('webpack');
  const serve = require('browser-sync');
  const webpackDevMiddelware = require('webpack-dev-middleware');
  const webpackHotMiddelware = require('webpack-hot-middleware');
  const historyApiFallback = require('connect-history-api-fallback');
  const colorsSupported = require('supports-color');
  const {src} = require('./build-config');
  const routesMapping = require('../apimocks/routes-mapping');

  let config = require('./webpack.config')();
  // Enable livereload for app entry point
  config.entry.app = [
    'webpack-hot-middleware/client?reload=true', // Note that the order of files inside the entry point is important
    src.appEntry
  ];

  config.plugins = config.plugins.concat([
    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    new webpack.HotModuleReplacementPlugin()
  ]);

  let compiler = webpack(config);

  serve({
    port: 3000,
    open: false,
    notify: false,
    server: {baseDir: 'dist'},
    middleware: [
      {
        route: '/myapi', // api routes start for all your uris
        handle: routesMapping.middleware // API specifications (created by ApiMocks instance)
      },
      historyApiFallback(),
      webpackDevMiddelware(compiler, {
        hot: true,
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false,
          assets: false,
          children: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddelware(compiler)
    ]
  });
});
