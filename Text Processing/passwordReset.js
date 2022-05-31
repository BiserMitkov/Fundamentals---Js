function demo(input) {

    let pass = input.shift();

    let index = 0;
    let currEl = input[index];

    while (currEl !== 'Done') {

        if (currEl == 'TakeOdd') {
            let newPass = '';
            for (let i = 0; i < pass.length; i++) {

                if (i % 2 !== 0) {

                    newPass += pass[i];
                }
            }

            pass = newPass;
            console.log(pass);

        } else if (currEl.includes('Cut')) {

            let [command, index, length] = currEl.split(' ');
            
            let currIndex = Number(index);
            let currL = Number(length);
            
            let sub = pass.substring(currIndex, (currIndex + currL));

            pass = pass.replace(sub, '');
            console.log(pass);
            
        } else if (currEl.includes('Substitute')) {

            let [command, substr, substitute] = currEl.split(' ');

            if (pass.includes(substr)) {

                while (pass.includes(substr)) {

                    pass = pass.replace(substr, substitute);
                }
    
                console.log(pass);

            } else {
                console.log('Nothing to replace!');
            }
            
        }
        index++;
        currEl = input[index];
    }
    console.log(`Your password is: ${pass}`);


}