function demo(input) {

    let numOfRotations = Number(input.shift());
    let output = {};

    for (let i = 0; i < numOfRotations; i++) {

        let [name, artist, key] = input[i].split('|');

        if (!output.hasOwnProperty(name)) {

            output[name] = {};
            output[name]['artistName'] = artist;
            output[name]['currKey'] = key;
        }

    }

    let index = numOfRotations;
    let el = input[index];

    while (el !== 'Stop') {

        if (el.includes('Add')) {

            let [command, name, artist, key] = el.split('|');

            if (!output.hasOwnProperty(name)) {

                output[name] = {};
                output[name]['artistName'] = artist;
                output[name]['currKey'] = key;
                console.log(`${name} by ${artist} in ${key} added to the collection!`);

            } else {
                console.log(`${name} is already in the collection!`);
            }

        } else if (el.includes('ChangeKey')) {

            let [command, name, key] = el.split('|');

            if (output.hasOwnProperty(name)) {

                output[name]['currKey'] = key;
                console.log(`Changed the key of ${name} to ${key}!`);

            } else {

                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }

        } else if (el.includes('Remove')) {

            let [command, name] = el.split('|');

            if (output.hasOwnProperty(name)) {
                console.log(`Successfully removed ${name}!`);
                delete output[name];
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }

        index++;
        el = input[index];
    }

    for (let key in output) {

        let name = key;
        let tempArr = [];

        for (let el in output[key]) {
            tempArr.push(output[key][el])
        }

        console.log(`${name} -> Composer: ${tempArr.shift()}, Key: ${tempArr.shift()}`);
    }

}