module.exports = function (gulp, config, $, args) {
    //----------------生成生产目录文件----------------
    gulp.task("GreatProduction", function () {
        return gulp.src([config.buildhtml,config.buildSrcCssFile,config.buildSrcJsFile,config.buildSrcImgFile],{base:config.build})
            .pipe(gulp.dest(config.production))

    })

};