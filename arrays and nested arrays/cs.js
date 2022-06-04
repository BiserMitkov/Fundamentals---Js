function demo(arr) {
    let array = arr;

    let energy = Number(array.splice(0, 1));

    let counterOfWinning = 0;

    let index = 0;

    let distance = array[index];

    while (distance != 'End of battle') {

        let currentDistance = Number(distance);

        if (energy < currentDistance) {

            console.log(`Not enough energy! Game ends with ${counterOfWinning} won battles and ${energy} energy`);
            return;
        }

        energy -= currentDistance;

        counterOfWinning++;

        if (counterOfWinning % 3 == 0) {

            energy += counterOfWinning;
        }

        index++;
        distance = array[index];


    }

    console.log(`Won battles: ${counterOfWinning}. Energy left: ${energy}`);



}