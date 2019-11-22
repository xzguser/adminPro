import $ = require("jquery");
import config=require("../../dist/config");
class Common {
    ImgURL: string = config.config.URL.$ImgURL;
    ScriptURL: string = config.config.URL.$ScriptURL;
    constructor() {
        this.init()
    }

    init() {
        console.log(this.ScriptURL);
        $("body").children().each((index, item) => {
            var dom = $(item).html().toString();
            // console.log(dom);
            //替换dom里的所有#ImgURL;--变量形式
            dom = dom.replace(/{{#ImgURL}}/g, this.ImgURL)
                .replace(/{{#ScriptURL}}/g, this.ScriptURL);
            $(item).html(dom);
        });
    }
}

export = Common;
new Common();