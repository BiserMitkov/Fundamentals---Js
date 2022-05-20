function lastKNumber(a, b) {
    let nNumber = a;

    let kNumber = b;

    let newArr = [1];

    for (let i = 1; i < nNumber; i++) {
        if (i > 1) {
            if (newArr.length >= kNumber) {
                let tempArr = newArr.slice(newArr.length - kNumber);
                let newNumberToAdd = tempArr.reduce((a, b) => Number(a + b));
                newArr.push(newNumberToAdd);
            } else {
                let newNumberToAdd = newArr.reduce((a, b) => Number(a + b));
                newArr.push(newNumberToAdd);
            }
        } else {
            newArr.push(i);
        }
    }

	return newArr;
}