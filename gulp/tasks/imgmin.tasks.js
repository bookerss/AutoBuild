module.exports = function (gulp, config, $, args) {
    //----------------图片压缩----------------
    gulp.task("ImgMin",function(){
        return gulp.src(config.img)
            .pipe($.cache($.imagemin(
                {
                    optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
                    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
                    interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                    multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
                }
            //    可添加use 压缩插件
            )))

            .pipe(gulp.dest(config.buildimg))


    })

};