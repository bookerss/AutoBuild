module.exports = function (gulp, config, $, args) {
    var reload=$.browserSync.reload;
    //----------------Sass编译----------------
    /*
    *  TODO:请保持sass文件名与css目录下文件不同命,将在后面添加重命名情况处理方式
    * */
    gulp.task("Sass",function(){
        return gulp.src(config.sass)
            .pipe($.sass())
            .pipe(gulp.dest(config.developcss))
            .pipe($.notify({message: 'SCSS处理完成'}))
            .pipe(reload({stream: true}));
    })

};