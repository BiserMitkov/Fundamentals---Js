function demo(input) {

    let arr = input;

    let wordsToFind = arr.shift();

    let eachWordToFind = wordsToFind.split(' ');

    let words = {};

    for (let el of eachWordToFind) {
        words[el] = 0;
    }

    for (let currWord of arr) {
        
        if (words.hasOwnProperty(currWord)) {

            words[currWord] += 1;
            
        }
    }
    
    let wordsSort = Object.entries(words).sort((a,b) => b[1] - a[1]);

    wordsSort.forEach((el) => console.log(`${el[0]} - ${el[1]}`));
}