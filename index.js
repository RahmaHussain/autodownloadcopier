const fs = require('fs');
const chokidar = require('chokidar');
const path = require('path');

const downloadPath = 'C:/Users/DELL/Downloads'; // Replace with your actual download path
const targetFolder = path.join('C:/Users/DELL/Desktop', 'NewDownloads'); // Replace with your target folder path

// Ensure the target folder exists
if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
}

// Watch for changes in the download directory
const watcher = chokidar.watch(downloadPath, {
    ignored: /^\./, // ignore dotfiles
    persistent: true,
});

console.log(`Watching ${downloadPath} for new files...`);

watcher
    .on('add', (filePath) => {
        // A new file was added
        console.log(`New file detected: ${filePath}`);

        // Extract the file name and create the target path
        const fileName = path.basename(filePath);
        const targetPath = path.join(targetFolder, fileName);

        // Copy the file to the target folder
        fs.copyFile(filePath, targetPath, (err) => {
            if (err) throw err;
            console.log(`File copied to: ${targetPath}`);
        });
        // Sort files in the target folder by modification time (newest first)
        // sortFilesByModificationTime(targetFolder);
    })
    .on('error', (error) => {
        console.error(`Error: ${error}`);
    });
    // function sortFilesByModificationTime(folderPath) {
    //     const files = fs.readdirSync(folderPath)
    //         .map(fileName => ({ name: fileName, time: fs.statSync(path.join(folderPath, fileName)).mtime.getTime() }))
    //         .sort((a, b) => b.time - a.time)
    //         .map(file => file.name);
    
    //     // Move files to the target folder in the sorted order
    //     files.forEach(fileName => {
    //         const sourcePath = path.join(folderPath, fileName);
    //         const destinationPath = path.join(targetFolder, fileName);
    
    //         fs.renameSync(sourcePath, destinationPath);
    //     });
    
    //     console.log(`Files in ${targetFolder} sorted by modification time.`);
    // }