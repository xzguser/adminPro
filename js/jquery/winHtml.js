var html='<div class="pop-content hide" data-cashap-id="pop-content">' +
    '    <div class="mask">' +
    '        <div class="pop-style">' +
    '            <div class="pop-close" data-close="data-close">' +
    '                <img src="../style/img/ic_close.png" alt="">' +
    '            </div>' +
    '            <div class="content">' +
    '                <div class="pop-title green-text" text-switch="text-switch">' +
    '                    <span>风格切换</span>' +
    '                </div>' +
    '                <div class="pop-active" data-btnAll="data-btnAll">' +
    '                    <div class="pop-btn green-btn " ></div>' +
    '                    <div class="pop-btn blue-btn" ></div>' +
    '                    <div class="pop-btn orange-btn" ></div>' +
    '                </div>' +
    '                <div class="pop-img"  theme-switch="theme-switch">' +
    '                    <div class="green-switch" ></div>' +
    '                    <div class="blue-switch" ></div>' +
    '                    <div class="orange-switch"></div>' +
    '                </div>' +
    '                <div class="pop-event">' +
    '                    <div class="btn-submit green-btn" data-save="data-save" data-submit="data-submit" >存储</div>' +
    '                    <div class="btn-submit" data-close="data-close">取消</div>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';
const div = document.createElement("label");
div.innerHTML = html;
document.body.insertBefore(div, document.body.firstElementChild);


