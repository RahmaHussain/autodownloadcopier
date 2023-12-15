AutoDownloadCopier
Overview
AutoDownloadCopier is a simple Node.js utility that automates the process of copying newly downloaded files from a specified directory to a target folder. This tool is particularly useful for organizing and managing downloaded files in real-time.

Features
Automatic File Copying: Automatically detects and copies newly added files from the specified download directory to a target folder.
Customizable Paths: Easily configure the download and target paths to suit your preferences.
No Dependencies: Built with minimal dependencies to ensure ease of use.
Installation
For Users (No Node.js Required)
Download the latest release from the Releases page.
Extract the downloaded ZIP file.
Run the executable (autodownloadcopier or the name you specified) to start using AutoDownloadCopier.
For Developers (Node.js Required)
Clone the repository:

bash
Copy code
git clone https://github.com//RahmaHussain/AutoDownloadCopier.git
Install dependencies:

bash
Copy code
cd AutoDownloadCopier
npm install
Run the application:

bash
Copy code
node index.js
Usage
Ensure Node.js is installed on your machine.

Configure the download path (downloadPath) and target folder (targetFolder) in the index.js file.

Run the application using:

bash
Copy code
node index.js
The tool will now watch the specified download directory for new files and copy them to the target folder.

Building Executable (Optional)
If you want to share the tool with friends who don't have Node.js installed, you can create an executable using pkg. Follow these steps:

Install pkg globally:

bash
Copy code
npm install -g pkg
Package the application:

bash
Copy code
pkg index.js -o autodownloadcopier
Share the generated executable (autodownloadcopier) with your friends.

Contributions
Contributions are welcome! If you have ideas for improvements or encounter issues, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
