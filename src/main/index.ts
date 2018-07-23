import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow();

  if (process.env.NODE_ENV === 'production') {
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  } else {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:9080');
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
