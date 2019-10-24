"use strict";
var $ = require("jquery");
//代理商模块
var agentComponents = /** @class */ (function () {
    function agentComponents() {
        //会员查询内部切换
        this.query_result = '[query-result-id="query-result-id"]'; //查询-查询结果内容
        this.insert_user = '[insert-con-id="insert-con-id"]'; //新增会员内容 
        this.insert_user_href = '[insert-user-href="insert-user-href"]'; //新增用户-btn
        this.data_save = '[data-save-id="data-save-id"]'; //储存数据
        this.data_cancel = '[data-cancel-id="data-cancel-id"]'; //取消储存数据
        this.init();
    }
    ;
    agentComponents.prototype.init = function () {
        this.defaultFun();
    };
    ;
    //默认事件
    agentComponents.prototype.defaultFun = function () {
        var that = this;
        //切换内容模块
        $(that.insert_user_href).click(function () {
            $(that.query_result).addClass("hide");
            $(that.insert_user).removeClass("hide");
        });
        //储存数据
        $(that.data_save).click(function () {
            $(that.insert_user).addClass("hide");
            $(that.query_result).removeClass("hide");
        });
        //取消储存-返回
        $(that.data_cancel).click(function () {
            $(that.insert_user).addClass("hide");
            $(that.query_result).removeClass("hide");
        });
    };
    return agentComponents;
}());
new agentComponents();
module.exports = agentComponents;
