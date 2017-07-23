const gulp = require('gulp');
const {dest, src} = require('./build-config');

module.exports = gulp.task('i18n', () => {
  const through = require('through2');
  const path = require('path');
  const _ = require('lodash');
  const gutil = require('gulp-util');

  const fileNameRegexp = /([\w\d_-]*)\.?[^\\/]*$/;
  const directory = `${dest.dist}/${dest.i18n}/`;
  let i18n = {};

  return gulp.src(src.i18n)
    .pipe(
      through.obj((file, enc, callback) => {
        if (file.isNull()) {
          callback();
          return;
        }

        let content = JSON.parse(file.contents.toString());
        let lang = file.path.match(fileNameRegexp)[1];

        if (!i18n[lang]) {
          i18n[lang] = {merged: content, firstFile: file};
          callback();
          return;
        }

        i18n[lang].merged = _.merge(i18n[lang].merged, content);

        callback();
      },
      function(callback) {
        _.each(i18n, (locale, lang) => {
          const output = new gutil.File({
            cwd: locale.firstFile.cwd,
            base: locale.firstFile.base,
            path: path.join(locale.firstFile.base, `${lang}.json`),
            contents: new Buffer(JSON.stringify(locale.merged))
          });

          this.push(output);
        });

        callback();
      }
    ))
    .pipe(gulp.dest(directory));
});

gulp.task('i18n-watch', ['i18n'], done => {
  const browserSync = require('browser-sync');
  browserSync.reload();
  done();
});

gulp.watch(src.i18n, ['i18n-watch']);
