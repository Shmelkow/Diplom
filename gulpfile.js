'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('scss'));
});