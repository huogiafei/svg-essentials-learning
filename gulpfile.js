var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});