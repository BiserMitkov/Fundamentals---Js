function demo(input) {

    let array = input;

    let output = [];

    for (let i = 0; i < array.length; i++) {

        if (i % 2 !== 0) {

            output.unshift(array[i] + array[i]);
        }
    }

    return output.join(' ');
}