"use strict";
var $ = require("jquery");
var Common = /** @class */ (function () {
    function Common() {
        this.TagName = ["LABEL", "DIV", "", "", ""];
        this.ImgURL = "../style/img";
        this.ScriptURL = "../dist";
        this.init();
    }
    Common.prototype.init = function () {
        var _this = this;
        $("body").children().each(function (index, item) {
            //  if ($(item)[0].tagName == "DIV") {
            var dom = $(item).html().toString();
            dom = dom.replace(/{{#ImgURL}}/g, _this.ImgURL).replace(/{{#ScriptURL}}/g, _this.ScriptURL);
            $(item).html(dom);
            //   }
            // if ($(item)[0].tagName == "LABEL") {
            //     var dom = $(item).html().toString();
            //     dom = dom.replace(/{{#ImgURL}}/g, this.ImgURL);
            //     $(item).html(dom);
            //
            // }
            // if ($(item)[0].tagName == "SCRIPT") {
            //     console.log($(item).text());
            // }
        });
    };
    Common.prototype.JudgeTagName = function (dom, num) {
        this.TagName.forEach(function (item, index) {
            console.log(item, index);
        });
    };
    return Common;
}());
new Common();
module.exports = Common;
