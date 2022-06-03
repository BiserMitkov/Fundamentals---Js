function memoryGame(array) {
    let firstWorker = Number(array.splice(0, 1));
   
    let secondWorker = Number(array.splice(0, 1));
   
    let thirdWorker = Number(array.splice(0, 1));
   
    let students = Number(array.splice(0));
   
    let howManyStudentsPerHour = firstWorker + secondWorker + thirdWorker;
   
    let hourCounter = 0;
   
    let finalTimeNeeded = 0;
   
    let howManyHours = 0;
   
    while (students > 0) {
      hourCounter++;
   
      if (hourCounter % 4 === 0) {
      } else {
        students -= howManyStudentsPerHour;
      }
    }
   
    console.log(`Time needed: ${hourCounter}h.`);
  }