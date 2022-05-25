function demo(arr) {

    let travelList = {};


    for (let el of arr) {

        let currEl = el.split(' > ');
        let country = currEl.shift();
        let city = currEl.shift();
        let price = Number(currEl.shift());

        if (!travelList.hasOwnProperty(country)) {

            travelList[country] = {};
        }

        if (!travelList[country].hasOwnProperty(city)) {

            travelList[country][city] = price;

        } else if (travelList[country].hasOwnProperty(city) && travelList[country][city] >= price) {

            travelList[country][city] = price;
        }
    }

    let countriesSorted = Object.entries(travelList).sort((a, b) => a[0].localeCompare(b[0]));

    let result = [];

    for (let entry of countriesSorted) {
        
        let country = entry.shift();

        for (let city of entry) {
            
            let sortedCities = Object.entries(city).sort((a, b) => {

                return a[1] - b[1];
            })
            result = result.concat(sortedCities.toString().split(','));
            let output = '';
            for (let currTown of result) {
                if(!isNaN(Number(currTown))) {
                    output += ` -> ${currTown} `;
                } else {
                    output += `${currTown}`;
                }
            }

            console.log(`${country} -> ${output}`);
        }

        result = [];
        
    }

    
}