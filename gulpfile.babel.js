const gulp = require('gulp');
require('require-dir')('./tasks');

gulp
  .task('serve', ['connect']);
