/**
 * @切换风格
 * @time:19-9-9
 */

(function (win, doc, $) {
    const data_btn = '[data-btn="data-btn"]';
    const data_btnAll='[data-btnAll="data-btnAll"]';
    const tab_switch = '[data-tab-switch="data-tab-switch"]';

    //获取表格中的第一行高度
    // const data_tr =  '[data-tr="data-tr"]';

    // $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight
    const ache = {
        init: function () {
            const that = this;
            return (function () {
                ache.defaultFun();
                ache.clickBtn();
            })();
        }
        //默认事件
        , defaultFun: function () {
           return (function () {
               //显示弹出层 加上样式 hide
               $('[data-style="data-style"]').click(function () {
                   $('[data-cashap-id="pop-content"]').removeClass('hide')
               });
               //隐藏弹出层 加上样式 hide
               $('[data-close="data-close"]').click(function () {
                   $('[data-cashap-id="pop-content"]').addClass('hide');
               });
               

         
               var getThemeList=localStorage.getItem("ThemeList");
               console.log(getThemeList);
               //判断是否有切换过肤色-从缓存里读取
               if(getThemeList != null){
                    if(getThemeList == "green"){
                        $($(data_btn)[0]).addClass("white-btn");
                        $($(tab_switch)[1]).addClass("hide");
                        $($(tab_switch)[2]).addClass("hide");
                    }else if(getThemeList == "blue"){
                        $($(data_btn)[1]).addClass("white-btn");
                        $($(tab_switch)[0]).addClass("hide");
                        $($(tab_switch)[2]).addClass("hide");
                    }else if(getThemeList == "orange"){
                        $($(data_btn)[2]).addClass("white-btn");
                        $($(tab_switch)[0]).addClass("hide");
                        $($(tab_switch)[1]).addClass("hide");
                    }
                    ache.swicthTheme(getThemeList);

               }else{
                    $($(data_btn)[0]).addClass("white-btn");
                    $($(tab_switch)[1]).addClass("hide");
                    $($(tab_switch)[2]).addClass("hide");
               }
               
              
               if($('[data-tr="data-tr"]')[0] != undefined){
                    //把获取的tr高度赋值给图标的容器高度
                    var tr =  $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight;
                    
                    $('[data-icon="data-icon"]')[0].style.height= tr+"px";
               }
               
               //切换主题，直接关掉
               $('[data-save="data-save"]').click(function () {
                    $('[data-cashap-id="pop-content"]').addClass('hide');
               })
              
           })();
        }
        //切换事件
        , clickBtn: function () {
            return (function () {
                $(data_btnAll).delegate(data_btn,"click",function (e) {
                   if(e) e.preventDefault();
                    ache.setStyle(e.currentTarget);
                    //console.log(e.currentTarget);
                    ache.setTable(e.currentTarget.classList);
                    ache.saveCon(e.currentTarget)
                });
            })();
        }
        ,setStyle:function (tpl) {
            return (function () {
                $(data_btn).removeClass("white-btn");
                $(tpl).addClass("white-btn");
            })();
        }
        ,setTable:function (str) {
            return (function () {
                if(str[1]==="green-btn"){
                    $($(tab_switch)[0]).removeClass("hide");
                    $($(tab_switch)[1]).addClass("hide");
                    $($(tab_switch)[2]).addClass("hide")
                }else if(str[1]==="blue-btn"){
                    $($(tab_switch)[0]).addClass("hide");
                    $($(tab_switch)[1]).removeClass("hide");
                    $($(tab_switch)[2]).addClass("hide")
                }else if(str[1]==="orange-btn"){
                    $($(tab_switch)[0]).addClass("hide");
                    $($(tab_switch)[1]).addClass("hide");
                    $($(tab_switch)[2]).removeClass("hide")
                }
            })();
        }
        //保存选中内容
        ,saveCon:function(tpl) {
            $('[data-save="data-save"]').click(function () {
            
                var swit = tpl.className.split(/\s+/)[1];
                
                if(swit == "green-btn"){
                    
                    ache.swicthTheme("green");
                }else if(swit == "blue-btn"){
                    ache.swicthTheme("blue");
                }else if(swit == "orange-btn"){
                    ache.swicthTheme("orange");
                }
                
           })
        }
        //切换主题
        ,swicthTheme:function(color) {

            //header-左边图片下的文字切换
            const header_img = '[header-img="header-img"]';
            if($(header_img).length != 0){
                for(var i = 0; i< $(header_img)[0].children.length;i++){
                    $(header_img)[0].children[i].className = color+"-text";
                }
            }
            
            //header-右边文字切换
            const header_nav = '[header-nav="header-nav"]';
            $(header_nav).removeClass("green-text blue-text orange-text");
            $(header_nav).addClass(color+"-text");
            
            //header-右边边框线切换
            if($(header_nav).length != 0){
                for(var i = 0;i<$(header_nav)[0].children.length-1;i++){
                    $($($(header_nav)[0].children[i])[0]).removeClass("green-bor-right blue-bor-right orange-bor-right");
                    $($($(header_nav)[0].children[i])[0]).addClass(color+"-bor-right");
               }
            }
          
            //btn切换
            $('[switch-old="switch-old"]').removeClass("green-btn blue-btn orange-btn");
            $('[switch-old="switch-old"]').addClass(color+"-btn");

            //图标切换
            $('[left-icon="left-icon"]').removeClass("left-icon-green left-icon-blue left-icon-orange");
            $('[left-icon="left-icon"]').addClass("left-icon-"+color);
            //图标切换
            $('[bottom-icon="bottom-icon"]').removeClass("bottom-icon-green bottom-icon-blue bottom-icon-orange");
            $('[bottom-icon="bottom-icon"]').addClass("bottom-icon-"+color);

            //标题栏切换
            const navi_bg = '[navi-bg="navi-bg"]';
            $(navi_bg).removeClass("green-bg blue-bg orange-bg");
            $(navi_bg).addClass(color+"-bg");
            //调用切换事件
            if($(navi_bg).length != 0){
                ache.forSwitch(navi_bg,"-btn",color);
            }
           
            

            //内容背景切换
            $('[scro-con="scro-con"]').removeClass("scr-green scr-blue scr-orange");
            $('[scro-con="scro-con"]').addClass("scr-"+color);
            
            //选项栏切换
            const top_module = '[top-module="top-module"]';
            if($(top_module).length != 0){
                ache.forSwitch(top_module,"-tar",color);
            }
            

            //新增用户切换
            $('[text-switch="text-switch"]').removeClass("green-text blue-text orange-text");
            $('[text-switch="text-switch"]').addClass(color+"-text");

            //次一级选项栏
            const datum_bar = '[datum-bar="datum-bar"]';
         
            $(datum_bar).removeClass("green-btn-bar blue-btn-bar orange-btn-bar");
            $(datum_bar).addClass(color+"-btn-bar");
              if($(datum_bar).length != 0){
                ache.forSwitch(datum_bar,"-btn-active",color);
              }
            
           
            //按钮切换事件
            $('[data-submit="data-submit"]').removeClass("green-btn blue-btn orange-btn");
            $('[data-submit="data-submit"]').addClass(color+"-btn");
            //按钮切换事件
            $('[data-submit1="data-submit1"]').removeClass("green-btn1 blue-btn1 orange-btn1");
            $('[data-submit1="data-submit1"]').addClass(color+"-btn1");
            //深色文本切换
            $('[data-text1="data-text1"]').removeClass("green-text1 blue-text1 orange-text1");
            $('[data-text1="data-text1"]').addClass(color+"-text1");

            //按钮切换-深色
            const btn_color = $('[btn-color="btn-color"]');
            if($(btn_color).length != 0){
                ache.forSwitch(btn_color,"-btn",color);
            }
            
            //表格头部颜色
            $('[table-hea-bg="table-hea-bg"]').removeClass("green-header-bg blue-header-bg orange-header-bg");
            $('[table-hea-bg="table-hea-bg"]').addClass(color+"-header-bg");
            
            //公告选线栏切换
             const affiche_switch =  $('[affiche-switch="affiche-switch"]')
            if($(affiche_switch).length != 0){
                ache.forSwitch(affiche_switch,"-check",color);
            }

            //表格边框
            const tr_border = $('[tr-border="tr-border"]');
            $(tr_border).removeClass("tr-border-green tr-border-blue tr-border-orange");
            $(tr_border).addClass("tr-border-"+color);

            //表格td颜色
            $('[td-text="td-text"]').removeClass("green-color blue-color orang-color");
            $('[td-text="td-text"]').addClass(color+"-color");

            //注册标题颜色切换
            $('[regis-con="regis-con"]').removeClass("title-green title-blue title-orange");
            $('[regis-con="regis-con"]').addClass("title-"+color);

            //底部边框线切换
            $('[border-bottom="border-bottom"]').removeClass("green-bor-bottom blue-bor-bottom orange-bor-bottom");
            $('[border-bottom="border-bottom"]').addClass(color+"-bor-bottom");
            localStorage.setItem("ThemeList",color);
        }
        //选中事件的切换
        ,forSwitch:function(fis,str,color){
            for(var i = 0; i<$(fis)[0].children.length;i++){
                if($($(fis)[0].children[i]).hasClass('green'+str) || $($(fis)[0].children[i]).hasClass('blue'+str) || $($(fis)[0].children[i]).hasClass('orange'+str)){
         
                    $($(fis)[0].children[i]).removeClass('green'+str+' blue'+str+' orange'+str);
                    $($(fis)[0].children[i]).addClass(color+str);
                }
            }
        }
    };
    //引用加载事件
    ache.init()
})(window, document, jQuery);