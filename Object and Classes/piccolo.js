function demo(input) {

    let parkingLot = {};

    for (let car of input) {

        let [command, number] = car.split(', ');

        if (command === 'IN') {
            parkingLot[number] = command;
        } else if (command === 'OUT') {

            delete parkingLot[number];
        }

    }

    let keys = Object.keys(parkingLot);
    let sortingNumbers = keys.sort((a, b) => {
        return a.localeCompare(b);
    })

    if (sortingNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    }else {
        console.log(sortingNumbers.join('\n'));
    }

   
}