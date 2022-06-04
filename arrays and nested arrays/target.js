function demo(arr) {
    let array = arr;

    let targets = array.splice(0, 1).toString().split(" ").map(Number);

    let lengthOfTargets = targets.length;

    let index = 0;

    let shoot = array[index];

    while (shoot != "End") {
        let command = shoot.split(" ");

        let currentCommand = command.splice(0, 1).toString();

        if (currentCommand == "Shoot") {
            let indexOfShooting = Number(command.splice(0, 1));

            let valueOfShoot = Number(command.splice(0));

            if (indexOfShooting < lengthOfTargets && indexOfShooting >= 0) {

                let numberToReduce = Number(targets[indexOfShooting]);

                let result = numberToReduce - valueOfShoot;

                if (result <= 0) {
                    targets.splice(indexOfShooting, 1);
                } else {
                    targets.splice(indexOfShooting, 1, result);
                }
            }
        } else if (currentCommand == "Add") {
            let indexToAdd = Number(command.splice(0, 1));

            let numToAdd = Number(command.splice(0));

            if (indexToAdd < lengthOfTargets && indexToAdd >= 0) {
                targets.splice(indexToAdd, 0, numToAdd);
            } else {
                console.log("Invalid placement!");
            }
        } else if (currentCommand == "Strike") {
            let indexToStrike = Number(command.splice(0, 1));

            let numToStrike = Number(command.splice(0));

            let startingPointToRemove = Number(targets[indexToStrike - numToStrike]);

            let finishingPointOfRemoving = Number(
                targets[indexToStrike + numToStrike]
            );

            if (isNaN(startingPointToRemove) || isNaN(finishingPointOfRemoving)) {
                console.log("Strike missed!");
            } else {
                let numbersToRemove = numToStrike + numToStrike + 1;

                targets.splice(indexToStrike - numToStrike, numbersToRemove);
            }
        }

        index++;
        shoot = array[index];
        lengthOfTargets = array.length;
    }

    console.log(targets.join("|"));
}