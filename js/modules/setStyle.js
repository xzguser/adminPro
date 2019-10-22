"use strict";
var $ = require("jquery");
var setStyle = /** @class */ (function () {
    function setStyle() {
        this.data_btnAll = '[data-btnAll="data-btnAll"]';
        this.data_style = '[data-style="data-style"]';
        this.pop_content = '[data-cashap-id="pop-content"]';
        this.data_colse = '[data-close="data-close"]';
        this.data_save = '[data-save="data-save"]';
        //换肤内容
        this.header_img = '[header-img="header-img"]';
        this.bar_hurdle = '[bar-hurdle="bar-hurdle"]';
        this.navi_bg = '[navi-bg="navi-bg"]';
        this.header_nav = '[header-nav="header-nav"]';
        this.switch_old = '[switch-old="switch-old"]';
        this.left_icon = '[left-icon="left-icon"]';
        this.bottom_icon = '[bottom-icon="bottom-icon"]';
        this.top_module = '[top-module="top-module"]';
        this.datum_bar = '[datum-bar="datum-bar"]';
        this.btn_color = '[btn-color="btn-color"]';
        this.affiche_switch = '[affiche-switch="affiche-switch"]';
        this.tr_border = '[tr-border="tr-border"]';
        this.scro_con = '[scro-con="scro-con"]'; //外层背景
        this.data_submit = '[data-submit="data-submit"]';
        this.data_submit1 = '[data-submit1="data-submit1"]';
        this.text_switch = '[text-switch="text-switch"]';
        this.data_text1 = '[data-text1="data-text1"]';
        this.table_hea_bg = '[table-hea-bg="table-hea-bg"]';
        this.td_text = '[td-text="td-text"]';
        this.regis_con = '[regis-con="regis-con"]';
        // border_bottom = '[border-bottom="border-bottom"]';
        this.title_con = '[title-con="title-con"]';
        this.form_control = '[form-control="form-control"]'; //外层控制主体内容切换
        this.main_con = '[main-con="main-con"]'; //二层内容切换
        this.theme_switch = '[theme-switch="theme-switch"]'; //切换主题显示图
        this.data_move = '[data-move="data-move"]'; //进阶搜寻的点击事件
        this.move_module = '[move-module="move-module"]'; //搜寻要显示的内容
        this.icon_switch = '[icon-switch="icon-switch"]'; //搜寻切换的图标
        this.check_select = '[check-select="check-select"]'; //select
        this.check_hide = '[check-hide="check-hide"]'; //checkbox的容器
        this.data_check = '[data-check="data-check"]'; //  显示出来的checkbox
        this.defaultColor = "green";
        this.init();
    }
    ;
    setStyle.prototype.init = function () {
        this.hoverImg();
        this.defaultFun();
        this.clickBtn();
        this.imgSwitch();
        this.twoSwitchBtn();
        this.threeSwitchBtn();
        this.forSwitchBtn();
    };
    ;
    //默认事件
    setStyle.prototype.defaultFun = function () {
        var that = this;
        if (!localStorage.getItem("ThemeList")) {
            localStorage.setItem("ThemeList", that.defaultColor);
        }
        //显示弹出层 加上样式 hide
        $(that.data_style).click(function () {
            $(that.pop_content).removeClass('hide');
        });
        //隐藏弹出层 加上样式 hide
        $(that.data_colse).click(function () {
            $(that.pop_content).addClass('hide');
        });
        var getThemeList = localStorage.getItem("ThemeList");
        var theme_con = $(that.theme_switch + ">div");
        var theme_elements = $(that.data_btnAll + ">div");
        $(theme_con).addClass("hide");
        if (getThemeList != null) {
            if (getThemeList == "green") {
                $($(theme_elements)[0]).addClass("white-btn");
                $($(theme_con)[0]).removeClass("hide");
            }
            else if (getThemeList == "blue") {
                $($(theme_elements)[1]).addClass("white-btn");
                $($(theme_con)[1]).removeClass("hide");
            }
            else if (getThemeList == "orange") {
                $($(theme_elements)[2]).addClass("white-btn");
                $($(theme_con)[2]).removeClass("hide");
            }
            that.swicthTheme(getThemeList);
        }
        //公告页 私有-login_affiche.html
        if ($('[data-tr="data-tr"]')[0] != undefined) {
            //公告页 把获取的tr高度赋值给图标的容器高度
            var tr = $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight;
            $('[data-icon="data-icon"]')[0].style.height = tr + "px";
        }
        //搜寻的点击事件
        $(that.data_move).each(function (index, item) {
            $(item).click(function () {
                var getItem = localStorage.getItem("ThemeList");
                var modlue = $($(that.move_module)[index]);
                if (modlue.hasClass("hide")) {
                    $($(that.icon_switch)[index]).attr("class", getItem + "-top-icon");
                    modlue.removeClass("hide");
                }
                else {
                    modlue.addClass("hide");
                    $($(that.icon_switch)[index]).attr("class", getItem + "-bottom-icon");
                }
            });
        });
        //input点击事件
        $(that.check_select).click(function () {
            var moduleChe = $(that.data_check + ">div");
            if ($(that.check_hide).hasClass("hide")) {
                var str = $(that.check_select).val();
                var arr_1 = str.split("、");
                moduleChe.each(function (index, item) {
                    $($(item)[0].children[0]).attr("checked", false);
                    for (var i = 0; i < arr_1.length; i++) {
                        // console.log(arr[i])
                        if (arr_1[i] == $($(item)[0].children[0]).val()) {
                            $($(item)[0].children[0]).attr("checked", true);
                        }
                    }
                });
                $(that.check_hide).removeClass("hide");
            }
            else {
                that.inputHide();
            }
        });
        //点击空白区域-触发容器隐藏事件
        $('[main-con="main-con"]').click(function (e) {
            var _con = $('[check-hide="check-hide"]'); // 设置目标区域
            var _input = $('[check-select="check-select"]');
            if (!_con.is(e.target) && !_input.is(e.target) && _con.has(e.target).length === 0 && _input.has(e.target).length === 0) {
                that.inputHide();
            }
        });
        //切换主题，直接关掉
        $(that.data_save).click(function () {
            $(that.pop_content).addClass('hide');
        });
    };
    setStyle.prototype.hoverImg = function () {
        var that = this;
        var html = ".html";
        var tiem = "5s";
        var speed = 150;
        var arr = [];
        var imgHeader = $(that.header_img + ">a");
        for (var i = 0; i < imgHeader.length; i++) {
            var imgW = $(imgHeader)[i];
            arr.push($(imgW)[0].attributes[0].value);
            $(imgW).hover(function (e) {
                var one = $($(e)[0].delegateTarget)[0].children[0].children[0];
                var two = $($(e)[0].delegateTarget)[0].children[0].children[1];
                $(one).animate({
                    "top": "40px",
                    "opacity": 0,
                    "animation-duration": tiem,
                    "-webkit-animation-duration": tiem,
                }, speed);
                $(two).animate({
                    "margin-top": "8px",
                    "animation-duration": tiem,
                    "-webkit-animation-duration": tiem,
                }, speed);
            }, function (e) {
                var one = $($(e)[0].delegateTarget)[0].children[0].children[0];
                var two = $($(e)[0].delegateTarget)[0].children[0].children[1];
                $(one).animate({
                    "animation-duration": tiem,
                    "-webkit-animation-duration": tiem,
                    "top": "0px",
                    "opacity": 1,
                }, speed);
                $(two).animate({
                    "margin-top": "-50px",
                    "animation-duration": "",
                    "-webkit-animation-duration": tiem,
                }, speed);
            });
        }
        var href = (window.location.href).split(html);
        var dataHref = href[href.length - href.length].split("/");
        var urlname = dataHref.pop() + html;
        // console.log(arr)
        arr.forEach(function (item, index) {
            if (item == urlname) {
                // console.log(item)
                // console.log(urlname);
                // console.log($(`[href^="${urlname}"]`))
                $("[href^=\"" + urlname + "\"]").off('mouseenter').unbind('mouseleave');
            }
        });
    };
    //换肤的选择切换事件
    setStyle.prototype.clickBtn = function () {
        var that = this;
        var theme_elements = $(that.data_btnAll + ">div");
        theme_elements.each(function (index, item) {
            $(item).click(function () {
                $(theme_elements).removeClass("white-btn");
                that.setStyle(item, index);
                that.saveCon(item);
            });
        });
    };
    //设置样式
    setStyle.prototype.setStyle = function (tpl, index) {
        var that = this;
        $(tpl).addClass("white-btn");
        var theme_con = $(that.theme_switch + ">div");
        $(theme_con).addClass("hide");
        $($(theme_con)[index]).removeClass("hide");
    };
    //设置主题保存方法
    setStyle.prototype.saveCon = function (tpl) {
        var that = this;
        $(that.data_save).click(function () {
            // console.log(tpl)
            var swit = tpl.classList[1];
            if (swit == "green-btn") {
                that.swicthTheme("green");
            }
            else if (swit == "blue-btn") {
                that.swicthTheme("blue");
            }
            else if (swit == "orange-btn") {
                that.swicthTheme("orange");
            }
        });
    };
    //头部-图片切换事件 一级切换  a-跳转-动画
    setStyle.prototype.imgSwitch = function () {
        var that = this;
        $(that.header_img).delegate('[img-Switch="img-Switch"]', "click", function (e) {
            if (e)
                e.preventDefault();
            var index = 0;
            for (var i = 0; i < $(that.header_img)[0].children.length; i++) {
                // console.log($($(that.header_img)[0].children[i].children[0].children[0].children[0]));
                if ($($(that.header_img)[0].children[i].children[0].children[0].children[0]).hasClass("sel-img")) {
                    $($(that.header_img)[0].children[i].children[0].children[0].children[0]).addClass("sel-img1");
                    index = i;
                }
            }
            setTimeout(function () {
                $($(that.header_img)[0].children[index].children[0].children[0].children[0]).removeClass("sel-img1");
                window.location.href = $(e.currentTarget)[0].attributes[0].value;
            }, 300);
            // window.location.href = $(e.currentTarget)[0].attributes[0].value;
        });
    };
    //二级选项栏切换
    setStyle.prototype.twoSwitchBtn = function () {
        var that = this;
        var head_elements = $(that.bar_hurdle + ">div");
        var Cnt_elements = $(that.form_control + ">div");
        head_elements.each(function (index, item) {
            $(item).click(function () {
                var getThemeList = localStorage.getItem("ThemeList");
                $(head_elements).removeClass(getThemeList + "-bar-btn");
                $($(head_elements)[index]).addClass(getThemeList + "-bar-btn");
                console.log(getThemeList + "-bar-btn");
                //把选项栏选中的值赋予下面的标题
                $(that.title_con)[0].innerText = $($(head_elements)[index])[0].innerText;
                //控制显示的对应内容
                $(Cnt_elements).addClass("hide");
                $($(Cnt_elements)[index]).removeClass("hide");
            });
        });
    };
    ;
    //三级选项栏切换
    setStyle.prototype.threeSwitchBtn = function () {
        var that = this;
        var _loop_1 = function () {
            // console.log($(that.top_module)[i]);
            var switch_top_module = $($(that.top_module)[i].children);
            switch_top_module.each(function (index, item) {
                $(item).click(function () {
                    var getThemeList = localStorage.getItem("ThemeList");
                    $(switch_top_module).removeClass(getThemeList + "-tar");
                    $($(switch_top_module)[index]).addClass(getThemeList + "-tar");
                    // console.log(index)
                    //显示出对应的html结构
                    for (var k = 0; k < $(that.form_control)[0].children.length; k++) {
                        if (!$($(that.form_control)[0].children[k]).hasClass("hide")) {
                            var switch_module = $(that.form_control)[0].children[k];
                            for (var j = 0; j < $(switch_module)[0].children.length; j++) {
                                if (j >= 1) {
                                    $($(switch_module)[0].children[j]).addClass("hide");
                                }
                            }
                            $($(switch_module)[0].children[index + 1]).removeClass("hide");
                        }
                    }
                });
            });
        };
        // const moduleFor = $(doc)[i].children;
        for (var i = 0; i < $(that.top_module).length; i++) {
            _loop_1();
        }
    };
    //四级选项栏切换
    setStyle.prototype.forSwitchBtn = function () {
        var that = this;
        var datumModule = $(that.datum_bar + ">div");
        datumModule.each(function (index, item) {
            $(item).click(function () {
                var getThemeList = localStorage.getItem("ThemeList");
                $(datumModule).removeClass(getThemeList + "-btn-active");
                $(item).addClass(getThemeList + "-btn-active");
            });
        });
    };
    //换肤的方法
    setStyle.prototype.swicthTheme = function (color) {
        var that = this;
        //header-左边图片下的文字切换
        if ($(that.header_img).length != 0) {
            var head_left_text = $(that.header_img + ">a");
            $(head_left_text).removeClass("green-text blue-text orange-text");
            $(head_left_text).addClass(color + "-text");
        }
        //header-右边文字切换
        that.oneSwitch(that.header_nav, "-text", color);
        //header-右边边框线切换
        if ($(that.header_nav).length != 0) {
            var hea_right = $(that.header_nav + ">div");
            for (var i = 0; i < hea_right.length - 1; i++) {
                $($(hea_right)[i]).removeClass("green-bor-right blue-bor-right orange-bor-right");
                $($(hea_right)[i]).addClass(color + "-bor-right");
            }
            // hea_right.each((index,item)=>{
            //     $(item).removeClass("green-bor-right blue-bor-right orange-bor-right");
            //     $(item).addClass(color+"-bor-right");
            // })
            //that.forSwitch($(that.header_nav)[0], "-bor-right", color);
        }
        //header-右边btn切换
        that.oneSwitch(that.switch_old, "-btn", color);
        //header-右边图标切换
        that.oneSwitchOrder(that.left_icon, "left-icon-", color);
        //header-右边图标切换
        that.oneSwitchOrder(that.bottom_icon, "bottom-icon-", color);
        //背景切换
        that.oneSwitch(that.navi_bg, "-bg", color);
        //调用切换
        that.oneSwitch(that.bar_hurdle, "-bg", color);
        if ($(that.bar_hurdle).length != 0) {
            that.forSwitch(that.bar_hurdle, "-bar-btn", color);
        }
        //内容背景切换
        that.oneSwitchOrder(that.scro_con, "scr-", color);
        //三级选项栏切换
        if ($(that.top_module).length != 0) {
            that.forSwitch(that.top_module, "-tar", color);
        }
        //四级选项栏
        that.oneSwitch(that.datum_bar, "-btn-bar", color);
        if ($(that.datum_bar).length != 0) {
            that.forSwitch(that.datum_bar, "-btn-active", color);
        }
        //按钮切换
        that.oneSwitch(that.data_submit, "-btn", color); //深色
        that.oneSwitch(that.data_submit1, "-btn1", color); //浅色
        //文字颜色切换
        that.oneSwitch(that.text_switch, "-text", color); //浅色文本切换
        that.oneSwitch(that.data_text1, "-text1", color); //深色文本切换
        //按钮切换-深色
        if ($(that.btn_color).length != 0) {
            that.forSwitch(that.btn_color, "-btn", color);
        }
        //表格头部颜色
        that.oneSwitch(that.table_hea_bg, "-header-bg", color);
        //公告选线栏切换
        if ($(that.affiche_switch).length != 0) {
            that.forSwitch(that.affiche_switch, "-check", color);
        }
        //表格边框
        that.oneSwitchOrder(that.tr_border, "tr-border-", color);
        //表格td颜色
        that.oneSwitch(that.td_text, "-color", color);
        //注册标题颜色切换
        that.oneSwitchOrder(that.regis_con, "title-", color);
        //登录页-底部边框线切换
        // that.oneSwitch(that.border_bottom, "-bor-bottom", color);
        //搜寻的图标切换
        that.oneSwitch(that.icon_switch, "-bottom-icon", color);
        //储存当前肤色
        localStorage.setItem("ThemeList", color);
    };
    //公共选中事件的切换
    setStyle.prototype.forSwitch = function (doc, str, color) {
        var _loop_2 = function () {
            var moduleFor = $(doc)[i].children;
            $(moduleFor).each(function (index, item) {
                if ($($(moduleFor)[index]).hasClass('green' + str) || $($(moduleFor)[index]).hasClass('blue' + str) || $($(moduleFor)[index]).hasClass('orange' + str)) {
                    $(moduleFor).removeClass('green' + str + ' blue' + str + ' orange' + str);
                    $($(moduleFor)[index]).addClass(color + str);
                }
            });
        };
        for (var i = 0; i < $(doc).length; i++) {
            _loop_2();
        }
    };
    //单层级切换
    setStyle.prototype.oneSwitch = function (doc, str, color) {
        $(doc).removeClass('green' + str + ' blue' + str + ' orange' + str);
        $(doc).addClass(color + str);
    };
    //单层级切换 - 字符串拼接取反
    setStyle.prototype.oneSwitchOrder = function (doc, str, color) {
        $(doc).removeClass(str + 'green ' + str + 'blue ' + str + 'orange');
        $(doc).addClass(str + color);
    };
    setStyle.prototype.inputHide = function () {
        var that = this;
        var arr = [];
        var moduleChe = $(that.data_check + ">div");
        moduleChe.each(function (index, item) {
            if ($($(item)[0].children[0]).prop("checked")) {
                if (arr.indexOf($($(item)[0].children[0]).val()) === -1) {
                    arr.push($($(item)[0].children[0]).val());
                }
            }
        });
        var str = arr.join("、");
        $(that.check_select).val(str);
        // console.log(str);
        $(that.check_hide).addClass("hide");
    };
    return setStyle;
}());
new setStyle();
module.exports = setStyle;
