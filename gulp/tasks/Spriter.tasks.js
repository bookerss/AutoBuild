module.exports = function (gulp, config, $, args) {
    //----------------雪碧图----------------
    /*
    *  Des:一般不需要单独执行
    * */
    gulp.task("Spriter:NoRun",function(){
        return gulp.src(config.css)
            .pipe($.cssSpriter({
                'spriteSheet': config.buildimgSpriter, //这是雪碧图自动合成的图
                'pathToSpriteSheetFromCSS':config.buildimgSpriterSrc //这是在css引用的图片路径，很重要
            }))
            .pipe(gulp.dest(config.buildcss))

    })

};