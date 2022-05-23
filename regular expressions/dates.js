function solve(dates) {

    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    while ((result = pattern.exec(dates)) !== null) {

        let day = result.groups.day
        let month = result.groups.month
        let year = result.groups.year
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    
}