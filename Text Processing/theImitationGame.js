function demo(input) {

    let startingStr = input.shift();

    let index = 0;
    let currEl = input[index];

    while (currEl !== 'Decode') {

        let [command, elOne, elTwo] = currEl.split('|');

        if (command == 'Move') {

            let lettersToMove = Number(elOne);

            let part = startingStr.substring(0, lettersToMove);

            startingStr = startingStr.replace(part, '');
            startingStr = startingStr + part;
            

        } else if (command == 'Insert') {

            let index = Number(elOne);
            let letterToInsert = elTwo;

            if (index > startingStr.length) {

                startingStr = startingStr.concat(letterToInsert);

            } else {

                let currPart = startingStr.substring(0, index);
                startingStr = startingStr.replace(currPart, currPart + letterToInsert);
            }
            
            
        } else if (command == 'ChangeAll') {

            let letterToRemove = elOne;
            let newLetter = elTwo;

            while (startingStr.includes(letterToRemove)) {

                startingStr = startingStr.replace(letterToRemove, newLetter);
            }

            
        }

        index++;
        currEl = input[index];

    }

    console.log(`The decrypted message is: ${startingStr}`);

}