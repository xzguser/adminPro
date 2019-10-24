import $ = require("jquery");

class setStyle {
    //换肤窗体内容
    data_btnAll = '[data-btnAll="data-btnAll"]';
    data_style = '[data-style="data-style"]';
    pop_content = '[data-cashap-id="pop-content"]';
    data_colse = '[data-close="data-close"]';
    data_save = '[data-save="data-save"]';


    //换肤内容
    header_img = '[header-img="header-img"]';
    bar_hurdle = '[bar-hurdle="bar-hurdle"]';
    navi_bg = '[navi-bg="navi-bg"]';
    header_nav = '[header-nav="header-nav"]';
    switch_old = '[switch-old="switch-old"]';
    left_icon = '[left-icon="left-icon"]';
    bottom_icon = '[bottom-icon="bottom-icon"]';
    top_module = '[top-module="top-module"]';
    datum_bar = '[datum-bar="datum-bar"]';
    btn_color = '[btn-color="btn-color"]';
    affiche_switch = '[affiche-switch="affiche-switch"]';
    tr_border = '[tr-border="tr-border"]';
    scro_con = '[scro-con="scro-con"]';  //外层背景

    data_submit = '[data-submit="data-submit"]';
    data_submit1 = '[data-submit1="data-submit1"]';
    text_switch = '[text-switch="text-switch"]';
    data_text1 = '[data-text1="data-text1"]';

    table_hea_bg = '[table-hea-bg="table-hea-bg"]';

    td_text = '[td-text="td-text"]';
    regis_con = '[regis-con="regis-con"]';
    // border_bottom = '[border-bottom="border-bottom"]';

    title_con = '[title-con="title-con"]';

    form_control = '[form-control="form-control"]'; //外层控制主体内容切换
    main_con = '[main-con="main-con"]';             //二层内容切换
    theme_switch = '[theme-switch="theme-switch"]'; //切换主题显示图


    data_move = '[data-move="data-move"]';        //进阶搜寻的点击事件
    move_module = '[move-module="move-module"]'   //搜寻要显示的内容
    icon_switch = '[icon-switch="icon-switch"]'  //搜寻切换的图标

    check_select = '[check-select="check-select"]';   //input框的选择事件
    check_hide = '[check-hide="check-hide"]';    //checkbox的外层容器- 控制显示与隐藏
    data_check = '[data-check="data-check"]';  //  显示出来的checkbox

    defaultColor: string = "green";

