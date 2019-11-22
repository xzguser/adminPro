import $ =require("jquery");
//公告模块
class afficheComponents {
    //切换选择
    affiche_switch = '[affiche-switch="affiche-switch"]';
    //切换的内容模块
    affiche_module = '[affiche-module="affiche-module"]';
    
     constructor() {
        this.init();
    };

    init() {
        this.defaultFun();
       this.afficheSwitch();
    };
    //默认事件
    defaultFun() {

         //公告页 私有-login_affiche.html
         if ($('[data-tr="data-tr"]')[0] != undefined) {
            //公告页 把获取的tr高度赋值给图标的容器高度
            let tr = $('[data-tr="data-tr"]')[0].children[1].children[0].clientHeight;
            
            $('[data-icon="data-icon"]')[0].style.height = tr + "px";
         }
    }
   //公告表格切换
   afficheSwitch(){
       var that = this;
     
        const Switch = $(that.affiche_switch + ">div");
        const Module = $(that.affiche_module + ">div");
        const color = localStorage.getItem("ThemeList");
        Switch.each((index,item)=>{
           $(item).click(function(){
                
                $(Switch).removeClass(color+"-check");
                $(item).addClass(color+"-check");
                $(Module).addClass("hide");
                $($(Module)[index]).removeClass("hide");
              
           })
        })
   }
}

export = afficheComponents;
new afficheComponents();