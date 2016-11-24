module.exports = function (gulp, config, $, args) {
    //----------------构建----------------

    //将文档从build文档里面移动到生成目录
    gulp.task("Build", function (callback) {
        $.runSequence(
            'Clean',
            'Replace',
            'Css',
            'Js',
            'CssVersion',
            'JsVersion',
            'RevCss',
            'RevJs',
            'MoveImg',
            'SaveVersion',
            'GreatProduction',

            callback);

        })



};