module.exports = function (gulp, config, $, args) {
    //----------------上传服务器----------------
    //-----------上传服务器--------------------------
    gulp.task("UploadServer", function () {
        return gulp.src(config.production)
            .pipe($.ftp({
                host: "",
                remotePath: "",
                port: "",
                user: "",
                pass: ""
            }))

    });

};
