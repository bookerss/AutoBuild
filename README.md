# 前端自动构建
> 前端自动构建项目，将在项目开发中经常使用的功能一键完成。

###更新版本

>* 2016/11/24 - v0.1.0 - 上传第一版本.<br>


## 说明文档

### 配置config
在gulp.config.js中可以配置所有项目中使用的目录和函数
### 任务写法
 所有的任务在gulp文件夹下的tasks文件夹下面。
 在tasks目录下新家你需要的目录
 gulp会自动获取tasks下的所有*.tasks.js文件中的任务
 **任务编写方法如上**
 ## task.tasks.js
>任务编写例子

```
   module.exports = function (gulp, config, $, args) {
    //----------------base64----------------
    /************在css文件有@import的情况下请先合并再执行该命令************************/
    gulp.task("Base64:NoRun",function(){
        return gulp.src(config.css)
            .pipe($.base64(config.base64.options))
            .pipe(gulp.dest(config.developcss))

    })

};

```




