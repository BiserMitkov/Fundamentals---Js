function demo(input) {

    let pattern = /^(@\#{1,})[A-Z][A-Za-z0-9]{4,}[A-Z](@\#{1,})$/;

    let patternForDigits = /\d+/g;

    let rotations = Number(input.shift());

    for (let i = 0; i < rotations; i++) {

        let currBarcode = input[i];

        if ((result = currBarcode.match(pattern)) !== null) {

            if ((result = currBarcode.match(patternForDigits)) !== null) {

                let output = '';
                result.map((el) => output += el);
                console.log(`Product group: ${output}`);

            } else {
                console.log(`Product group: 00`);
            }

        } else {

            console.log('Invalid barcode');
        }
    }

}