    constructor() {
        this.init();
    };
    init() {
       
        this.hoverImg();
        this.defaultFun();
        this.clickBtn();
        this.imgSwitch();
        this.twoSwitchBtn();
        this.threeSwitchBtn();
        this.forSwitchBtn();
      
    };
    //默认事件
    defaultFun() {
        var that = this;

        if (!localStorage.getItem("ThemeList")) {
            localStorage.setItem("ThemeList", that.defaultColor);
        }

        //显示弹出层 加上样式 hide
        $(that.data_style).click(function () {
            $(that.pop_content).removeClass('hide');
        })
        //隐藏弹出层 加上样式 hide
        $(that.data_colse).click(function () {
            $(that.pop_content).addClass('hide');
        });

        var getThemeList = localStorage.getItem("ThemeList");
        const theme_con = $(that.theme_switch + ">div");
        const theme_elements = $(that.data_btnAll + ">div");
        $(theme_con).addClass("hide");

        if (getThemeList != null) {
            if (getThemeList == "green") {
                $($(theme_elements)[0]).addClass("white-btn");
                $($(theme_con)[0]).removeClass("hide");

            } else if (getThemeList == "blue") {
                $($(theme_elements)[1]).addClass("white-btn");
                $($(theme_con)[1]).removeClass("hide");

            } else if (getThemeList == "orange") {
                $($(theme_elements)[2]).addClass("white-btn");
                $($(theme_con)[2]).removeClass("hide");

            }
            that.swicthTheme(getThemeList);
        }


        //公告页 私有-login_affiche.html
        if ($('[data-tr="data-tr"]')[0] != undefined) {
            //公告页 把获取的tr高度赋值给图标的容器高度
            let tr = $($($('[data-tr="data-tr"]')[0].children[1])[0].children[0])[0].clientHeight;
            $('[data-icon="data-icon"]')[0].style.height = tr + "px";
        }

        //搜寻的点击事件
        $(that.data_move).each((index, item) => {
            $(item).click(function () {
                let getItem = localStorage.getItem("ThemeList");
                const modlue = $($(that.move_module)[index]);

                if (modlue.hasClass("hide")) {

                    $($(that.icon_switch)[index]).attr("class", getItem + "-top-icon");
                    modlue.removeClass("hide");

                } else {
                    modlue.addClass("hide");
                    $($(that.icon_switch)[index]).attr("class", getItem + "-bottom-icon");
                }

            })

        })

        //input点击事件
        $(that.check_select).click(function () {
            const moduleChe = $(that.data_check + ">div");
            if ($(that.check_hide).hasClass("hide")) {
                let str = $(that.check_select).val();
                const arr = str.split("、");
                
                moduleChe.each((index, item) => {
                    $($(item)[0].children[0]).attr("checked", false);
                    for (var i = 0; i < arr.length; i++) {
                     
                        if (arr[i] == $($(item)[0].children[0]).val()) {
                            $($(item)[0].children[0]).attr("checked", true);
                        }
                    }
                })

                $(that.check_hide).removeClass("hide");
            } else {
                that.inputHide();
            }
        })
        //点击空白区域-触发容器隐藏事件
        $('[main-con="main-con"]').click(function (e) {

            var _con = $('[check-hide="check-hide"]'); // 设置目标区域
            var _input = $('[check-select="check-select"]');
            console.log(e.target)
            console.log(_con.has(e.target).length)
            if (!_con.is(e.target) && !_input.is(e.target) && _con.has(e.target).length === 0 && _input.has(e.target).length === 0) {
                that.inputHide();
            }
        });

        //切换主题，直接关掉
        $(that.data_save).click(function () {
            $(that.pop_content).addClass('hide');

        })

    }
    //头部图片获得焦点事件
    hoverImg(){
        var that = this;
        let html=".html";

        let speed = 150;
        const arr = [];
        const imgHeader = $(that.header_img+">a");
        for(var i = 0; i< imgHeader.length;i++){

            const imgW = $(imgHeader)[i];
            arr.push($(imgW)[0].attributes[0].value);

            var one;
            var two;
            $(imgW).hover(function (e) {

                 one = $($(e)[0].delegateTarget)[0].children[0].children[0];
              
                 two = $($(e)[0].delegateTarget)[0].children[0].children[1];
               $(one).animate({
                    "top":"40px",
                    "opacity": 0,
                },speed);
                $(two).animate({
                   "margin-top":"8px",
                },speed);
            }, function (e) {

                $(one).animate({
                    "top":"0px",
                    "opacity": 1,
                },speed);
                $(two).animate({
                    "margin-top":"-50px",
                },speed);
            })
        }
         const href  = (window.location.href).split(html);
      
        const dataHref = href[href.length-href.length].split("/");
        
        const urlname = dataHref.pop()+html;

        arr.forEach((item,index)=>{
            
            if(item == urlname){
                // console.log($(`[href^="${urlname}"]`)[0])
                $(`[href^="${urlname}"]`).off('mouseenter').unbind('mouseleave');
            }
            
        })
     
    }

    //换肤的选择切换事件
    clickBtn() {
        var that = this;
        const theme_elements = $(that.data_btnAll + ">div");

        theme_elements.each((index, item) => {

            $(item).click(function () {
                $(theme_elements).removeClass("white-btn");
                that.setStyle(item, index);
                that.saveCon(item);
            })

        })
    }
    //设置样式
    setStyle(tpl, index) {
        var that = this;
        $(tpl).addClass("white-btn");
        const theme_con = $(that.theme_switch + ">div");
        $(theme_con).addClass("hide");
        $($(theme_con)[index]).removeClass("hide");

    }
    //设置主题保存方法
    saveCon(tpl) {
        var that = this;
        $(that.data_save).click(function () {
           
            var swit = tpl.classList[1];

            if (swit == "green-btn") {
                that.swicthTheme("green");
            } else if (swit == "blue-btn") {
                that.swicthTheme("blue");
            } else if (swit == "orange-btn") {
                that.swicthTheme("orange");
            }

        })
    }
    //头部-图片切换事件 一级切换  a-跳转-动画
    imgSwitch() {
        var that = this;
        $(that.header_img).delegate('[img-Switch="img-Switch"]', "click", function (e) {
            if (e) e.preventDefault();
            let index = 0;
            for (var i = 0; i < $(that.header_img)[0].children.length; i++) {
                if ($($(that.header_img)[0].children[i].children[0].children[0].children[0]).hasClass("sel-img")) {
                   
                    $($(that.header_img)[0].children[i].children[0].children[0].children[0]).addClass("sel-img1");
                    index = i;
                }
            }
            setTimeout(() => {
                $($(that.header_img)[0].children[index].children[0].children[0].children[0]).removeClass("sel-img1");
                window.location.href = $(e.currentTarget)[0].attributes[0].value;
            }, 300);

        });

    }
    //二级选项栏切换
    twoSwitchBtn() {
        var that = this;
        const head_elements = $(that.bar_hurdle + ">div");

        const Cnt_elements = $(that.form_control + ">div");

        head_elements.each((index, item) => {

            $(item).click(function () {
                let getThemeList = localStorage.getItem("ThemeList");

                $(head_elements).removeClass(getThemeList + "-bar-btn");

                $($(head_elements)[index]).addClass(getThemeList + "-bar-btn");
              
                //把选项栏选中的值赋予下面的标题
                $(that.title_con)[0].innerText = $($(head_elements)[index])[0].innerText;

                //控制显示的对应内容
                $(Cnt_elements).addClass("hide");
                $($(Cnt_elements)[index]).removeClass("hide");

                
            })


        })


    };
   
