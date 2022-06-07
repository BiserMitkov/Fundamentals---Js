function demo(arr) {
    let grocery = arr[0].split("!");

    let index = 1;

    let command = arr[index];

    while (command !== "Go Shopping!") {
        let el = command.split(" ");

        let currentCommand = el.splice(0, 1).toString();

        if (currentCommand === "Urgent") {
            let groceryToAdd = el[0];

            if (!grocery.includes(groceryToAdd)) {
                grocery.unshift(groceryToAdd);
            }
        } else if (currentCommand === "Unnecessary") {
            let itemToRemove = el[0];

            if (grocery.includes(itemToRemove)) {
                let indexOfThatItem = grocery.indexOf(itemToRemove);

                grocery.splice(indexOfThatItem, 1);
            }
        } else if (currentCommand === "Correct") {
            let oldItem = el.splice(0, 1).toString();

            let newItem = el[0];

            if (grocery.includes(oldItem)) {
                let indexOfOldItem = grocery.indexOf(oldItem);

                grocery.splice(indexOfOldItem, 1, newItem);
            }
        } else if (currentCommand === "Rearrange") {
            let itemToMove = el[0];

            if (grocery.includes(itemToMove)) {
                let indexOfItem = grocery.indexOf(itemToMove);

                grocery.splice(indexOfItem, 1);
                grocery.push(itemToMove);
            }
        }
        index++;
        command = arr[index];
    }

    console.log(grocery.join(", "));
}