function demo(input) {

    let patternForLetters = /[^0-9.\/+*-]/g;
    let patternForNumbers = /[+-]?\d+\.?\d*/g;
    let patternForSplit = /[, ]+/g;
    let patternForCurrOperator = /\*|\//g;

    let output = {};

    let arr = input.split(patternForSplit);

    let demons = arr.sort((a, b) => a.localeCompare(b));

    for (let demon of demons) {
        
        let health = 0;
        let damage = 0;
        output[demon] = {};
        let result = demon.match(patternForLetters);
        if (result !== null) {

            for (let letter of result) {
            
                health += letter.charCodeAt();
            }
        }
        
        
        let damageResult = demon.match(patternForNumbers);

        if (damageResult !== null) {

            for (let num of damageResult) {
            
                damage += Number(num);
            }
        }
        

        let currOperator = demon.match(patternForCurrOperator);

        if (currOperator !== null) {

            for (let sign of currOperator) {
            
                if (sign == '*') {
    
                    damage = damage * 2;
    
                } else if (sign == '/') {
    
                    damage = damage / 2;
                }
            }
        }

        output[demon]['health'] = health;
        output[demon]['damage'] = damage;
    }

    for (let key in output) {

        let name = key;
        let tempArr = [];

        for (let currD in output[key]) {
            
            tempArr.push(output[key][currD])
        }

        console.log(`${name} - ${tempArr.shift()} health, ${tempArr.shift().toFixed(2)} damage`);
    }

}