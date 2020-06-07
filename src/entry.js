import iCrush from 'icrush';

// 引入启动界面
import App from './App.iCrush';

// 引入基础样式
import '@yelloxing/normalize.css';

// 引入公共样式
import './styles/style.scss';

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});
