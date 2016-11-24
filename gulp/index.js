
var gulp =require ('gulp');
var config =require("./gulp.config")();
// var requireDir=require("require-dir");
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*','*'],lazy: true});
var args = require('yargs').argv;
gulp.task("Default",['Browser-sync'],function(){
    console.log($)
})
gulp.task('Taskling', $.taskListing);
var taskList=require('fs').readdirSync('./gulp/tasks/');
taskList.forEach(function(file){
    require("./tasks/"+file)(gulp,config,$,args);
})
