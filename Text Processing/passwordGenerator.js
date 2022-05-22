function solve(arr) {

    let firstText = arr.shift();
    let secText = arr.shift();
    let word = arr.shift();
    let wordIntoArr = word.split('');

    let finalText = firstText.concat(secText);
    let splitedText = finalText.split('');
    let length = splitedText.length;

    for (let i = 0; i < length; i++) {

        let currEl = splitedText[i];

        if (currEl == 'i') {
            let letterToAdd = wordIntoArr.shift();
            let letterToUpperCase = letterToAdd.toUpperCase();
            wordIntoArr.push(letterToAdd);
            splitedText.splice(i, 1, letterToUpperCase)

        } else if (currEl == 'a') {
            let letterToAdd = wordIntoArr.shift();
            let letterToUpperCase = letterToAdd.toUpperCase();
            wordIntoArr.push(letterToAdd);
            splitedText.splice(i, 1, letterToUpperCase)

        } else if (currEl == 'o') {
            let letterToAdd = wordIntoArr.shift();
            let letterToUpperCase = letterToAdd.toUpperCase();
            wordIntoArr.push(letterToAdd);
            splitedText.splice(i, 1, letterToUpperCase)

        } else if (currEl == 'e') {
            let letterToAdd = wordIntoArr.shift();
            let letterToUpperCase = letterToAdd.toUpperCase();
            wordIntoArr.push(letterToAdd);
            splitedText.splice(i, 1, letterToUpperCase)

        } else if (currEl == 'u') {
            let letterToAdd = wordIntoArr.shift();
            let letterToUpperCase = letterToAdd.toUpperCase();
            wordIntoArr.push(letterToAdd);
            splitedText.splice(i, 1, letterToUpperCase)

        }
    }


    console.log(`Your generated password is ${splitedText.reverse().join('')}`);


}