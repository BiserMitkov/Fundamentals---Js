function solve(word, text) {

    let splitedText = text.split(' ');

    for (let el of splitedText) {
        
        if (el.toLowerCase() == word.toLowerCase()) {

            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
    
}