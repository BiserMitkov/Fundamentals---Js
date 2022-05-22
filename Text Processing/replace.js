function solve(str) {

    let output = '';

    for (let el of str) {
        
        if (output[output.length - 1] !== el) {

            output += el;
        }
    }

    console.log(output);

}