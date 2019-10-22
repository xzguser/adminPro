import $ =require("jquery");

class agentComponents {

    query_result = '[query-result-id="query-result-id"]';        //查询-查询结果内容
    insert_user = '[insert-con-id="insert-con-id"]';             //新增会员内容 
    insert_user_href = '[insert-user-href="insert-user-href"]';  //新增用户-btn
    data_save = '[data-save-id="data-save-id"]';                 //储存数据
    data_cancel = '[data-cancel-id="data-cancel-id"]';           //取消储存数据
     constructor() {
        this.init();
    };

    init() {
       this.defaultFun();
       
    };
    //默认事件
    defaultFun() {
        var that = this;
        //切换内容模块
        $(that.insert_user_href).click(function(){
            $(that.query_result).addClass("hide");
            $(that.insert_user).removeClass("hide");
        })
        //储存数据
        $(that.data_save).click(function(){
            $(that.insert_user).addClass("hide");
            $(that.query_result).removeClass("hide");
        })
        //取消储存-返回
        $(that.data_cancel).click(function(){
            $(that.insert_user).addClass("hide");
            $(that.query_result).removeClass("hide");
        })
    }
   
}

export = agentComponents;
new agentComponents();