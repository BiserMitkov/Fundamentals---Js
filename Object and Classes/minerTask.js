function demo(arr) {

    let resources = {};

    for (let i = 0; i < arr.length; i++) {

        let type = arr[i++];

        let quantity = Number(arr[i]);

        if (!resources.hasOwnProperty(type)) {

            resources[type] = quantity;

        } else if (resources.hasOwnProperty(type)) {

            let currQuantity = resources[type];
            let newQuantity = currQuantity + quantity;
            resources[type] = newQuantity;
        }


    }

    for (let key in resources) {
        
        console.log(`${key} -> ${resources[key]}`);
    }

}