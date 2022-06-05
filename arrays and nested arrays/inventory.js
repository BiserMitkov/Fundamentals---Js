function demo(arr) {
    let array = arr;

    let items = array.shift().toString().split(", ");

    let index = 0;

    let nextLineOfArr = array[index];

    while (nextLineOfArr !== "Craft!") {

        let elOfArr = nextLineOfArr.split(" - ");

        let currCommand = elOfArr.shift();

        if (currCommand === "Collect") {

            let item = elOfArr.shift();

            if (!items.includes(item)) {
                items.push(item);
            }

        } else if (currCommand === "Drop") {

            let itemToDrop = elOfArr.shift();

            if (items.includes(itemToDrop)) {

                let indexOfDroping = items.indexOf(itemToDrop);

                items.splice(indexOfDroping, 1);
            }

        } else if (currCommand === "Combine Items") {

            let bothItems = elOfArr.toString().split(":");

            let oldItem = bothItems.shift();

            if (items.includes(oldItem)) {

                let indexOfOldItem = items.indexOf(oldItem);

                let newItemToAdd = bothItems.shift();

                items.splice(indexOfOldItem + 1, 0, newItemToAdd);
            }
        } else if (currCommand === "Renew") {

            let itemToMove = elOfArr.shift();

            if (items.includes(itemToMove)) {

                let indexOfThatItem = items.indexOf(itemToMove);

                items.splice(indexOfThatItem, 1);

                items.push(itemToMove);
            }
        }
        
        index++;
        nextLineOfArr = array[index];
    }

    console.log(items.join(", "));
}