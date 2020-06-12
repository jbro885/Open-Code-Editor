import iCrush from 'icrush';

// 引入启动界面
import App from './App.iCrush';

// 引入基础样式
import '@yelloxing/normalize.css';

// 引入公共样式
import './assets/styles/style.scss';

// 引入全局指令
import './directive/index';

// 简单的传递信息给node.js的全局方法
iCrush.prototype.emit = (event, ...params) => nodeRequire('electron').ipcRenderer.send(event, ...params);

// 引入全局通知机制
import event from './plug/@event.js'; iCrush.use(event);

// 引入键盘按键组合
import keyString from '@yelloxing/core.js/tools/keyString';

// 通过浏览器打开外部链接方法集
import browserLink from './plug/browserLink'; iCrush.use(browserLink);

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App),

    mounted() {

        // 全局快捷键
        nodeRequire('image2d')(document.body).bind('keydown', event => {

            switch (keyString(event)) {

                // 打开文件夹
                case "ctrl+shift+o": {
                    this.trigger("openFolder");
                    break;
                }

                // 新建空白文本
                case "ctrl+n": {
                    this.trigger("newBlankFile");
                    break;
                }

            }

        });

    }

});
