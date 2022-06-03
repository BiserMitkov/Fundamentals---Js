function demo(numbers) {
    let sequence = numbers.split(" ").map(Number);
  
    let lengthOfSequence = sequence.length;
  
    let result = sequence.reduce((firstNum, secNum) => firstNum + secNum);
  
    result = result / sequence.length;
  
    let arr = sequence.filter((el) => {
      if (el > result) {
        return el;
      }
    });
  
    let finalArr = arr.sort((a, b) => b - a);
  
    let topFive = "";
  
    let lengthOfFinalArr = finalArr.length;
  
    if (lengthOfFinalArr > 5) {
      for (let i = 0; i < 5; i++) {
        topFive += `${Number(finalArr[i])} `;
      }
    } else if (lengthOfFinalArr <= 5) {
      for (let j = 0; j < lengthOfFinalArr; j++) {
        topFive += `${Number(finalArr[j])} `;
      }
    }
  
    if (lengthOfFinalArr == 0) {
      console.log("No");
    } else {
      console.log(topFive);
    }
  }