function formatExtensions(extensions){
  // Remove pipes and convert to array
  var array = extensions.split('|');
  array.forEach((extension, index) => {
    array[index] = ` .${extension}`
  })
  return String(array).trim()
}

module.exports = function (fileName, validExtensions) {
  // Convert to string
  const formattedFile = String(fileName)
  // Grab extension
  const extension = formattedFile.substring(formattedFile.lastIndexOf('.'));
  // Format validExtensions
  const validFileType = formatExtensions(validExtensions);
  if (validFileType.toLowerCase().indexOf(extension) < 0 || !fileName) {
    console.log(`Invalid filetype. The supported file types are [${validFileType}]`);
    return false
  }
  return true
}
