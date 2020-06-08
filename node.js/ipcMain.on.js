const { ipcMain, app } = require('electron');

module.exports = function (win) {

    // 最小化
    ipcMain.on('minimize', () => { win.minimize(); });

    // 最大化
    ipcMain.on('maximize', () => { win.maximize(); });

    // 可缩放
    ipcMain.on('unmaximize', () => { win.unmaximize(); });

    // 退出系统
    ipcMain.on('quit', () => { app.quit(); });

};