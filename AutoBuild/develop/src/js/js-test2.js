
(function(){
    $.fn.extend({
        //组件库
        ComponentName:[
            "rich_text",
            "goods",
            "goods_list",
            "image_ad",
            "cube2",
            "title",
            "text_nav",
            "nav",
            "link",
            "search",
            "showcase",
            "line",
            "white",
            "component",
            "store",
            "tag_list",
            "audio",
            "notice"
        ],
        //生成组件
        components:{
            great_rich_text:function(){
                console.log("rich_text")
            },
            great_goods:function(){
                console.log("goods")
            },
            great_goods_list:function(){
                console.log("goods_list")
            },
            great_image_ad:function(){
                console.log("image_ad")
            },
            great_cube2:function(){
                console.log("cube2")
            },
            great_title:function(){
                console.log("title")
            },
            great_text_nav:function(){
                console.log("text_nav")
            },
            great_nav:function(){
                console.log("nav")
            },
            great_link:function(){
                console.log("link")
            },
            great_search:function(){
                console.log("search")
            },
            great_showcase:function(){
                console.log("showcase")
            },
            great_line:function(){
                console.log("line")
            },
            great_white:function(){
                console.log("white")
            },
            great_component:function(){
                console.log("component")
            },
            great_store:function(){
                console.log("store")
            },
            great_tag_list:function(){
                console.log("tag_list")
            },
            great_audio:function(){
                console.log("audio")
            },
            great_notice:function(){
                console.log("notice")
            }
        },
        //获取数据
        getData:function(){
            $.ajax({
                url:"http://localhost:63342/PRO/yZ/src/script/console.json",
                type:"post",
                datatype:"json",
                async:false,
                success:function(res){
                    console.log("以下是配置信息：")
                    console.log(res)
                    var code=res.code;
                    var data=res.data;
                    b=res;
                }
            })
            return {title:b.data.title}
        },

        //调用组件
        callComponent:function(options){
            var defaults={},
                options=$.extend(defaults,options);
            this.click(function(){
                var $this=$(this);
                var fieldType=$this.data("fieldType");
                //console.log(fieldType)
                //console.log($.fn.ComponentName.indexOf(fieldType))

                //判断是否是正常的组件名
                if($.fn.ComponentName.indexOf(fieldType)>=0){
                    eval("$.fn.components."+"great_"+fieldType+"()")
                }else{
                    alert("无效组件")
                }
            })
        },
        //拖动排序
        dropSorting:function(){

        },
        //删除组件
        deleteComponent:function(){

        },
        //编辑组件
        editComponent:function(){

        },

    })

})()
$(function () {
    $(".js-new-field").callComponent({})



})