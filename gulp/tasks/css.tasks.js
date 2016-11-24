module.exports = function (gulp, config, $, args) {
    //-----------CSS压缩合并处理--------------------
    gulp.task("Css", function () {
        return gulp.src(config.css)
            .pipe($.concatCss(config.allcss))//合并css文件
            .pipe($.base64(config.base64.options))
            .pipe($.cssSpriter({
                'spriteSheet': config.buildimgSpriter, //这是雪碧图自动合成的图
                'pathToSpriteSheetFromCSS':config.buildimgSpriterSrc //这是在css引用的图片路径，很重要
            }))
            .pipe(gulp.dest(config.buildDist))//合并后存放位置

            .pipe($.rename({suffix: '.min'}))//重命名合并的文件在文件格式前加入指定标识符,参数:dirname:目录名, basename基础名一般在prefix字首后面,prefix:字首名 也就是第一个出现的位置,suffix文件格式前,extname 文件格式
            .pipe($.minifyCss())//压缩css
            .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))//自动不补全
            .pipe(gulp.dest(config.buildDist))//存放位置
            .pipe($.notify({message: 'css压缩合并完成'}));
    });
};