function demo(input) {

    let arr = input.split(' ');

    let specialEl = new Map();

    for (let entry of arr) {
        
        let currEl = entry.toLowerCase();

        if (specialEl.has(currEl)) {

            let currCount = specialEl.get(currEl);
            currCount += 1;
            specialEl.set(currEl, currCount);
            
            
        } else {
            specialEl.set(currEl, 1);
            
            
        }
    }

    let entries = Array.from(specialEl.entries()).filter((el) => {
        
        if (el[1] % 2 !== 0) {

            return el;
        }
    })

    let oddWords = '';

    entries.forEach((el) => oddWords += `${el[0]} `);

    console.log(oddWords);


}