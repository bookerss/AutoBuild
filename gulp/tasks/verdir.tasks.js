module.exports = function (gulp, config, $, args) {
    //----------------保存版本文档----------------
    gulp.task("SaveVersion",function(){
           var newVerNum=config.fn.dirVer(config.verobj);
           gulp.src(config.build+"**/*").pipe(gulp.dest(config.verobj.dirname+"/v"+newVerNum+"/"))

        //return gulp.src(config.js)

    })

};