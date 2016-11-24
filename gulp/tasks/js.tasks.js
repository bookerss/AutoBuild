module.exports = function (gulp, config, $, args) {
    gulp.task("Js", function () {
        return gulp.src(config.js)
            .pipe($.concat(config.alljs))//合并js
            .pipe(gulp.dest(config.buildDist))//存放位置
            .pipe($.rename({suffix: '.min'}))//重命名,如上
            .pipe($.uglify({
                mangle: false,
                compress: true
            }))
            //TODO:混淆js代码
            .pipe(gulp.dest(config.buildDist))//保存
            .pipe($.notify({message: 'js压缩合并完成'}));
    })

};