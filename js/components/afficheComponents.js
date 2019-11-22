"use strict";
var $ = require("jquery");
//公告模块
var afficheComponents = /** @class */ (function () {
    function afficheComponents() {
        //切换选择
        this.affiche_switch = '[affiche-switch="affiche-switch"]';
        //切换的内容模块
        this.affiche_module = '[affiche-module="affiche-module"]';
        this.init();
    }
    ;
    afficheComponents.prototype.init = function () {
        this.defaultFun();
        this.afficheSwitch();
    };
    ;
    //默认事件
    afficheComponents.prototype.defaultFun = function () {
        //公告页 私有-login_affiche.html
        if ($('[data-tr="data-tr"]')[0] != undefined) {
            //公告页 把获取的tr高度赋值给图标的容器高度
            var tr = $('[data-tr="data-tr"]')[0].children[1].children[0].clientHeight;
            $('[data-icon="data-icon"]')[0].style.height = tr + "px";
        }
    };
    //公告表格切换
    afficheComponents.prototype.afficheSwitch = function () {
        var that = this;
        var Switch = $(that.affiche_switch + ">div");
        var Module = $(that.affiche_module + ">div");
        var color = localStorage.getItem("ThemeList");
        Switch.each(function (index, item) {
            $(item).click(function () {
                $(Switch).removeClass(color + "-check");
                $(item).addClass(color + "-check");
                $(Module).addClass("hide");
                $($(Module)[index]).removeClass("hide");
            });
        });
    };
    return afficheComponents;
}());
new afficheComponents();
module.exports = afficheComponents;
