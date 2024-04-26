const { app, BrowserWindow } = require('electron')
const path = require('node:path')
 


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon:"icon.png",
 })
  
  

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
 
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
 
 
