const downloadButton = document.getElementById('downloadButton');
const apkFileUrl = 'your-apk-file-url.apk'; // Replace with the actual URL of your APK file.

downloadButton.addEventListener('click', () => {
  // Create a temporary anchor element to initiate the download
  const downloadLink = document.createElement('a');
  downloadLink.href = apkFileUrl;
  downloadLink.download = 'your-apk-file.apk'; // Set the desired filename for the downloaded APK file

  // Append the anchor element to the body and trigger the click event
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up by removing the anchor element
  document.body.removeChild(downloadLink);
});
