function solve(str) {

    let length = str.length;

    let firstHalf = str.substring(length / 2);
    let secHalf = str.substring(0, length / 2);
    
    let tempArr = [];
    tempArr.push(secHalf, firstHalf);

    for (let el of tempArr) {
        let split = el.split('');
        let reverse = split.reverse();
        console.log(reverse.join(''));
    }

    
}