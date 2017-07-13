const path = require('path');

module.exports = {
  src: {
    htmlIndex: './app/index.html',
    appEntry: './app/main.ts',
    appPath: path.resolve(__dirname, '../app'),
    vendorsEntry: [
      'core-js/es6/reflect',
      'core-js/es7/reflect',
      'zone.js',
      '@angular/common',
      '@angular/core',
      '@angular/animations',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic'
    ]
  },

  dest: {
    dist: 'dist',
    distPath: path.resolve(__dirname, '../dist')
  }
};
