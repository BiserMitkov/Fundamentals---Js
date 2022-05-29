function demo(input) {

    let message = input.shift();
 
    let newInput = input.map((el) => el.split(':|:'));
 
    for (let ent of newInput) {
       
       let command = ent.shift();
 
       if (command == 'Reverse') {
 
          let substring = ent.shift();
 
          if (message.includes(substring)) {
 
             
             message = message.replace(substring, '');
 
             substring = substring.split('').reverse().join('');
 
             message = message + substring;
             console.log(message);
             
          } else {
             console.log('error');
          }
 
       } else if (command == 'ChangeAll') {
 
          let elToRemove = ent.shift();
          let newElToAdd = ent.shift();
 
          while (message.includes(elToRemove)) {
 
             message = message.replace(elToRemove, newElToAdd);
          }
          console.log(message);
 
       } else if (command == 'InsertSpace') {
 
          let spaceToNumber = Number(ent.shift());
 
          let splitMessage = message.split('');
 
          splitMessage.splice(spaceToNumber, 0, " ");
          message = splitMessage.join('');
          console.log( message);
          
       }
    }
 
    console.log(`You have a new text message: ${message}`);
 
 
 }