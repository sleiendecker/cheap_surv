module.exports = function (fileName) {
  // Convert to string
  let formattedFile = String(fileName)

  // Grab extension
  const extension = formattedFile.substring(formattedFile.lastIndexOf('.'));
  const validFileType = ".jpeg, .jpg , .png , .bmp";
  if (validFileType.toLowerCase().indexOf(extension) < 0 || !fileName) {
    console.log(`Invalid filetype. The supported file types are ${validFileType}`);
    return false
  }
  return true
}
