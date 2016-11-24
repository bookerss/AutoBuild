module.exports = function (gulp, config, $, args) {
    //----------------Sass监控----------------
    gulp.task('scssWatch', function () {
        return gulp.watch(config.sass, ['Sass'])
    });

};