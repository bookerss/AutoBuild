module.exports = function (gulp, config, $, args) {
    //----------------base64----------------
    /************在css文件有@import的情况下请先合并再执行该命令************************/
    gulp.task("Base64:NoRun",function(){
        return gulp.src(config.css)
            .pipe($.base64(config.base64.options))
            .pipe(gulp.dest(config.developcss))

    })

};