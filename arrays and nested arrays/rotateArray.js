function demo(arr, num) {

    for (let i = 0; i < num; i++) {

        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    console.log(arr.join(' '));

}
demo(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)