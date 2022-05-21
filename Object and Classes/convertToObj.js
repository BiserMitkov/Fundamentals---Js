function demo(string) {
    
    let parsedObj = JSON.parse(string);

    let entries = Object.entries(parsedObj);

    for (let el of entries) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}