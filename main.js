// const {app, BrowserWindow} = require('electron');
import { download } from '@electron/get';

// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
const zipFilePath = await download('4.0.4');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    
    win.loadFile(index.html);
};

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit();
})

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});