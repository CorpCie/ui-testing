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
    images: path.resolve(__dirname, '../app/assets/images'),
    imagesTypes: /\.(jpg|png|svg)$/,
    fonts: path.resolve(__dirname, '../app/assets/fonts'),
    fontsTypes: /\.(|eot|ttf|woff|woff2)$/,
    i18n: 'app/**/i18n/[A-z]*.json'
  },

  dest: {
    dist: 'dist',
    distPath: path.resolve(__dirname, '../dist'),
    styleFileName: 'styles',
    fonts: 'assets/fonts',
    i18n: 'assets/i18n',
    images: 'assets/images'
  }
};
