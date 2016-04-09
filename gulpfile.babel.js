'use strict';

import gulp from 'gulp';
import validatePipelineJs from 'pipeline-validate-js';
import validatePipelineJson from 'gulp-jsonlint';

// single tasks
gulp.task('lint:js', function() {
  return gulp.src([
    './gulpfile.js',
    './server/**/*.js'
  ]).pipe(validatePipelineJs.validateJS());
});

gulp.task('lint:json', function() {
  return gulp.src([
    './.yo-rc.json',
    './package.json',
    './server/**/*.json'
  ]).pipe(validatePipelineJson())
    .pipe(validatePipelineJson.failOnError());
});

// group tasks
gulp.task('lint:all', ['lint:js', 'lint:json']);

// public tasks
gulp.task('build', ['lint:all']);