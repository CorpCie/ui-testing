const path = require('path');

module.exports = {
  src: {
    htmlIndex: './app/index.html',
    appEntry: './app/main.js',
    appPath: path.resolve(__dirname, '../app'),
    vendorsEntry: [
      'core-js/es6/reflect',
      'core-js/es7/reflect',
      'zone.js',
      '@angular/common',
      '@angular/core',
      '@angular/animations',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@ngx-translate/core',
      '@ngx-translate/http-loader'
    ],
    images: path.resolve(__dirname, '../app/assets'),
    imagesTypes: /\.(jpg|png|svg)$/,
    fontsTypes: /\.(|eot|ttf|woff|woff2|svg)$/,
    i18n: 'app/**/i18n/[A-z]*.json'
  },

  dest: {
    dist: 'dist',
    distPath: path.resolve(__dirname, '../dist'),
    styleFileName: 'styles',
    fonts: 'fonts',
    i18n: 'assets/i18n'
  }
};
