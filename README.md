
<p align="center"><a href="https://github.com/yelloxing/Open-Code-Editor" target="_blank">
<img width="400" src="./web/assets/images/logo.png" alt="Open Code Editor"></a></p>

📄 一个小巧且可个性化配置的代码编辑器。A small and personalized code editor.
------------------------------------------------------------------------------

> 项目开发中，敬请期待！

## 开发须知

- 本项目选择的web框架为[iCrush](https://github.com/yelloxing/iCrush),你可以[点击此处查阅文档](https://yelloxing.github.io/iCrush/index.html),如果有任何问题请[点击此处提问](https://github.com/yelloxing/iCrush/issues)。

- 编辑器核心库选择的是[Web Studio Code](https://github.com/yelloxing/Web-Studio-Code)用来提供编辑界面。

## 如何调试主进程？

首先进入项目，运行：

```bash
npm run debug
```

在需要调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

接着，请点击“ Open dedicated DevTools for Node ”后进入调试界面。

## License

[MIT](https://github.com/yelloxing/Open-Code-Editor/blob/master/LICENSE)

Copyright (c) 2020 走一步 再走一步