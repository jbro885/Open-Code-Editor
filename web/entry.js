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

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});
