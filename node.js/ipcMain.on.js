const { ipcMain, app } = require('electron');

module.exports = function (win) {

    /**
     * 监听来自主渲染进程的信息
     * ------------------------------------
     */

    // 最小化
    ipcMain.on('minimize', () => { win.minimize(); });

    // 最大化
    ipcMain.on('maximize', () => { win.maximize(); });

    // 可缩放
    ipcMain.on('unmaximize', () => { win.unmaximize(); });

    // 退出系统
    ipcMain.on('quit', () => { app.quit(); });

    /**
     * 监听来自原生窗口操作
     * -------------------------------------
     */

    //  窗口最大化通知
    win.on('maximize', () => { win.webContents.send("maximize"); });

    // 窗口可缩放通知
    win.on('unmaximize', () => { win.webContents.send("unmaximize"); });

};