const path = require('path');
const os = require('os');
const fs = require('fs');
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let mainWindow;
let aboutWindow;

// Main Window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Tablet App",
    width: 500,
    height: 600,
    resizable: isDev,

  })
  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
    };

  app.whenReady().then(() => {
    createMainWindow();  
});