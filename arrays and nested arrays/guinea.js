function demo(arr) {
    let food = Number(arr[0]);

    let hay = Number(arr[1]);

    let cover = Number(arr[2]);

    let foodInGrams = food * 1000;

    let hayInGrams = hay * 1000;

    let coverInGrams = cover * 1000;

    let weigth = Number(arr[3]);

    let weigthInGrams = weigth * 1000;

    let month = 30;

    let counterForTheDays = 0;

    while (month > 0) {

        counterForTheDays++;

        month--;

        if (counterForTheDays % 2 === 0 && counterForTheDays % 3 === 0) {

            foodInGrams -= 300;

            let currentHayToDecrease = foodInGrams - foodInGrams * 0.95;

            hayInGrams -= currentHayToDecrease;

            let coverToDecrease = weigthInGrams / 3;

            coverInGrams -= coverToDecrease;
        } else if (counterForTheDays % 2 === 0) {

            foodInGrams -= 300;

            let hayToDecrease = foodInGrams - foodInGrams * 0.95;

            hayInGrams -= hayToDecrease;

        } else if (counterForTheDays % 3 === 0) {

            let coverToDecrease = weigthInGrams / 3;

            coverInGrams -= coverToDecrease;

            foodInGrams -= 300;

        } else {
            foodInGrams -= 300;
        }

        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    let gramsInKilos = foodInGrams / 1000;

    let hayInKilos = hayInGrams / 1000;

    let coverInKilos = coverInGrams / 1000;

    console.log(
        `Everything is fine! Puppy is happy! Food: ${gramsInKilos.toFixed(
            2
        )}, Hay: ${hayInKilos.toFixed(2)}, Cover: ${coverInKilos.toFixed(2)}.`
    );
}