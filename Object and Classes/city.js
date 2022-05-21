function demo(obj) {

    
    let infoCity = obj;

    let entries = Object.entries(infoCity);

    for (let el of entries) {
        
        console.log(`${el[0]} -> ${el[1]}`);
    }

}