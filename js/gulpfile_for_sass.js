/* eslint-disable */

const gulp = require('gulp');

const sass = require('gulp-sass');

const maps = require('gulp-sourcemaps');

/* eslint-enable */

gulp.task('sass', () => gulp.src('./sass/**/*.scss')
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('./css')));

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
