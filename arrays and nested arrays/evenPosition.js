function even(input) {

    let length = input.length;
    let output = '';

    for (let i = 0; i < length; i++) {

        if (i % 2 == 0) {

            output += `${input[i]}` + ' ';
        }
    }

    console.log(output);

}