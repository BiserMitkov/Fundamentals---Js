function solve(str) {

    let output = '';

    for (let i = 0; i < str.length; i++) {

        let currLetter = str[i];
        
        if (i > 1 && currLetter !== currLetter.toLowerCase()) {

            output += `, ${currLetter}`
        } else {
            output += currLetter;
        }
    }

    console.log(output);
    

}