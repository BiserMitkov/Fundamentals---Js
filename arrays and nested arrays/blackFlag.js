function demo(arr) {
    let days = Number(arr.shift());

    let plunderForADay = Number(arr.shift());

    let expectedReach = Number(arr.shift());

    let daysCounter = 0;

    let result = 0;

    while (days > 0) {

        daysCounter++;
        result += plunderForADay;
       
        if (daysCounter % 3 === 0) {

            let bonusToAdd = plunderForADay * 0.5;
            result += bonusToAdd;
        } 
        
        if (daysCounter % 5 === 0) {

            let newResult = result - result * 0.3;

            result = newResult;
        }

        days--;
    }

    if (result >= expectedReach) {

        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
        
    } else if (result < expectedReach) {

        let output = (result / expectedReach) * 100

        console.log(`Collected only ${output.toFixed(2)}% of the plunder.`);
    }
}