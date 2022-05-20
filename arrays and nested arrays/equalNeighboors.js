function solve(input) {

    let count = 0;

    let length = input.length;

    for (let i = 0; i < length; i++) {

        let currArr = input[i++];
        let nextArr = input[i];

        for (let j = 0; j < currArr.length; j++) {
            
            let currEl = currArr[j];

            for (let k = j + 1; k < currArr.length; k++) {

                let nextEl = currArr[k];

                if (currEl == nextEl) {
                    count++;

                } else {
                    break;
                }
            }
        }

        if (nextArr == undefined) {

            return count;
        }

        for (let i = 0; i < currArr.length; i++) {

            let el = currArr[i];

            for (let j = 0; j < nextArr.length; j++) {

                let nextEl = nextArr[j];

                if (el == nextEl && i == j) {
                    count++;
                }
            }
        }

        i = i - 1;
    }

}