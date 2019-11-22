"use strict";
var $ = require("jquery");
var param = require("../param/paramSet");
var setStyle = /** @class */ (function () {
    function setStyle() {
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
        this.btnSwitch();
    };
    ;
    //默认事件
    setStyle.prototype.defaultFun = function () {
        var that = this;
        if (!localStorage.getItem("ThemeList")) {
            localStorage.setItem("ThemeList", that.defaultColor);
        }
        //显示出换肤弹出层 加上样式 hide
        $(param.ident.data_style).click(function () {
            $(param.ident.pop_content).removeClass('hide');
        });
        //隐藏掉换肤弹出层 加上样式 hide
        $(param.ident.data_colse).click(function () {
            $(param.ident.pop_content).addClass('hide');
        });
        var getThemeList = localStorage.getItem("ThemeList");
        var theme_con = $(param.ident.theme_switch + ">div");
        var theme_elements = $(param.ident.data_btnAll + ">div");
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
        //搜寻的点击事件
        $(param.ident.data_move).each(function (index, item) {
            $(item).click(function () {
                var getItem = localStorage.getItem("ThemeList");
                var modlue = $($(param.ident.move_module)[index]);
                if (modlue.hasClass("hide")) {
                    $($(param.ident.icon_switch)[index]).attr("class", getItem + "-top-icon");
                    modlue.removeClass("hide");
                }
                else {
                    modlue.addClass("hide");
                    $($(param.ident.icon_switch)[index]).attr("class", getItem + "-bottom-icon");
                }
            });
        });
        //input点击事件
        $(param.ident.check_select).click(function () {
            var moduleChe = $(param.ident.data_check + ">div");
            if ($(param.ident.check_hide).hasClass("hide")) {
                var str = $(param.ident.check_select).val();
                var arr_1 = str.split("、");
                moduleChe.each(function (index, item) {
                    $($(item)[0].children[0]).attr("checked", false);
                    for (var i = 0; i < arr_1.length; i++) {
                        if (arr_1[i] == $($(item)[0].children[0]).val()) {
                            $($(item)[0].children[0]).attr("checked", true);
                        }
                    }
                });
                $(param.ident.check_hide).removeClass("hide");
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
        $(param.ident.data_save).click(function () {
            $(param.ident.pop_content).addClass('hide');
        });
    };
    //头部图片获得焦点事件
    setStyle.prototype.hoverImg = function () {
        var that = this;
        var html = ".html";
        var speed = 150;
        var arr = [];
        var imgHeader = $(param.ident.header_img + ">a");
        for (var i = 0; i < imgHeader.length; i++) {
            var imgW = $(imgHeader)[i];
            arr.push($(imgW)[0].attributes[0].value);
            var one;
            var two;
            $(imgW).hover(function (e) {
                one = $($(e)[0].delegateTarget)[0].children[0].children[0];
                two = $($(e)[0].delegateTarget)[0].children[0].children[1];
                $(one).animate({
                    "top": "40px",
                    "opacity": 0,
                }, speed);
                $(two).animate({
                    "margin-top": "8px",
                }, speed);
            }, function (e) {
                $(one).animate({
                    "top": "0px",
                    "opacity": 1,
                }, speed);
                $(two).animate({
                    "margin-top": "-50px",
                }, speed);
            });
        }
        var href = (window.location.href).split(html);
        var dataHref = href[href.length - href.length].split("/");
        var urlname = dataHref.pop() + html;
        arr.forEach(function (item, index) {
            if (item == urlname) {
                // console.log($(`[href^="${urlname}"]`)[0])
                $("[href^=\"" + urlname + "\"]").off('mouseenter').unbind('mouseleave');
            }
        });
    };
    //换肤的选择切换事件
    setStyle.prototype.clickBtn = function () {
        var that = this;
        var theme_elements = $(param.ident.data_btnAll + ">div");
        theme_elements.each(function (index, item) {
            $(item).click(function () {
                $(theme_elements).removeClass("white-btn");
                that.setStyle(item, index);
                that.saveCon(item);
            });
        });
    };
    //换肤--设置样式
    setStyle.prototype.setStyle = function (tpl, index) {
        var that = this;
        $(tpl).addClass("white-btn");
        var theme_con = $(param.ident.theme_switch + ">div");
        $(theme_con).addClass("hide");
        $($(theme_con)[index]).removeClass("hide");
    };
    //换肤---设置主题保存方法
    setStyle.prototype.saveCon = function (tpl) {
        var that = this;
        $(param.ident.data_save).click(function () {
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
        $(param.ident.header_img).delegate('[img-Switch="img-Switch"]', "click", function (e) {
            if (e)
                e.preventDefault();
            var index = 0;
            for (var i = 0; i < $(param.ident.header_img)[0].children.length; i++) {
                if ($($(param.ident.header_img)[0].children[i].children[0].children[0].children[0]).hasClass("sel-img")) {
                    $($(param.ident.header_img)[0].children[i].children[0].children[0].children[0]).addClass("sel-img1");
                    index = i;
                }
            }
            setTimeout(function () {
                $($(param.ident.header_img)[0].children[index].children[0].children[0].children[0]).removeClass("sel-img1");
                window.location.href = $(e.currentTarget)[0].attributes[0].value;
            }, 300);
        });
    };
    //二级选项栏切换
    setStyle.prototype.twoSwitchBtn = function () {
        var that = this;
        var head_elements = $(param.ident.bar_hurdle + ">div");
        var Cnt_elements = $(param.ident.form_control + ">div");
        head_elements.each(function (index, item) {
            $(item).click(function () {
                var getThemeList = localStorage.getItem("ThemeList");
                $(head_elements).removeClass(getThemeList + "-bar-btn");
                $($(head_elements)[index]).addClass(getThemeList + "-bar-btn");
                //把选项栏选中的值赋予下面的标题
                $(param.ident.title_con)[0].innerText = $($(head_elements)[index])[0].innerText;
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
            var switch_top_module = $($(param.ident.top_module)[i].children);
            switch_top_module.each(function (index, item) {
                $(item).click(function () {
                    var getThemeList = localStorage.getItem("ThemeList");
                    $(switch_top_module).removeClass(getThemeList + "-tar");
                    $($(switch_top_module)[index]).addClass(getThemeList + "-tar");
                    if ($(param.ident.form_control).length == 0) {
                    }
                    else {
                        //显示出对应的html结构
                        for (var k = 0; k < $(param.ident.form_control)[0].children.length; k++) {
                            if (!$($(param.ident.form_control)[0].children[k]).hasClass("hide")) {
                                var switch_module = $(param.ident.form_control)[0].children[k];
                                for (var j = 0; j < $(switch_module)[0].children.length; j++) {
                                    if (j >= 1) {
                                        $($(switch_module)[0].children[j]).addClass("hide");
                                    }
                                }
                                $($(switch_module)[0].children[index + 1]).removeClass("hide");
                            }
                        }
                    }
                });
            });
        };
        // const moduleFor = $(doc)[i].children;
        for (var i = 0; i < $(param.ident.top_module).length; i++) {
            _loop_1();
        }
    };
    //四级选项栏切换
    setStyle.prototype.forSwitchBtn = function () {
        var that = this;
        var datumModule = $(param.ident.datum_bar + ">div");
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
        if ($(param.ident.header_img).length != 0) {
            var head_left_text = $(param.ident.header_img + ">a");
            $(head_left_text).removeClass("green-text blue-text orange-text");
            $(head_left_text).addClass(color + "-text");
        }
        //header-右边文字切换
        that.oneSwitch(param.ident.header_nav, "-text", color);
        //header-右边边框线切换
        if ($(param.ident.header_nav).length != 0) {
            var hea_right = $(param.ident.header_nav + ">div");
            for (var i = 0; i < hea_right.length - 1; i++) {
                $($(hea_right)[i]).removeClass("green-bor-right blue-bor-right orange-bor-right");
                $($(hea_right)[i]).addClass(color + "-bor-right");
            }
        }
        //header-右边btn切换
        that.oneSwitch(param.ident.switch_old, "-btn", color);
        //header-右边图标切换
        that.oneSwitchOrder(param.ident.left_icon, "left-icon-", color);
        //header-右边图标切换
        that.oneSwitchOrder(param.ident.bottom_icon, "bottom-icon-", color);
        //背景切换
        that.oneSwitch(param.ident.navi_bg, "-bg", color);
        //调用切换
        that.oneSwitch(param.ident.bar_hurdle, "-bg", color);
        if ($(param.ident.bar_hurdle).length != 0) {
            that.forSwitch(param.ident.bar_hurdle, "-bar-btn", color);
        }
        //内容背景切换
        that.oneSwitchOrder(param.ident.scro_con, "scr-", color);
        //三级选项栏切换
        if ($(param.ident.top_module).length != 0) {
            that.forSwitch(param.ident.top_module, "-tar", color);
        }
        //四级选项栏
        // param.ident.oneSwitch(param.ident.datum_bar, "-btn-bar", color);
        if ($(param.ident.datum_bar).length != 0) {
            that.forSwitch(param.ident.datum_bar, "-btn-active", color);
        }
        //按钮切换
        that.oneSwitch(param.ident.data_submit, "-btn", color); //深色
        that.oneSwitch(param.ident.data_submit1, "-btn1", color); //浅色
        //文字颜色切换
        that.oneSwitch(param.ident.text_switch, "-text", color); //浅色文本切换
        that.oneSwitch(param.ident.data_text1, "-text1", color); //深色文本切换
        //按钮切换-深色
        if ($(param.ident.btn_color).length != 0) {
            that.forSwitch(param.ident.btn_color, "-btn", color);
        }
        //表格头部颜色
        that.oneSwitch(param.ident.table_hea_bg, "-header-bg", color);
        //公告选线栏切换
        if ($(param.ident.affiche_switch).length != 0) {
            that.forSwitch(param.ident.affiche_switch, "-check", color);
        }
        //表格边框
        that.oneSwitchOrder(param.ident.tr_border, "tr-border-", color);
        //表格td颜色
        that.oneSwitch(param.ident.td_text, "-color", color);
        //注册标题颜色切换
        that.oneSwitchOrder(param.ident.regis_con, "title-", color);
        //搜寻的图标切换
        that.oneSwitch(param.ident.icon_switch, "-bottom-icon", color);
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
    //input-选择事件
    setStyle.prototype.inputHide = function () {
        var that = this;
        var arr = [];
        var moduleChe = $(param.ident.data_check + ">div");
        moduleChe.each(function (index, item) {
            if ($($(item)[0].children[0]).prop("checked")) {
                if (arr.indexOf($($(item)[0].children[0]).val()) === -1) {
                    arr.push($($(item)[0].children[0]).val());
                }
            }
        });
        var str = arr.join("、");
        $(param.ident.check_select).val(str);
        $(param.ident.check_hide).addClass("hide");
    };
    //btn_color 日期选择按钮切换
    setStyle.prototype.btnSwitch = function () {
        var that = this;
        var _loop_3 = function () {
            var Datemodule = $(param.ident.btn_color)[i];
            var _loop_4 = function () {
                var moduleCon = Datemodule.children[j];
                $(moduleCon).click(function () {
                    var Statecolor = localStorage.getItem("ThemeList");
                    for (var k = 0; k < Datemodule.children.length; k++) {
                        // console.log(Datemodule.children[k])
                        if ($(Datemodule.children[k]).hasClass(Statecolor + "-btn")) {
                            // console.log(k)
                            $($(Datemodule.children[k])).removeClass(Statecolor + "-btn");
                        }
                    }
                    $(moduleCon).addClass(Statecolor + "-btn");
                });
            };
            for (var j = 0; j < Datemodule.children.length; j++) {
                _loop_4();
            }
        };
        // console.log($(param.ident.btn_color).length);
        // $(param.ident.btn_color).each((id,it)=>{
        // })
        for (var i = 0; i < $(param.ident.btn_color).length; i++) {
            _loop_3();
        }
        // const btnModule = $(param.ident.btn_color + ">div");
        // console.log(btnModule);
        // btnModule.each((index,item)=>{
        //    $(item).click(function(){
        //         const Statecolor = localStorage.getItem("ThemeList");
        //         $(btnModule).removeClass(Statecolor+"-btn");
        //         $(item).addClass(Statecolor+"-btn");
        //    })
        // })
    };
    return setStyle;
}());
new setStyle();
module.exports = setStyle;
