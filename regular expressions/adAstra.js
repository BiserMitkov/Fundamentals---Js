function demo(input) {

    let text = input.shift();

    let pattern = /#(?<type>[A-Za-z ]+)#(?<expiration>\d{2}\/\d{2}\/\d{2})#(?<calories>\d+)#|\|(\k<type>[A-Za-z ]+)\|(\k<expiration>\d{2}\/\d{2}\/\d{2})\|(\k<calories>\d+)\|/g;

    let sumForCal = 0;

    let result = text.match(pattern);

    if (result !== null) {

        for (let ent of result) {

            if (ent.includes('|')) {
    
                let splitEnt = ent.split('|');
    
                for (let i = splitEnt.length - 1; i >= 0; i--) {
    
                    if (splitEnt[i] !== '') {
    
                        sumForCal += Number(splitEnt[i])
                        break;
                    }
                }
    
            } else if (ent.includes('#')) {
    
                let splitEntry = ent.split('#')
    
                for (let i = splitEntry.length - 1; i >= 0; i--) {
    
                    if (splitEntry[i] !== '') {
    
                        sumForCal += Number(splitEntry[i])
                        break;
                    }
                }
            }
        }
    }

    let finalCal = Math.floor(sumForCal / 2000);
    console.log(`You have food to last you for: ${finalCal} days!`);
    if (result !== null) {

        for (let entry of result) {

            let item = '';
            let expiration = '';
            let calories = '';
            let counter = 0;
            if (entry.includes('#')) {
    
                let splitOutput = entry.split('#');
    
                for (let element of splitOutput) {
                    counter++;
                    if (counter == 2) {
    
                        item = element;
                    } else if (counter == 3) {
                        expiration = element;
                    } else if (counter == 4) {
                        calories = element;
                    }
                }
    
                console.log(`Item: ${item}, Best before: ${expiration}, Nutrition: ${calories}`);
    
            } else if (entry.includes('|')) {
    
                let splitOutput = entry.split('|');
    
                for (let element of splitOutput) {
                    counter++;
                    if (counter == 2) {
    
                        item = element;
                    } else if (counter == 3) {
                        expiration = element;
                    } else if (counter == 4) {
                        calories = element;
                    }
                }
    
                console.log(`Item: ${item}, Best before: ${expiration}, Nutrition: ${calories}`);
            } 
        }
    }
}