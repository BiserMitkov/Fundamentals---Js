function demo(text) {

    let lastIndex = text.lastIndexOf('\\');
    
    let lastIndexOfExtension = text.lastIndexOf('.');

    let file = text.substring(lastIndex + 1, lastIndexOfExtension);
    let extension = text.substring(lastIndexOfExtension + 1);
    
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);

}