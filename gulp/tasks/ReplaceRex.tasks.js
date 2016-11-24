module.exports = function (gulp, config, $, args) {
    //----------------替换文本----------------
    gulp.task('Replace', function() {
        return gulp.src(config.develop+"*.html")
            .pipe($.cheerio(function ($) {
                $('head script').remove();
                $('head link').remove();
                $('head').append('<link rel="stylesheet" href="'+config.allCsslink+'">')
                $('head').append('<script src="'+config.allJslink+'"></script>')
            //   替换正则
            }))
            .pipe(gulp.dest(config.build));
    });

};