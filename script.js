const downloadButton = document.getElementById('downloadButton');
const apkFileUrl = 'https://ydray.com/get/t/16900591016571fuys55930ed3679ccb'; // Replace with the actual URL of your APK file.

downloadButton.addEventListener('click', () => {
  // Create a temporary anchor element to initiate the download
  const downloadLink = document.createElement('a');
  downloadLink.href = apkFileUrl;
  downloadLink.download = 'https://ydray.com/get/t/16900591016571fuys55930ed3679ccb'; // Set the desired filename for the downloaded APK file

  // Append the anchor element to the body and trigger the click event
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up by removing the anchor element
  document.body.removeChild(downloadLink);
});
