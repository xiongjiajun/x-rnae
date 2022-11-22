import * as electron from 'electron';

const detectPort = require('detect-port');

const { app, BrowserWindow } = electron;

const createWindow = (url: string) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  win.loadURL(url);
}

if(process.env.NODE_ENV === 'development') {
  app.on('ready', async (e) => {
    const { nextDev } = require('next/dist/cli/next-dev');
    console.time("search port and dev");
    const port = await detectPort(3000);
    nextDev(['-p', port.toString()]);
    console.timeEnd("search port and dev");
    createWindow(`http://localhost:${port}`);
  });
}else {
  app.on('ready', async () => {
    const { nextStart } = require('next/dist/cli/next-start');
    const port = await detectPort(3000);
    nextStart(['-p', port]);
    createWindow(`http://localhost:${port}`);
  });
}



// app.whenReady().then(() => {
//   createWindow()
// })