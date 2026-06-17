const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// settings live in a small JSON file in the OS user-data folder,
// so they survive restarts and work even when the .exe is portable
const settingsFile = path.join(app.getPath('userData'), 'settings.json');

function loadSettings() {
  try { return JSON.parse(fs.readFileSync(settingsFile, 'utf8')); }
  catch (e) { return null; }   // no file yet -> use defaults
}
function saveSettings(data) {
  try { fs.writeFileSync(settingsFile, JSON.stringify(data)); } catch (e) {}
}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 280,
    height: 340,
    frame: false,          // no title bar / no OS chrome
    transparent: true,     // only the watch shows, not a box
    resizable: false,
    alwaysOnTop: true,     // floats above other windows
    skipTaskbar: false,    // stays in the taskbar so it's easy to find/close
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('pomodoro-watch.html');
}

app.whenReady().then(createWindow);

// window controls
ipcMain.on('win:close', () => win && win.close());
ipcMain.on('win:minimize', () => win && win.minimize());

// settings persistence
ipcMain.handle('settings:load', () => loadSettings());
ipcMain.on('settings:save', (e, data) => saveSettings(data));

app.on('window-all-closed', () => app.quit());
