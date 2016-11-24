module.exports = function (gulp, config, $, args) {
    //----------------推送----------------
    gulp.task("Push", function (callback) {
        $.runSequence(
             'UploadServer',
            callback
        )
    })

};