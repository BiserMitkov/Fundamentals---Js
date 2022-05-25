function demo(arr) {

    let guests = {
        vip: [],
        regular: []
    }

    let currGuest = arr.shift();

    while (currGuest !== 'PARTY') {

        if (!isNaN(currGuest[0])) {
            guests.vip.push(currGuest);
        } else {
            guests.regular.push(currGuest)
        }
        currGuest = arr.shift();
    }

    for (let guest of arr) {
        
        if (guests.regular.includes(guest)) {

            let indexOfThatGuest = guests.regular.indexOf(guest);

            guests.regular.splice(indexOfThatGuest,1);

        } else if (guests.vip.includes(guest)) {

            let indexOfVipGuest = guests.vip.indexOf(guest);

            guests.vip.splice(indexOfVipGuest,1);
        }
    }

    console.log(guests.regular.length + guests.vip.length);
    console.log(guests.vip.join('\n'));
    console.log(guests.regular.join('\n'));

    

}