
import image2D from '../../node_modules/image2d/build/image2D.js';

import { hasClass, deleteClass } from '../server/class.js';

/**
 * 使用方式:import image2D from "image2d";
 * 
 * 加强版本的image2D,非加强部分请查询文档: https://yelloxing.github.io/image2D/index.html
 * 
 * @author 心叶(yelloxing)
 * 
 * 2020年6月9日于大同
 */

// 在类上扩展方法
image2D.extend({

});

// 在对象上扩展方法
image2D.prototype.extend({

    // 前一个兄弟
    previous() {
        return image2D(this[0].previousElementSibling);
    },

    // 后一个兄弟
    next() {
        return image2D(this[0].nextElementSibling);
    },

    // 尺寸
    size() {
        return {
            width: this[0].offsetWidth,
            height: this[0].offsetHeight
        };
    },

    // 添加class
    addClass(className) {
        let targetClass = this[0].getAttribute('class') || "";
        if (!hasClass(targetClass, className)) {
            this[0].setAttribute('class', targetClass + " " + className);
        }
        return this;
    },

    // 删除class
    removeClass(className) {
        let targetClass = this[0].getAttribute('class') || "";
        if (hasClass(targetClass, className)) {
            this[0].setAttribute('class', deleteClass(targetClass, className));
        }
        return this;
    },

    // 触发事件
    trigger(eventType) {
        let event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent(eventType, true, false);
        this[0].dispatchEvent(event);
        return this;
    }

});

export default image2D;