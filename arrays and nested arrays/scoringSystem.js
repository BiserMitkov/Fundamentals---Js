function demo(array) {

    let students = Number(array.shift());

    let lectures = Number(array.shift());

    let bonus = Number(array.shift());

    let finalResult = Number.MIN_VALUE;

    let lectureOfWinning = 0;

    for (let el of array) {
        let result = 0;
        let currEl = Number(el);

        result = currEl / lectures * (5 + bonus);

        

        if (finalResult <= result) {
            finalResult = result;
            lectureOfWinning = currEl;
        }

    }

    console.log(`Max Bonus: ${Math.round(finalResult)}.`);
    console.log(`The student has attended ${lectureOfWinning} lectures.`);



}