function demo(arr) {

    let pirateShip = arr.shift().split('>').map(Number);

    let warShip = arr.shift().split('>').map(Number);

    let maxCapacityOfHealth = Number(arr.shift());

    let index = 0;

    let elOfArr = arr[index];

    while (elOfArr !== 'Retire') {

        let currEl = elOfArr.split(' ');

        let command = currEl.shift();

        if (command === 'Fire') {

            let indexToAttack = Number(currEl.shift());

            let damage = Number(currEl.shift());

            if (indexToAttack >= 0 && indexToAttack <= warShip.length - 1) {

                let currRange = warShip[indexToAttack];

                let resultAfterDamage = currRange - damage;

                if (resultAfterDamage <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                } else {
                    warShip.splice(indexToAttack, 1, resultAfterDamage);
                }
            }


        } else if (command === 'Defend') {

            let startIndex = Number(currEl.shift());
            let lastIndex = Number(currEl.shift());

            let currDamage = Number(currEl.shift());

            if ((startIndex >= 0 && startIndex <= pirateShip.length - 1) && (lastIndex >= 0 && lastIndex <= pirateShip.length - 1)) {

                for (let i = startIndex; i <= lastIndex; i++) {

                    let currSection = pirateShip[i];

                    let resultAfterAttack = currSection - currDamage;

                    if (resultAfterAttack <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    } else {
                        pirateShip.splice(i, 1, resultAfterAttack);
                    }


                }
            }
        } else if (command === 'Repair') {

            let indexToRepair = Number(currEl.shift());

            let healthToAdd = Number(currEl.shift());

            if (indexToRepair >= 0 && indexToRepair <= pirateShip.length - 1) {

                let currSectionToRepair = pirateShip[indexToRepair];

                let howMuchHealthNeeded = healthToAdd + currSectionToRepair;

                if (howMuchHealthNeeded >= maxCapacityOfHealth) {
                    pirateShip.splice(indexToRepair, 1, maxCapacityOfHealth);
                } else {
                    pirateShip.splice(indexToRepair, 1, howMuchHealthNeeded);
                }
            }
        } else if (command === 'Status') {

            let lowerPercent = (maxCapacityOfHealth / 100) * 20;
            let counterForSections = 0;
            for (let section of pirateShip) {

                if (section < lowerPercent) {
                    counterForSections++;
                }
            }
            console.log(`${counterForSections} sections need repair.`);
        }
        index++;
        elOfArr = arr[index];
    }

    let pirateShipStatus = 0;
    let warShipStatus = 0;
    pirateShip.map((el) => pirateShipStatus += el);
    warShip.map((el) => warShipStatus += el);
    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);


}