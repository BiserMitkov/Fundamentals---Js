function solve(input) {

    let array = input;

    array.sort((a, b) => a - b);

    let length = array.length;

    if (length % 2 !== 0) {

        let elements = Math.ceil(length / 2);
        let output = array.slice(array.length - elements);
        return output;

    } else {

        let elements = length / 2;
        let output = array.slice(array.length - elements);
        return output;
    }
}