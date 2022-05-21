function solve(input) {
    let array = input;
  
    let finalStudents = [];
  
    for (let el of array) {
      let student = el.split(" ").toString().split(",");
  
      let tempArr = [];
  
      let students = {};
  
      tempArr.push(student[2], Number(student[5]), Number(student[12]));
  
      for (let info of tempArr) {
        let [currName, currGrade, currAverage] = tempArr.toString().split(",");
  
        students.currName = currName;
        students.currGrade = Number(currGrade);
        students.currAverage = Number(currAverage);
  
        finalStudents.push(students);
  
        break;
      }
    }
  
    let sorted = finalStudents.sort((a, b) => {
      return a.currGrade - b.currGrade;
    });
  
    let gradesGreaterThenThree = sorted.filter((el) => {
      if (el.currAverage > 3) {
        return el;
      }
    });
  
    let finalObj = {};
  
    let finalArrWithSameGrades = [];
  
    let names = "";
  
    let average = 0;
  
    let result = 0;
  
    let counter = 0;
  
    for (let i = 0; i < gradesGreaterThenThree.length; i++) {
      let firstObj = gradesGreaterThenThree[i];
  
      for (let j = i + 1; j < gradesGreaterThenThree.length; j++) {
        let secObj = gradesGreaterThenThree[j];
  
        if (
          firstObj.currGrade == secObj.currGrade &&
          !finalArrWithSameGrades.includes(firstObj.currGrade)
        ) {
          counter++;
          if (counter > 1) {
            names += `, ${secObj.currName}`;
            average += secObj.currAverage;
          } else {
            names += `${firstObj.currName}, ${secObj.currName}`;
            average += firstObj.currAverage + secObj.currAverage;
          }
        }
      }
      if (counter >= 1) {
        result = Number(average / (counter + 1)).toFixed(2);
        finalArrWithSameGrades.push(firstObj.currGrade, names, result);
      } else if (
        counter <= 0 &&
        !finalArrWithSameGrades.includes(firstObj.currGrade)
      ) {
        let finalResult = firstObj.currGrade;
        let currName = firstObj.currName;
        let averageScore = Number(firstObj.currAverage).toFixed(2);
        finalArrWithSameGrades.push(finalResult, currName, averageScore);
      }
      names = "";
      average = 0;
      counter = 0;
    }
  
    let counterForOutput = 0;
  
    for (let el of finalArrWithSameGrades) {
      counterForOutput++;
      if (counterForOutput == 1) {
        console.log(`${el + 1} Grade `);
      } else if (counterForOutput == 2) {
        console.log(`List of students: ${el}`);
        
      } else if (counterForOutput == 3) {
        console.log(`Average annual grade from last year: ${el}`);
        console.log('');
        counterForOutput = 0;
      }
    }
  }