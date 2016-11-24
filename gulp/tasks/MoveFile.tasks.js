module.exports = function (gulp, config, $, args) {
    //----------------移动文件----------------

    //将文档从build文档里面移动到生成目录
    gulp.task("MoveImg", function () {
        return gulp.src(config.img)
            .pipe(gulp.dest(config.buildimg))
        })




};