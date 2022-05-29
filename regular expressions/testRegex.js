function demo(input) {

    let pattern = /@[A-Za-z]{3,}@@[A-Za-z]{3,}@|#[A-Za-z]{3,}##[A-Za-z]{3,}#/g;
 
    let words = [];
 
    while ((result = pattern.exec(input)) !== null) {
 
       words.push(result.shift());
    }
 
    let mirrorWords = '';
    let output = [];
 
    if (words.length > 0) {
       console.log(`${words.length} word pairs found!`);
       let tempArr = [];
 
       for (let el of words) {
 
          if (el.includes('#')) {
 
             let splitEl = el.split('#');
 
             splitEl.filter((el) => {
                if (el.length > 1) {
                   tempArr.push(el);
                }
             })
 
             let firstWord = tempArr.shift();
             let secWord = tempArr.shift();
 
             let reversedFirstWord = firstWord.split('').reverse().join('');
             
             if (reversedFirstWord == secWord && reversedFirstWord.length == secWord.length) {
 
                mirrorWords = `${firstWord} <=> ${secWord}`;
                output.push(mirrorWords);
             }
 
          } else if (el.includes('@')) {
 
             let splitEl = el.split('@');
 
             splitEl.filter((el) => {
                if (el.length > 1) {
                   tempArr.push(el);
                }
             })
 
             let firstWord = tempArr.shift();
             let secWord = tempArr.shift();
 
             let reversedFirstWord = firstWord.split('').reverse().join('');
             
 
             if (reversedFirstWord == secWord && reversedFirstWord.length == secWord.length) {
 
                mirrorWords = `${firstWord} <=> ${secWord}`;
                output.push(mirrorWords);
             }
          }
 
       }
 
    } else {
 
       console.log(`No word pairs found!`);
       
    }
 
    if (output.length > 0) {
 
       console.log('The mirror words are:');
       console.log(`${output.join(', ')}`);
 
    } else {
       console.log(`No mirror words!`);
    }
    
    
 }