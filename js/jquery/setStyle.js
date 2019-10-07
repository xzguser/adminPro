// /**
//  * @切换风格
//  * @time:19-9-9
//  */

// (function (win, doc, $) {
    

//     const data_btn = '[data-btn="data-btn"]';
//     const data_btnAll = '[data-btnAll="data-btnAll"]';
//     const tab_switch = '[data-tab-switch="data-tab-switch"]';


//     const bar_hurdle = '[bar-hurdle="bar-hurdle"]';
//     const navi_bg = '[navi-bg="navi-bg"]';

//     const ache = {
//         init: function () {
//             const that = this;
//             return (function () {
                
//                 ache.defaultFun();
             
//                 ache.clickBtn();
//                 ache.imgSwitch();
//                 ache.twoSwitchBtn();
//             })();
//         }
//         //默认事件
//         , defaultFun: function () {
//             return (function () {
//                 //显示弹出层 加上样式 hide
//                 $('[data-style="data-style"]').click(function () {
//                     $('[data-cashap-id="pop-content"]').removeClass('hide')
//                 });
//                 //隐藏弹出层 加上样式 hide
//                 $('[data-close="data-close"]').click(function () {
//                     $('[data-cashap-id="pop-content"]').addClass('hide');
//                 });

//                 let getThemeList = localStorage.getItem("ThemeList");
//                 //判断是否有切换过肤色-从缓存里读取
//                 if (getThemeList != null) {
//                     if (getThemeList == "green") {
//                         $($(data_btn)[0]).addClass("white-btn");
//                         $($(tab_switch)[1]).addClass("hide");
//                         $($(tab_switch)[2]).addClass("hide");
//                     } else if (getThemeList == "blue") {
//                         $($(data_btn)[1]).addClass("white-btn");
//                         $($(tab_switch)[0]).addClass("hide");
//                         $($(tab_switch)[2]).addClass("hide");
//                     } else if (getThemeList == "orange") {
//                         $($(data_btn)[2]).addClass("white-btn");
//                         $($(tab_switch)[0]).addClass("hide");
//                         $($(tab_switch)[1]).addClass("hide");
//                     }
//                     ache.swicthTheme(getThemeList);

//                 } else {
//                     $($(data_btn)[0]).addClass("white-btn");
//                     $($(tab_switch)[1]).addClass("hide");
//                     $($(tab_switch)[2]).addClass("hide");
//                 }

//                 //公告页 
//                 if ($('[data-tr="data-tr"]')[0] != undefined) {
//                     //公告页 把获取的tr高度赋值给图标的容器高度
//                     let tr = $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight;

//                     $('[data-icon="data-icon"]')[0].style.height = tr + "px";
//                 }

//                 //切换主题，直接关掉
//                 $('[data-save="data-save"]').click(function () {
//                     $('[data-cashap-id="pop-content"]').addClass('hide');
//                 })

//             })();
//         }
//         //换肤的选择切换事件
//         , clickBtn: function () {
//             return (function () {
//                 $(data_btnAll).delegate(data_btn, "click", function (e) {
//                     if (e) e.preventDefault();
//                     ache.setStyle(e.currentTarget);
//                     ache.setTable(e.currentTarget.classList);
//                     ache.saveCon(e.currentTarget);
//                 });
//             })();
//         }
//         //头部-图片切换事件 一级切换  a-跳转-动画
//         , imgSwitch: function () {
//             return (function () {
//                 $('[header-img="header-img"]').delegate('[img-Switch="img-Switch"]', "click", function (e) {
//                     if (e) e.preventDefault();
//                     // console.log($('[header-img="header-img"]')[0]);
//                     let index = 0;
//                     for (let i = 0; i < $('[header-img="header-img"]')[0].children.length; i++) {
//                         // console.log($('[header-img="header-img"]')[0].children[i].children[0].children[0].children[0]);
//                         if ($($('[header-img="header-img"]')[0].children[i].children[0].children[0].children[0]).hasClass("sel-img")) {
//                             $($('[header-img="header-img"]')[0].children[i].children[0].children[0].children[0]).addClass("sel-img1");
//                             index = i;
//                         }

//                     }
//                     setTimeout(() => {
//                         $($('[header-img="header-img"]')[0].children[index].children[0].children[0].children[0]).removeClass("sel-img1");
//                         window.location.href = $(e.currentTarget)[0].attributes[0].value;
//                     }, 300);

//                 });
//             })();
//         }
//         //设置样式
//         , setStyle: function (tpl) {
//             return (function () {
//                 $(data_btn).removeClass("white-btn");
//                 $(tpl).addClass("white-btn");
//             })();
//         }
//         , setTable: function (str) {
//             return (function () {
//                 if (str[1] === "green-btn") {
//                     $($(tab_switch)[0]).removeClass("hide");
//                     $($(tab_switch)[1]).addClass("hide");
//                     $($(tab_switch)[2]).addClass("hide")
//                 } else if (str[1] === "blue-btn") {
//                     $($(tab_switch)[0]).addClass("hide");
//                     $($(tab_switch)[1]).removeClass("hide");
//                     $($(tab_switch)[2]).addClass("hide")
//                 } else if (str[1] === "orange-btn") {
//                     $($(tab_switch)[0]).addClass("hide");
//                     $($(tab_switch)[1]).addClass("hide");
//                     $($(tab_switch)[2]).removeClass("hide")
//                 }
//             })();
//         }
//         //保存选中内容
//         , saveCon: function (tpl) {
//             $('[data-save="data-save"]').click(function () {
//                 // console.log(tpl);
//                 var swit = tpl.className.split(/\s+/)[1];

