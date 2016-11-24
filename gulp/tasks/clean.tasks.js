module.exports = function (gulp, config, $, args) {
    //-----------清除处理--------------------
    gulp.task("Clean", function () {
      var dir=config.fn.exists();
      return gulp.src(dir, {read: false}).pipe($.clean());
    });

};