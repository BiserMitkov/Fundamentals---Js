function solve(text) {

    let currText = text.shift();
    let wordsForReplacing = text.shift();

    let splitText = currText.split(' ');

    for (let i = 0; i < splitText.length; i++) {

        let ent = splitText[i];

        if (ent.includes('_')) {

            if (ent.includes(',')) {

                let temp = ent.split(',');
                let secretWord = temp.shift();

                for (let entry of wordsForReplacing) {

                    let currEntry = '_'.repeat(entry.length);

                    if (secretWord.length == currEntry.length) {

                        splitText.splice(i, 1, entry + ',')
                    }
                }

            } else if (ent.includes('.')) {

                let output = ent.split('.');
                let currHole = output.shift();

                for (let element of wordsForReplacing) {

                    let currEl = '_'.repeat(element.length);

                    if (currHole.length == currEl.length) {

                        splitText.splice(i, 1, element + '.')
                    }
                }

            } else {

                for (let el of wordsForReplacing) {

                    let currWord = '_'.repeat(el.length);

                    if (ent.length == currWord.length) {

                        splitText.splice(i, 1, el)
                    }
                }
            }
        }
    }

    console.log(splitText.join(' '));


}