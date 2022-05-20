function sumFirstLast(input) {

    let array = input;

    let leftSideNumber = Number(array.shift());

    let rightSideNumber = Number(array.pop());

    return leftSideNumber + rightSideNumber;

}