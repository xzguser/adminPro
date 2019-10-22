import $ = require("jquery");

class Common {

    TagName = ["LABEL", "DIV", "", "", ""];
    ImgURL: string = "../style/img";
    ScriptURL: string = "../dist";

    constructor() {
        this.init()
    }

    init() {
        $("body").children().each((index, item) => {
            //  if ($(item)[0].tagName == "DIV") {
            var dom = $(item).html().toString();
            dom = dom.replace(/{{#ImgURL}}/g, this.ImgURL).replace(/{{#ScriptURL}}/g, this.ScriptURL);
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
    }

    JudgeTagName(dom: HTMLElement, num: number) {
        this.TagName.forEach((item, index) => {
            console.log(item, index);
        });

    }
}

export = Common;
new Common();