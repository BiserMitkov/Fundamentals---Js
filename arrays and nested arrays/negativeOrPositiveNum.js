function solve(input) {

    let output = [];

    for (let num of input) {

        if (num < 0) {

            output.unshift(num);

        } else if (num >= 0) {

            output.push(num);
        }
    }

    console.log(output.join('\n'));

}