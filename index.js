const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const { autoUpdater, AppUpdater } = require('electron-updater')

app.on('ready', () => {
    const win = new BrowserWindow({
        show: true,
        webPreferences: {
            preload: join(__dirname, './client/preload.js'),

        }

    });
    win.on('ready-to-show', () => {
        win.show();
    })
    win.loadFile('./index.html')
})