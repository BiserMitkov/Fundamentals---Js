function demo(input) {

    let pattern = /\*{2}[A-Z][a-z]{2,}\*{2}|:{2}[A-Z][a-z]{2,}:{2}/g;
 
    let patternNum = /\d/g;
 
    let patternLetters = /[A-Za-z]/g;
 
    let emoji = [];
 
    let sum = 1;
 
    while ((result = pattern.exec(input)) !== null) {
 
       emoji.push(result.shift())
    }
 
    while ((result = patternNum.exec(input)) !== null) {
       
       sum *= Number(result.shift());
       
    }
 
    let output = [];
 
    for (let el of emoji) {
 
       let currWordSum = 0;
 
       while ((result = patternLetters.exec(el)) !== null) {
 
          let letterToNum = result.shift().charCodeAt();
 
          currWordSum += letterToNum;
       }
 
       if (currWordSum >= sum) {
 
          output.push(el)
       }
    }
 
    console.log(`Cool threshold: ${sum}`);
    console.log(`${emoji.length} emojis found in the text. The cool ones are:`);
    console.log(`${output.join('\n')}`);
    
 
 }