
<p align="center"><a href="https://github.com/yelloxing/Open-Code-Editor" target="_blank">
<img width="400" src="./web/assets/images/logo.png" alt="Open Code Editor"></a></p>

📄 一个小巧且可个性化配置的代码编辑器。A small and personalized code editor.
------------------------------------------------------------------------------

> 项目开发中，敬请期待！

## 开发须知

- 本项目选择的web框架为[iCrush](https://github.com/yelloxing/iCrush),你可以[点击此处查阅文档](https://yelloxing.github.io/iCrush/index.html),如果有任何问题请[点击此处提问](https://github.com/yelloxing/iCrush/issues)。

- 编辑器核心库选择的是[Web Studio Code](https://github.com/yelloxing/Web-Studio-Code)用来提供编辑界面。

## 如何启动开发？

我们有两个程序需要分别启动，首先是web进程：

```bash
npm run web
```

只有在web进程启动成功以后才应该执行下面的命令以启动主进程：

```bash
npm run exe-win
```

当然，上面是windows下的命令，如果你是mac电脑请使用：

```bash
npm run exe-mac
```

## 如何调试主进程？

首先进入项目，运行：

```bash
npm run debug-win
```

上面是windows电脑，如果是mac电脑请使用：

```bash
npm run debug-mac
```

当然,你应该在调试的地方提前添加“ debugger ”语句，这和普通的web端调试一样，接着，在chrome浏览器地址栏中输入：

```
chrome://inspect/#devices
```

然后点击“ Open dedicated DevTools for Node ”后进入调试界面即可。

## 如何打包成exe或dmg等最终软件或安装包？

如果你是windows请执行：

```bash
npm run build-win
```

相应的mac电脑请执行：

```bash
npm run build-mac
```

## License

[MIT](https://github.com/Open-Organize/Open-Code-Editor/blob/master/LICENSE)

Copyright (c) 2020 Open-Organize