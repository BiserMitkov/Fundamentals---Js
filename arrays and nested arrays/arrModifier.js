function memoryGame(arr) {
    let array = arr;

    let sequenceOfNumbers = array.splice(0, 1).toString().split(" ").map(Number);

    let index = 0;

    let elementOfArr = array[index];

    while (elementOfArr !== "end") {
        let currentElement = elementOfArr.toString().split(" ");

        let command = currentElement.splice(0, 1).toString();

        if (command === "swap") {
            let firstIndex = Number(currentElement.splice(0, 1));

            let secondIndex = Number(currentElement.splice(0));

            let firstNumberToSwap = Number(sequenceOfNumbers[firstIndex]);

            let secNumberToSwap = Number(sequenceOfNumbers[secondIndex]);

            sequenceOfNumbers.splice(secondIndex, 1, firstNumberToSwap);

            sequenceOfNumbers.splice(firstIndex, 1, secNumberToSwap);
        } else if (command === "multiply") {
            let firstIndexToMultiply = Number(currentElement.splice(0, 1));

            let secondIndexToMultiply = Number(currentElement.splice(0));

            let firstNumToMultiply = Number(sequenceOfNumbers[firstIndexToMultiply]);

            let secNumToMultiply = Number(sequenceOfNumbers[secondIndexToMultiply]);

            let result = firstNumToMultiply * secNumToMultiply;

            sequenceOfNumbers.splice(firstIndexToMultiply, 1, result);
        } else if (command === "decrease") {
            sequenceOfNumbers = sequenceOfNumbers.map((el) => el - 1);
        }

        index++;
        elementOfArr = array[index];
    }

    console.log(sequenceOfNumbers.join(", "));
}