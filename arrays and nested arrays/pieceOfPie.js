function solve(arr, startingPie, endingPie) {

    let indexOfStartingPie = arr.indexOf(startingPie);

    let indexOfEndingPie = arr.indexOf(endingPie);

    let pies = arr.slice(indexOfStartingPie, indexOfEndingPie + 1);

    return pies;
}