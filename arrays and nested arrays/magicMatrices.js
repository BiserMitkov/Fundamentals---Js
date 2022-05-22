function demo(matrix) {

    let row = matrix[0].reduce((a, b) => a += b);

    for (let i = 0; i < matrix[0].length; i++) {

        let column = 0;

        for (let j = 0; j < matrix.length; j++) {

            let arr = matrix[j];

            column += arr[i];
        }

        if (row != column) {

            return false;

        }
    }

    return true;
}
demo([[4, 5, 6], [6, 5, 4], [5, 5, 5]])