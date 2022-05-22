function solve(elements) {

    let alphabetObj = {
        a:1,
        b: 2,
        c: 3, 
        d: 4,
        e: 5, 
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    }

    let sum = 0;

    let splitElements = elements.split(' ');
    
    for (let el of splitElements) {
        
        let firstLetter = '';
        let secLetter = '';
        let tempNum = '';
        let counter = 0;
        let tempSum = 0;
        for (let ent of el) {
            
            counter++;

            if (counter == 1) {
                firstLetter = ent;

            } else if (counter == el.length) {

                secLetter = ent;
            } else {
                tempNum += ent;
                
            }
        }

        let firstLetterIntoLowerCase = firstLetter.toLowerCase();
        let tempSumIntoNum = Number(tempNum);
        let secLetterIntoLowerCase = secLetter.toLowerCase();

        if (alphabetObj.hasOwnProperty(firstLetterIntoLowerCase) && firstLetter !== firstLetterIntoLowerCase) {

            tempSumIntoNum = tempSumIntoNum / Number(alphabetObj[firstLetterIntoLowerCase]);
            
        } else if (alphabetObj.hasOwnProperty(firstLetterIntoLowerCase) && firstLetter === firstLetterIntoLowerCase) {

            tempSumIntoNum = tempSumIntoNum * Number(alphabetObj[firstLetterIntoLowerCase]);
        }
        
        if (alphabetObj.hasOwnProperty(secLetterIntoLowerCase) && secLetterIntoLowerCase !== secLetter) {

            tempSumIntoNum = tempSumIntoNum - Number(alphabetObj[secLetterIntoLowerCase]);
            
        } else if (alphabetObj.hasOwnProperty(firstLetterIntoLowerCase) && secLetter === secLetterIntoLowerCase) {

            tempSumIntoNum = tempSumIntoNum + Number(alphabetObj[secLetterIntoLowerCase]);
        }

        sum += tempSumIntoNum;
    }

    console.log(sum.toFixed(2));

}