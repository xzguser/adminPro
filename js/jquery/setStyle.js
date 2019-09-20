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
               $($(data_btn)[0]).addClass("white-btn");
               $($(tab_switch)[1]).addClass("hide");
               $($(tab_switch)[2]).addClass("hide");

               
              
               if($('[data-tr="data-tr"]')[0] != undefined){
                    //把获取的tr高度赋值给图标的容器高度
                    var tr =  $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight;
                    
                    $('[data-icon="data-icon"]')[0].style.height= tr+"px";
               }
              
           })();
        }
        //切换事件
        , clickBtn: function () {
            return (function () {
                $(data_btnAll).delegate(data_btn,"click",function (e) {
                   if(e) e.preventDefault();
                    ache.setStyle(e.currentTarget);
                    console.log(e.currentTarget)
                    ache.setTable(e.currentTarget.classList);
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
    };
    //引用加载事件
    ache.init()
})(window, document, jQuery);