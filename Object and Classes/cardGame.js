function demo(arr) {
    // J, Q, K, A - 11, 12, 13, 14 - power
    // S, H, D, C - 4, 3, 2, 1 - type;

    let players = {};

    for (let el of arr) {

        let currEl = el.split(":").toString().split(", ");

        let nameOfThePlayer = currEl.shift().toString();

        let cards = [];

        for (let currCard of currEl) {

            let card = currCard;

            if (cards.includes(card)) {

            } else {

                cards.push(card);
            }
        }

        if (players.hasOwnProperty(nameOfThePlayer)) {

            for (let cardOfCurrentCards of cards) {

                let cardToRemoveOrAdd = cardOfCurrentCards;

                if (players[nameOfThePlayer].includes(cardToRemoveOrAdd)) {

                } else {

                    players[nameOfThePlayer].push(cardToRemoveOrAdd);
                }
            }

        } else {

            players[nameOfThePlayer] = [...cards];
        }
    }

    let entries = Object.entries(players);

    for (let entry of entries) {

        let nameOfThePlayer = entry.shift();

        for (let card of entry) {

            let sum = 0;

            for (let currCard of card) {

                let element = currCard.split('');
                let power = '';
                let type = '';
                if (element.length === 3) {
                    power = `${element[0]}${element[1]}`
                    type = element[2];

                } else {
                    power = element.shift();
                    type = element.shift();
                }

                if (isNaN(power)) {
                    switch (power) {
                        case 'J': power = 11; break;
                        case 'Q': power = 12; break;
                        case 'K': power = 13; break;
                        case 'A': power = 14; break;
                    }
                } else {
                    power = Number(power);
                }

                switch (type) {
                    case 'S': type = 4; break;
                    case 'H': type = 3; break;
                    case 'D': type = 2; break;
                    case 'C': type = 1; break;
                }

                sum += power * type;
            }
            console.log(`${nameOfThePlayer}: ${sum}`);
        }
    }


}