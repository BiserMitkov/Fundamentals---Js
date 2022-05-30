function demo(input) {

    let firstTypeOfPattern = /\/[A-Z][A-Za-z]{2,}\/|=[A-Z][A-Za-z]{2,}=/g;
    let patternForLetters = /[A-Z][A-Za-z]+/g;
    let tempArr = [];
 
    while ((result = firstTypeOfPattern.exec(input)) !== null) {
 
       tempArr.push(result.shift());
    }
 
    let output = [];
 
    while ((result = patternForLetters.exec(tempArr)) !== null) {
 
       output.push(result.shift())
    }
 
    let travelPoints = 0;
 
    for (let el of output) {
       
       travelPoints += el.length;
    }
 
    console.log(`Destinations: ${output.join(', ')}\nTravel Points: ${travelPoints}`);
    
    
 }