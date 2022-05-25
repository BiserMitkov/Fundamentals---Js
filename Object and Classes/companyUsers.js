function demo(arr) {

    let companies = {};

    for (let entry of arr) {
        
        let el = entry.split(' -> ');
        let companyName = el.shift();
        let employeeId = el.shift();
        
        if (!companies.hasOwnProperty(companyName)) {

            companies[companyName] = [employeeId];
            
        } else if (companies.hasOwnProperty(companyName) && !companies[companyName].includes(employeeId)) {

            companies[companyName].push(employeeId);
            
        }
    }
    
    let sortedFirmsByName = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sortedFirmsByName) {
        
        let currName = el.shift();

        for (let currId of el) {
            console.log(currName);
            for (let empl of  currId) {
                console.log(`-- ${empl}`);
            }
        }
    }
    
}