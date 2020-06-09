import image2D from '../../node_modules/image2d/build/image2D.js';

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
    }

});

export default image2D;