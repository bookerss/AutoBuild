module.exports = function (gulp, config, $, args) {
    //----------------版本号----------------
    //TODO:智能化任务
    //修改版本
    gulp.task('CssVersion', function () {
        return gulp.src(config.buildDist+"*.min.css")
            .pipe($.rev())//修改指定文件加hash
            .pipe(gulp.dest(config.buildcss))//存放在发布目录
            .pipe($.rev.manifest())//写入json数据
            .pipe(gulp.dest(config.buildDistRevCss))//json数据存放位置
    })
    gulp.task('RevCss', function () {
        return gulp.src([config.buildDistRevCssJson,config.buildhtml]).pipe($.revCollector({
            replaceReved: true
        }))
            .pipe(gulp.dest(config.build))
    })
    gulp.task('JsVersion', function () {
        return gulp.src(config.buildDist+"*.min.js")
            .pipe($.rev())//修改指定文件加hash
            .pipe(gulp.dest(config.buildjs))//存放在发布目录
            .pipe($.rev.manifest())//写入json数据
            .pipe(gulp.dest(config.buildDistRevJs))//json数据存放位置
    })
    gulp.task('RevJs',function () {
        return gulp.src([config.buildDistRevJsJson, config.buildhtml]).pipe($.revCollector({
            replaceReved: true
        }))
            .pipe(gulp.dest(config.build))
    })
};