function demo(arr) {
    let array = arr;
  
    let targets = array.splice(0, 1).toString().split(" ").map(Number);
  
    let counterOfTargets = 0;
  
    let index = 0;
  
    let indexOfShot = array[index];
  
    let lengthOfArr = targets.length;
  
    let finalArr = [];
  
    while (indexOfShot != "End") {
      let currentShot = Number(indexOfShot);
  
      if (currentShot < lengthOfArr) {
        counterOfTargets++;
  
        let numberToChange = Number(targets[currentShot]);
  
        targets.splice(currentShot, 1, -1);
  
        for (let i = 0; i < lengthOfArr; i++) {
          let currentNum = Number(targets[i]);
  
          if (currentNum == -1) {
            continue;
          }
  
          if (numberToChange < currentNum) {
            let numberToAdd = currentNum - numberToChange;
  
            targets.splice(i, 1, numberToAdd);
          } else if (numberToChange >= currentNum) {
            let resultToAdd = currentNum + numberToChange;
  
            targets.splice(i, 1, resultToAdd);
          }
        }
  
        lengthOfArr = targets.length;
      }
  
      index++;
      indexOfShot = array[index];
    }
  
    console.log(`Shot targets: ${counterOfTargets} -> ${targets.join(" ")}`);
  }