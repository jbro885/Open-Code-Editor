/**
 * <XXX folder-menu='folderPath' />
 * 
 * 展示打开的文件夹folderPath
 * 
 * @author 心叶(yelloxing)
 * 
 * 2020年6月12日于大同
 */

let folderPath = null;
const path = nodeRequire('path');
const fs = nodeRequire('fs');
import image2D from 'image2d';
import wscode from '../pages/wscode.iCrush';

import '../assets/styles/folder.scss';

let insertList = function (el, folderPath) {

    if (fs.lstatSync(folderPath).isDirectory()) {

        // 如果已经加载了
        if (el.__oce_folder_loader__ == "loaded") {

            // 控制打开和关闭
            if (el.getAttribute('hadOpen') == 'no') {
                el.setAttribute('hadOpen', 'yes');
            } else {
                el.setAttribute('hadOpen', 'no');
            }

            return;
        }

        let template = "<ul>";

        // 读取子文件
        const subFiles = fs.readdirSync(folderPath);

        subFiles.forEach(function (file) {

            let filePath = path.join(folderPath, "./" + file);

            // 判断是文件夹还是文本
            let type = fs.lstatSync(filePath).isDirectory() ? "folder" : "file";

            template += `<li path='${filePath}' name='${file}' type='${type}'>
                <span>${file}</span>
            </li>`;

        });

        template += "</ul>";

        let ulDom = image2D(template);

        ulDom.children().bind('click', function (event) {
            image2D.stopPropagation(event);

            // 递归调用
            insertList(this, this.getAttribute('path'));

        });

        ulDom.appendTo(el);
        el.__oce_folder_loader__ = "loaded";
        el.setAttribute('hadOpen', 'yes');

    }

    // 如果是文件，应该打开
    // 如果已经打开，应该切换显示
    else {

        const path = el.getAttribute('path');

        icrush.trigger('loadPage', {
            id: "oce@wscode:" + path,
            component: wscode,
            data: {
                name: el.getAttribute('name'),
                type: "text/plain",
                content: fs.readFileSync(path, 'utf-8'),
                path
            }
        });

    }

};

export default {
    update(el, binding) {

        // 选择相同的路径不会再次为你刷新文件夹列表
        if (folderPath == binding.value) { return; } else {
            folderPath = binding.value;
        }

        insertList(el, folderPath);
    }
};