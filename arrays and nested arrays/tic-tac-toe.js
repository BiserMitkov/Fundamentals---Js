function demo(input) {

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let firstPlayer = 'X';
    let secPlayer = 'O';

    let xPlayerCounter = 0;
    let oPlayerCounter = 0;

    for (let i = 0; i < input.length; i++) {

        if (i == xPlayerCounter) {

            let splitCurrMove = input[i].split(' ').map((el) => Number(el));

            let currRow = splitCurrMove.shift();
            let currIndex = splitCurrMove.shift();

            if (dashboard[currRow][currIndex] !== false) {
                console.log('This place is already taken. Please choose another!');
                for (let j = i + 1; j < input.length; j++) {
                    let currMove = input[j].split(' ').map((el) => Number(el));

                    let row = currMove.shift();
                    let index = currMove.shift();

                    if (dashboard[row][index] !== false) {
                        continue;
                    } else {
                        dashboard[row].splice(index, 1, firstPlayer);
                        i = j;
                        break;
                    }
                }

            } else {
                dashboard[currRow].splice(currIndex, 1, firstPlayer);
            }
            oPlayerCounter = i + 1;

        } else if (i == oPlayerCounter) {

            let splitCurrMove = input[i].split(' ').map((el) => Number(el));

            let currRow = splitCurrMove.shift();
            let currIndex = splitCurrMove.shift();

            if (dashboard[currRow][currIndex] !== false) {
                console.log('This place is already taken. Please choose another!');
                for (let j = i + 1; j < input.length; j++) {
                    let currMove = input[j].split(' ').map((el) => Number(el));

                    let row = currMove.shift();
                    let index = currMove.shift();

                    if (dashboard[row][index] !== false) {
                        continue;
                    } else {
                        dashboard[row].splice(index, 1, secPlayer);
                        i = j;
                        break;
                    }
                }

            } else {
                dashboard[currRow].splice(currIndex, 1, secPlayer);
            }
            xPlayerCounter = i + 1;
        }

        let isGameEnded = true;
        // checking is there free space on the dashboard
        dashboard.forEach((el) => {

            for (let currEl of el) {

                if (currEl == false) {
                    isGameEnded = false;
                    break;
                }
            }
        })

        if (isGameEnded) {
            console.log('The game ended! Nobody wins :(');
            dashboard.forEach((el) => console.log(`${el.join('\t')}`));
            return;
        }

        for (let ent = 0; ent < dashboard.length; ent++) {                  // checking every row for a winner 

            let row = dashboard[ent];
            let xPlayer = 0;
            let oPlayer = 0;
            row.forEach((el) => {

                if (el == 'O') {
                    oPlayer++;
                } else if (el == 'X') {
                    xPlayer++;
                }
            });
            if (xPlayer == 3) {
                console.log(`Player ${row[0]} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            } else if (oPlayer == 3) {
                console.log(`Player ${row[0]} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            }
            let playerFirst = 0;
            let playerSec = 0;
            for (let col = 0; col < dashboard.length; col++) {                      // checking every column for a winner

                if (dashboard[col][ent] == 'O') {
                    playerSec++;
                } else if (dashboard[col][ent] == 'X') {
                    playerFirst++;
                }

                if (playerFirst == 3) {
                    console.log(`Player ${firstPlayer} wins!`);
                    dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                    return;
                } else if (playerSec == 3) {
                    console.log(`Player ${secPlayer} wins!`);
                    dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                    return;
                }
            }
            let xPlayerLeft = 0;
            let oPlayerLeft = 0;
            for (let left = 0; left < dashboard.length; left++) {                            // checking left diagonal for winner

                if (dashboard[left][left] == 'O') {
                    oPlayerLeft++;
                } else if (dashboard[left][left] == 'X') {
                    xPlayerLeft++;
                }
            }

            if (xPlayerLeft == 3) {
                console.log(`Player ${firstPlayer} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            } else if (oPlayerLeft == 3) {
                console.log(`Player ${secPlayer} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            }
            let xPlayerRight = 0;
            let oPlayerRight = 0;
            for (let right = 0; right < dashboard.length; right++) {                    // checking right diagonal for winner

                if (dashboard[right][dashboard[right].length - 1 - right] == 'O') {
                    oPlayerRight++;
                } else if (dashboard[right][dashboard[right].length - 1 - right] == 'X') {
                    xPlayerRight++;
                }
            }

            if (xPlayerRight == 3) {
                console.log(`Player ${firstPlayer} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            } else if (oPlayerRight == 3) {
                console.log(`Player ${secPlayer} wins!`);
                dashboard.forEach((el) => console.log(`${el.join('\t')}`));
                return;
            }
        }
    }


}
demo(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

)