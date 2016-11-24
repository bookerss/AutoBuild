module.exports = function () {
    var develop = 'AutoBuild/develop/';//开发目录
    var build = 'AutoBuild/develop/build/';//构建目录
    var production = 'AutoBuild/production/';//生产目录

    /*
     * TODO:优化目录结构以及命名
     */

    var config = {//配置信息
        develop: develop,
        developcss: develop + 'src/css',
        production: production,
        build: build,
        buildSrc:build+"src/*",
        buildcss: build + 'src/css/',
        buildcssSrc: build + 'src/css/source',
        buildjs: build + "src/js/",
        buildjsSrc: build + "src/js/source/",
        buildSrcCssFile:build + 'src/css/*.css',
        buildSrcJsFile:build + 'src/js/*.js',
        js: develop + 'src/**/*.js',
        css: develop + 'src/**/*.css',
        html: develop + "*.html",
        sass: develop + "src/css/sass/*.scss",
        allcss: "home.css",
        alljs: "home.js",
        allCsslink:"src/css/home.min.css",
        allJslink:"src/js/home.min.js",
        base64: {
            src: develop + 'src/css/*.css',
            dest: develop + 'src/css',
            options: {
                // buildDir:develop+"src/",
                extensions: ['png', "svg", /\.jpg#datauri$/i],
                maxImageSize: 3 * 1024, // bytes
                debug: true
            }
        },
        img: develop + "src/images/*.{png,jpg,gif,ico}",
        buildimg: build + "src/images/",
        buildimgSpriter: build + "src/images/icon.png",
        buildimgSpriterSrc: "../images/icon.png",
        buildSrcImgFile:build + "src/images/*",
        buildhtml: build + "*.html",
        buildDist: build + "dist/",
        buildDistRev: build + "dist/rev",
        buildDistRevCss: build + "dist/rev/css/",
        buildDistRevCssJson: build + "dist/rev/css/*.json",
        buildDistRevJs: build + "dist/rev/js/",
        buildDistRevJsJson: build + "dist/rev/js/*.json",
        verobj:{
              dirname:develop+"version",
              newver:false,//默认false,是不是正式发布版
        }
    };
    var fs = require("fs");
    config.fn = {
        exists: function () {
            fs.exists(config.build, function (exists) {
                var build = exists ? "true" : "false";
            });
            fs.exists(config.production, function (exists) {
                var production = exists ? "true" : "false";
            });
            if (build && production) {
                return [config.build, config.production]
            } else if (build) {
                return config.build;
            } else if (production) {
                return config.production;
            }
        },
        moveDir: function () {
            fs.rename(__dirname + '/test', __dirname + '/fsDir', function (err) {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('重命名成功')
            });
        },
        dirVer:function (obj) {
             var dir=fs.readdirSync(obj.dirname)
            var str=dir.join(" ");
            var max=0;
            if(!obj.newver){
                var rex=/^v/i;
                for(var i=0;i<dir.length;i++){
                    if(dir[i].match(rex)){
                        var now=Number(dir[i].substring(1))
                        console.log(now)
                        max=now>=max?now:max;
                    }
                }
            //获取了最新版本max
               console.log(max)
                var newV=parseFloat(Number(max)+.1).toFixed(1)
                console.log("newv:"+newV)
                return newV
            }



                // if(obj.newver){
                // //新版本
                // //    当前文档中最大的第一个.前面数字加1
                //     dir
                //     console.log(str)
                //     var rexp=/^./ig;
                //     var max=rexp.exec(str);
                //     console.log(max)
                // }else{
                // //补丁版本
                // //    在当前
                // }
            //TODO:手动输入版本号



        }
    }

    return config;
};