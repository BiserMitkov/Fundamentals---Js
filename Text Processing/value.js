function demo(arr) {

    let text = arr.shift();
    let typeOfCommand = arr.shift();

    let sum = 0;

    let textIntoArr = text.split('');

    let lettersToWorkWith = '';

    if (typeOfCommand === 'LOWERCASE') {

        textIntoArr.filter((el) => {

            if (el !== el.toUpperCase()) {

                lettersToWorkWith += el;
            }
        })
    } else if (typeOfCommand === 'UPPERCASE') {

        textIntoArr.filter((el) => {

            if (el !== el.toLowerCase()) {

                lettersToWorkWith += el;
            }
        })
    }

    for (let ent of lettersToWorkWith) {

        let letterIntoNum = ent.charCodeAt();

        sum += letterIntoNum;
    }

    console.log(`The total sum is: ${sum}`);

}