/* eslint-disable */
const gulp = require('gulp');

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');

const maps = require('gulp-sourcemaps');

/* eslint-enable */

gulp.task('sass', () => gulp.src('./sass/**/*.scss')
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('./css')));

gulp.task('build', () => gulp.src('./css/**/*.css')
  .pipe(autoprefixer({
    browsers: ['last 8 versions', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
  }))
  .pipe(gulp.dest('./build')));

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
