const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    minHeight: 512,
    minWidth: 512,
    maxHeight: 512,
    maxWidth: 512,
    frame:true,
    autoHideMenuBar: true
  })

  win.loadFile('src/index.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0){
      createWindow()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin'){
    app.quit()
  }
})
