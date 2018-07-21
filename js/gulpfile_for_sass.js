const gulp = require('gulp');

const sass = require('gulp-sass');

const maps = require('gulp-sourcemaps');

gulp.task('sass',function(){
    return gulp.src('./sass/**/*.scss')
           .pipe(maps.init())
           .pipe(sass())
           .pipe(maps.write('./maps'))
           .pipe(gulp.dest('./css'))
});

gulp.task('watch',function(){
    gulp.watch('./sass/**/*.scss',['sass']);
});