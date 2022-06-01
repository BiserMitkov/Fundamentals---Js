function demo(input) {

    let key = input.shift();
 
    let index = 0;
    let el = input[index];
 
    while (el !== 'Generate') {
 
       if (el.includes('Contains')) {
 
          let [command, str] = el.split('>>>')
 
          if (key.includes(str)) {
 
             console.log(`${key} contains ${str}`);
          } else {
             console.log(`Substring not found!`);
          }
 
 
       } else if (el.includes('Flip')) {
 
          let [command, type, start, end] = el.split('>>>');
          let sub = '';
 
          for (let i = Number(start); i < Number(end); i++) {
 
             if (type == 'Upper') {
                sub += key[i].toUpperCase();
             } else {
                if (key[i] == key[i].toLowerCase()) {
                   continue;
                } else {
                   sub += key[i].toLowerCase();
                }
                
             }
          }
 
          if (type == 'Upper') {
 
             let tempSub = sub.toLowerCase();
             key = key.replace(tempSub, sub);
 
          } else {
 
             let tempSub = sub.toUpperCase();
             key = key.replace(tempSub, sub);
             
          }
 
          console.log(key);
 
       } else if (el.includes('Slice')) {
 
          let [command, start, end] = el.split('>>>');
 
          let substring = key.substring(Number(start), Number(end));
 
          key = key.replace(substring, '');
 
          console.log(key);
       }
 
       index++;
       el = input[index];
    }
 
    console.log(`Your activation key is: ${key}`);
 
 }