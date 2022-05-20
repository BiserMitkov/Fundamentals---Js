function solve(input) {

    let output = [];

    let array = input;

    for (let i = 0; i < 2; i++) {

        let smallestOne = Math.min(...array);

        let indexOfSmallNumber = array.indexOf(smallestOne);

        array.splice(indexOfSmallNumber, 1);

        output.push(smallestOne);
    }

    console.log(`${output.join(' ')}`);
}