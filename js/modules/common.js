"use strict";
var $ = require("jquery");
var config = require("../../dist/config");
var Common = /** @class */ (function () {
    function Common() {
        this.ImgURL = config.config.URL.$ImgURL;
        this.ScriptURL = config.config.URL.$ScriptURL;
        this.init();
    }
    Common.prototype.init = function () {
        var _this = this;
        console.log(this.ScriptURL);
        $("body").children().each(function (index, item) {
            var dom = $(item).html().toString();
            dom = dom.replace(/{{#ImgURL}}/g, _this.ImgURL)
                .replace(/{{#ScriptURL}}/g, _this.ScriptURL);
            $(item).html(dom);
        });
    };
    return Common;
}());
new Common();
module.exports = Common;
