'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var config = {
    src: {
        all: ['**/*', '!/node_modules', '!/_site']
    }
};

/*
 * Push the built site content to public gh-pages.
 */
gulp.task('deploy', function () {
    return gulp.src(config.src.all)
        .pipe(ghPages());
});

gulp.task('default', ['build']);