function demo(arr) {

    let chest = arr.shift().split('|');

    let index = 0;
    let currEl = arr[index];

    while (currEl !== 'Yohoho!') {

        let el = currEl.split(' ');

        let currCommand = el.shift();

        if (currCommand == 'Loot') {

            for (let treasure of el) {
                if (!chest.includes(treasure)) {
                    chest.unshift(treasure);
                }
            }
        } else if (currCommand == 'Drop') {

            let lengthOfChest = chest.length;

            let indexOfCommand = Number(el.shift());

            if (indexOfCommand >= 0 && indexOfCommand <= lengthOfChest) {

                let currItemToRemove = chest[indexOfCommand];

                let indexOfThatItem = chest.indexOf(currItemToRemove);

                chest.splice(indexOfThatItem, 1);
                chest.push(currItemToRemove);
            }
        } else if (currCommand == 'Steal') {

            let countOfStealing = Number(el.shift());

            if (countOfStealing >= chest.length) {

                let stealingTreasures = chest.splice(0);
                console.log(stealingTreasures.join(', '));
                
            } else if (countOfStealing < chest.length) {

                let startingCount = chest.length - countOfStealing;
                let stealingTreasures = chest.splice(startingCount, countOfStealing);
                console.log(stealingTreasures.join(', '));
            }
        }
        index++;
        currEl = arr[index];
    }

    if (chest.length > 0) {
        let lengthOfEveryWord = 0;
        for (let word of chest) {

            let lengthOfThatWord = word.length;
            lengthOfEveryWord += lengthOfThatWord;
        }

        let resultToPrint = lengthOfEveryWord / chest.length;
        console.log(`Average treasure gain: ${resultToPrint.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}