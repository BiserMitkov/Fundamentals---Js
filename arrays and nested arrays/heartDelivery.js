function demo(arr) {

    let array = arr;

    let neighborhood = array.splice(0, 1);

    neighborhood = neighborhood.toString().split('@').map(Number);

    let index = 0;

    let jump = array[index];

    let lastIndex = 0;

    let startingFromLastIndex = 0;

    while (jump !== 'Love!') {

        let currentL = jump.split('Jump ');

        currentL = Number(currentL[1]);

        if ((lastIndex + currentL) > neighborhood.length - 1) {

            let house = 0;

            house = Number(neighborhood[0]);

            let indexOfFirstHouse = neighborhood.indexOf(house);

            if (house === 0) {

                console.log(`Place ${indexOfFirstHouse} already had Valentine's day.`);
            } else {
                let firstHouseDecrease = house - 2;
                if (firstHouseDecrease <= 0) {

                    console.log(`Place ${indexOfFirstHouse} has Valentine's day.`);
                    neighborhood.splice(indexOfFirstHouse, 1, firstHouseDecrease);
                } else {
                    neighborhood.splice(indexOfFirstHouse, 1, firstHouseDecrease);
                }
            }


            lastIndex = 0;
            startingFromLastIndex = 0;
        } else {


            let house = 0;

            for (let i = startingFromLastIndex; i <= (currentL + startingFromLastIndex); i++) {

                house = Number(neighborhood[i]);

                lastIndex = i;
            }

            if (house === 0) {
                console.log(`Place ${lastIndex} already had Valentine's day.`);
            } else {
                let heartsDecreased = house - 2;
                if (heartsDecreased <= 0) {
                    console.log(`Place ${lastIndex} has Valentine's day.`);
                    neighborhood.splice(lastIndex, 1, heartsDecreased);
                } else {
                    neighborhood.splice(lastIndex, 1, heartsDecreased);
                }
            }

            startingFromLastIndex = lastIndex;
        }

        index++;
        jump = array[index];
    }

    let failedHouses = 0;

    for (const house of neighborhood) {

        let currHouse = Number(house);

        if (currHouse > 0) {

            failedHouses++;
        }

    }

    if (failedHouses === 0) {

        console.log(`Cupid's last position was ${lastIndex}.`);
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid's last position was ${lastIndex}.`);
        console.log(`Cupid has failed ${failedHouses} places.`);
    }
}