function demo(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let listOfNames = names;

    let result = [];

    while ((currName = pattern.exec(listOfNames)) !== null) {

        result.push(currName[0]);
    }

    console.log(result.join(' '));
}