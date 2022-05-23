function demo(arrOfRacers) {

    let listOfCompetitors = arrOfRacers.shift().split(', ');

    let patternForNames = /[A-Za-z]+/g;

    let patternForPoints = /\d+/g;

    let output = {};

    for (let el of arrOfRacers) {

        if (el === 'end of race') {

            break;
        }

        let result = el.match(patternForNames);

        let points = el.replace(patternForNames, '');

        let currName = '';

        for (let ent of result) {
            currName += ent;
        }

        let resultForPoints = points.match(patternForPoints);

        let currPoints = 0;

        for (let entry of resultForPoints) {
            let splitEntry = entry.split('');

            for (let num of splitEntry) {

                currPoints += Number(num);
            }
        }

        if (listOfCompetitors.includes(currName)) {

            if (!output.hasOwnProperty(currName)) {

                output[currName] = currPoints;

            } else {

                let currentPoints = Number(output[currName]);
                let newPoints = currPoints + currentPoints;
                output[currName] = newPoints;
            }
        }
    }

    let entries = Object.entries(output).sort((a, b) => {

        return b[1] - a[1];
    })

    for (let i = 0; i < 3; i++) {

        if (i == 0) {

            console.log(`1st place: ${entries[i][0]}`);

        } else if (i == 1) {

            console.log(`2nd place: ${entries[i][0]}`);
        } else if (i == 2) {

            console.log(`3rd place: ${entries[i][0]}`);
        }
    }
}