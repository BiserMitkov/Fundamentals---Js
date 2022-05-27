function demo(arr) {

    let sum = 0;

    let firstEl = arr.shift();
    let secEl = arr.shift();
    let text = arr.shift();

    let firstElToNumber = firstEl.charCodeAt();
    let secElToNumber = secEl.charCodeAt();

    let biggerNum = Math.max(firstElToNumber, secElToNumber);

    let smallestOne = Math.min(firstElToNumber, secElToNumber);

    for (let ent of text) {

        let elToNumber = ent.charCodeAt();

        if (elToNumber > smallestOne && elToNumber < biggerNum) {

            sum += elToNumber;
        }
    }

    console.log(sum);

}