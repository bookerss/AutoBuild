module.exports = function (gulp, config, $, args) {
    //----------------实时代码----------------
    var browserSync = $.browserSync.create();
    var reload=browserSync.reload;
// 静态服务器
    gulp.task('Browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: config.develop
            }
        });
        gulp.watch(config.sass, ['sass']);
        gulp.watch([config.html,config.css,config.js]).on('change', reload);
    });

// 代理

};