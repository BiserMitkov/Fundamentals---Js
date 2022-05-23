function solve(numbers) {

    let pattern = /\+359 2 \d{3} \d{4}|\+359-2-\d{3}-\d{4}\b/g;

    let result = [];

    while ((currNum = pattern.exec(numbers))!== null) {

        result.push(currNum[0]);
    }

    console.log(result.join(', '));
}