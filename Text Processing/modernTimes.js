function solve(text) {

    let specialWords = [];

    let splitedText = text.split(' ');

    for (let el of splitedText) {
        
        if (el.startsWith('#') && el.length > 1) {

            let addingEl = el.substring(1);
            specialWords.push(addingEl);
        }
    }

    let output = [];

    for (let ent of specialWords) {
        
        let counter = 0;

        for (let letter of ent) {

            let currChar = letter.charCodeAt();
            
            if (currChar >= 65 && currChar <= 90) {

                counter++;

            } else if (currChar >= 97 && currChar <= 122) {
                
                counter++;
            }
        }

        if (counter == ent.length) {

            console.log(ent);
        }
    }
}