//                 if (swit == "green-btn") {
//                     ache.swicthTheme("green");
//                 } else if (swit == "blue-btn") {
//                     ache.swicthTheme("blue");
//                 } else if (swit == "orange-btn") {
//                     ache.swicthTheme("orange");
//                 }

//             })
//         }
//         //切换主题的内容模块
//         , swicthTheme: function (color) {

//             //header-左边图片下的文字切换
//             const header_img = '[header-img="header-img"]';
//             if ($(header_img).length != 0) {
//                 for (var i = 0; i < $(header_img)[0].children.length; i++) {
//                     $(header_img)[0].children[i].className = color + "-text";
//                 }
//             }

//             //header-右边文字切换
//             const header_nav = '[header-nav="header-nav"]';
//             ache.oneSwitch(header_nav, "-text", color);

//             //header-右边边框线切换
//             if ($(header_nav).length != 0) {
//                 // console.log($(header_nav)[0].children.length);
//                 ache.forSwitch(header_nav, "-bor-right", color);
//             }

//             //header-右边btn切换
//             const switch_old = '[switch-old="switch-old"]';
//             ache.oneSwitch(switch_old, "-btn", color);

//             //header-右边图标切换
//             const left_icon = '[left-icon="left-icon"]';
//             ache.oneSwitchOrder(left_icon, "left-icon-", color);

//             //header-右边图标切换
//             const bottom_icon = '[bottom-icon="bottom-icon"]';
//             ache.oneSwitchOrder(bottom_icon, "bottom-icon-", color);

//             //标题栏切换

//             ache.oneSwitch(navi_bg, "-bg", color);

//             //调用切换事件
//             ache.oneSwitch(bar_hurdle, "-bg", color);
//             if ($(bar_hurdle).length != 0) {
//                 ache.forSwitch(bar_hurdle, "-bar-btn", color);
//             }

//             //内容背景切换
//             ache.oneSwitchOrder('[scro-con="scro-con"]', "scr-", color);

//             //选项栏切换
//             const top_module = '[top-module="top-module"]';
//             if ($(top_module).length != 0) {
//                 ache.forSwitch(top_module, "-tar", color);
//             }

//             //次一级选项栏
//             const datum_bar = '[datum-bar="datum-bar"]';
//             ache.oneSwitch(datum_bar, "-btn-bar", color);
//             if ($(datum_bar).length != 0) {
//                 ache.forSwitch(datum_bar, "-btn-active", color);
//             }


//             //按钮切换事件
//             ache.oneSwitch('[data-submit="data-submit"]', "-btn", color);  //深色
//             ache.oneSwitch('[data-submit1="data-submit1"]', "-btn1", color);  //浅色

//             //文字颜色切换
//             ache.oneSwitch('[text-switch="text-switch"]', "-text", color);   //浅色文本切换
//             ache.oneSwitch('[data-text1="data-text1"]', "-text1", color); //深色文本切换
//             //按钮切换-深色
//             const btn_color = $('[btn-color="btn-color"]');
//             if ($(btn_color).length != 0) {
//                 ache.forSwitch(btn_color, "-btn", color);
//             }

//             //表格头部颜色
//             ache.oneSwitch('[table-hea-bg="table-hea-bg"]', "-header-bg", color);

//             //公告选线栏切换
//             const affiche_switch = $('[affiche-switch="affiche-switch"]')
//             if ($(affiche_switch).length != 0) {
//                 ache.forSwitch(affiche_switch, "-check", color);
//             }

//             //表格边框
//             const tr_border = $('[tr-border="tr-border"]');
//             ache.oneSwitchOrder(tr_border, "tr-border-", color);

//             //表格td颜色
//             ache.oneSwitch('[td-text="td-text"]', "-color", color);

//             //注册标题颜色切换
//             ache.oneSwitchOrder('[regis-con="regis-con"]', "title-", color);

//             //登录页-底部边框线切换
//             ache.oneSwitch('[border-bottom="border-bottom"]', "-bor-bottom", color);

//             //储存当前肤色
//             localStorage.setItem("ThemeList", color);
//         }
//         //公共选中事件的切换
//         , forSwitch: function (doc, str, color) {
//             for (var i = 0; i < $(doc)[0].children.length; i++) {
//                 if ($($(doc)[0].children[i]).hasClass('green' + str) || $($(doc)[0].children[i]).hasClass('blue' + str) || $($(doc)[0].children[i]).hasClass('orange' + str)) {

//                     $($(doc)[0].children[i]).removeClass('green' + str + ' blue' + str + ' orange' + str);
//                     $($(doc)[0].children[i]).addClass(color + str);
//                 }
//             }
//         }
//         //单层级切换
//         , oneSwitch: function (doc, str, color) {
//             $(doc).removeClass('green' + str + ' blue' + str + ' orange' + str);
//             $(doc).addClass(color + str);
//         }
//         //单层级切换 - 字符串拼接取反
//         , oneSwitchOrder: function (doc, str, color) {
//             $(doc).removeClass(str + 'green ' + str + 'blue ' + str + 'orange');
//             $(doc).addClass(str + color);
//         }

       
//         //二级选项栏切换
//         , twoSwitchBtn: function () {
            
//             const elements = $(bar_hurdle+">div");
//             // console.log(elements)
            
//             elements.each((index , item)=>{
//                 // console.log(index)
//                 var i_index=$(item).attr('index','index-i'+(index+1));

//                 $(i_index).click(function(){

//                     let  getThemeList = localStorage.getItem("ThemeList");
//                     elements.each((index)=>{
//                        $($(elements)[index]).removeClass(getThemeList+"-bar-btn");
//                     })
//                     $($(elements)[index]).addClass(getThemeList+"-bar-btn")
//                 })

//             })

//         }
//     };
//     //引用加载事件
//     ache.init()
// })(window, document, jQuery);