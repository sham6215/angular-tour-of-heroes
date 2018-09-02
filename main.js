
const {app, BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow () {
  // Создаёт окно браузера.
  win = new BrowserWindow({width: 800, height: 600});

  //console.log(`file://${__dirname}\\dist\\angular-electron\\index.html`);
  //let url = `file://N:/work/projects/Trident/Electron/angular-electron/dist/angular-electron/index.html`;
  let url = `http://localhost:4220/index.html`;
  //let url = `./dist/angular-tour-of-heroes/index.html`;
  //let url = `./src/index.html`;
  console.log(url);
  console.warn(url);
  //win.loadFile(url);
  win.loadURL(url);

  // и загрузит index.html приложение.
  //win.loadFile(`file://${__dirname}/dist/angular-electron/index.html`)

  // Open the DevTools.
  win.webContents.openDevTools();

  // Возникает, когда окно будет закрыто.
  win.on('closed', () => {
    // Разбирает объект окна, обычно вы можете хранить окна
    // в массиве, если ваше приложение поддерживает несколько окон в это время,
    // тогда вы должны удалить соответствующий элемент.
    win = null;
  });
}

// Этот метод будет вызываться, когда Electron закончит
// инициализацию и готова к созданию окон браузера.
// Некоторые интерфейсы API могут использоваться только после возникновения этого события.
app.on('ready', createWindow);

// Выйти, когда все окна будут закрыты.
app.on('window-all-closed', () => {
  console.log('window-all-closed');
  console.warn('window-all-closed');
  // На macOS это обычно для приложений и их строки меню
  // оставаться активным до тех пор, пока пользователь не выйдет явно с помощью Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
   // На MacOS это общее для того чтобы создать окно в приложении, когда значок
   // dock нажали и нет других открытых окон.
  if (win === null) {
    createWindow();
  }
});

// В этом файле вы можете включить код другого основного процесса
// вашего приложения. Можно также поместить их в отдельные файлы и применить к ним require.


// const electron = require('electron');
// // Module to control application life.
// const app = electron.app;
// // Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow;

// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// let mainWindow;

// function createWindow () {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({width: 800, height: 600});

//   console.log(app.getAppPath());
//   console.log(`=====================================`);
//   // and load the index.html of the app.
//   //let url = `file://${__dirname}\\dist\\angular-tour-of-heroes\\index.html`;
//   let url = `./dist/angular-tour-of-heroes/index.html`;
//   url = app.getAppPath();
//   let ne = process.env.NODE_ENV;
//   console.warn(url);
//   mainWindow.loadURL(url);

//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();

//   // Emitted when the window is closed.
//   mainWindow.on('closed', function () {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     mainWindow = null;
//   });
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.on('ready', function() {
//   createWindow();

//   console.log('Opening');

//   // electron.shell.openExternal('http://electron.atom.io', {}, function(err) {
//   //   console.log('Should open electron.atom.io:', err)
//   // })

//   // electron.shell.openExternal('ooops', {}, function(err) {
//   //   console.log('Should error with bad URL:', err)
//   // })

//   // electron.shell.openExternal('noappforscheme://oops', {}, function(err) {
//   //   console.log('Should error with no application for URL:', err)
//   // })

//   // electron.shell.openExternal('file:///notfound', {}, function(err) {
//   //   console.log('Should error with fail to open:', err)
//   // })
// });

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });


// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.