    //三级选项栏切换
    threeSwitchBtn() {
        var that = this;
        // const moduleFor = $(doc)[i].children;
        for (var i = 0; i < $(that.top_module).length; i++) {
         

            const switch_top_module = $($(that.top_module)[i].children);

            switch_top_module.each((index, item) => {
                $(item).click(function () {
                    let getThemeList = localStorage.getItem("ThemeList");
                    $(switch_top_module).removeClass(getThemeList + "-tar");
                    $($(switch_top_module)[index]).addClass(getThemeList + "-tar");
                   

                    //显示出对应的html结构
                    for (var k = 0; k < $(that.form_control)[0].children.length; k++) {

                        if (!$($(that.form_control)[0].children[k]).hasClass("hide")) {

                            const switch_module = $(that.form_control)[0].children[k];

                            for (var j = 0; j < $(switch_module)[0].children.length; j++) {
                                if (j >= 1) {
                                    $($(switch_module)[0].children[j]).addClass("hide");
                                }
                            }
                            $($(switch_module)[0].children[index + 1]).removeClass("hide");
                        }
                    }



                })
            })
        }

    }

    //四级选项栏切换
    forSwitchBtn() {
        var that = this;
        const datumModule = $(that.datum_bar + ">div");
        datumModule.each((index, item) => {

            $(item).click(function () {

                let getThemeList = localStorage.getItem("ThemeList");

                $(datumModule).removeClass(getThemeList + "-btn-active");
                $(item).addClass(getThemeList + "-btn-active");
            })
        })

    }
    //换肤的方法
    swicthTheme(color) {

        var that = this;
        //header-左边图片下的文字切换
        if ($(that.header_img).length != 0) {
            const head_left_text = $(that.header_img + ">a");
            $(head_left_text).removeClass("green-text blue-text orange-text");
            $(head_left_text).addClass(color + "-text");
        }

        //header-右边文字切换
        that.oneSwitch(that.header_nav, "-text", color);

        //header-右边边框线切换
        if ($(that.header_nav).length != 0) {
            const hea_right = $(that.header_nav + ">div");

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
        // that.oneSwitch(that.datum_bar, "-btn-bar", color);
        if ($(that.datum_bar).length != 0) {
            that.forSwitch(that.datum_bar, "-btn-active", color);
        }


        //按钮切换
        that.oneSwitch(that.data_submit, "-btn", color);  //深色
        that.oneSwitch(that.data_submit1, "-btn1", color);  //浅色

        //文字颜色切换
        that.oneSwitch(that.text_switch, "-text", color);   //浅色文本切换
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
    }

    //公共选中事件的切换
    forSwitch(doc, str, color) {

        for (var i = 0; i < $(doc).length; i++) {
            const moduleFor = $(doc)[i].children;
            $(moduleFor).each((index, item) => {

                if ($($(moduleFor)[index]).hasClass('green' + str) || $($(moduleFor)[index]).hasClass('blue' + str) || $($(moduleFor)[index]).hasClass('orange' + str)) {
                    $(moduleFor).removeClass('green' + str + ' blue' + str + ' orange' + str);
                    $($(moduleFor)[index]).addClass(color + str);
                }

            })
        }

    }

    //单层级切换
    oneSwitch(doc, str, color) {
        $(doc).removeClass('green' + str + ' blue' + str + ' orange' + str);
        $(doc).addClass(color + str);
    }
    //单层级切换 - 字符串拼接取反
    oneSwitchOrder(doc, str, color) {
        $(doc).removeClass(str + 'green ' + str + 'blue ' + str + 'orange');
        $(doc).addClass(str + color);
    }
    inputHide() {
        var that = this;
        const arr = [];
        const moduleChe = $(that.data_check + ">div");
        moduleChe.each((index, item) => {
            if ($($(item)[0].children[0]).prop("checked")) {
                if (arr.indexOf($($(item)[0].children[0]).val()) === -1) {
                    arr.push($($(item)[0].children[0]).val());
                }
            }
        })

        var str = arr.join("、");
        $(that.check_select).val(str);
     
        $(that.check_hide).addClass("hide");
    }

}

export = setStyle;
new setStyle();