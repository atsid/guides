'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');

var config = {
    src: {
        all: './',
        siteFiles: ['**/*', '!dist', '!node_modules'],
        build: 'dist',
        deploy: ['dist/**/*']
    }
};


/*
 * Clean out the build directory so we don't have any excess junk
 */
gulp.task('clean', function (cb) {
    rimraf(config.src.build, cb);
});

/*
 * Copy static content into a single point for deployment, without the extra cruft.
 */
gulp.task('site', function () {
    return gulp.src(config.src.siteFiles, { 'base': '.' }).pipe(gulp.dest(config.src.build));
});

/*
 * Runs all the required tasks to create distributable site package in output folder.
 */
gulp.task('build', function (cb) {
    return runSequence(
        'clean',
        'site',
        cb);
});

/*
 * Push the built site content to public gh-pages.
 */
gulp.task('ghpages', function () {
    return gulp.src(config.src.deploy)
        .pipe(ghPages());
});

/**
 * Full deploy cycle.
 */
gulp.task('deploy', function (cb) {
    runSequence(
        'clean',
        'build',
        'ghpages',
        cb);
});

gulp.task('default', ['build']);