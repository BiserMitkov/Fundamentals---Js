function demo(arr) {

    let char = {};

    let text = arr.shift();
    let splitText = text.split('');
    

    for (let i = 0; i < splitText.length; i++) {
        
        let el = splitText[i];

        if (!char.hasOwnProperty(el)) {

            char[el] = [];
            char[el].push(i);

        } else if (char.hasOwnProperty(el)) {

            char[el].push(i);
        }
        
    }

    for (let key in char) {
        
        console.log(`${key}:${char[key].join('/')}`);
    }


}