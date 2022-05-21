function browserHistory(obj, arr) {

    let browserObj = obj;

    let commands = arr;

    for (let currApp of commands) {

        let [command, app] = currApp.split(' ');

        let specialCase = '';

        if (command == 'Clear') {

            specialCase = currApp.toString();
        }

        if (command == 'Close') {

            if (browserObj['Open Tabs'].includes(app)) {

                let indexOfThatApp = browserObj['Open Tabs'].indexOf(app);

                browserObj['Open Tabs'].splice(indexOfThatApp, 1);

                browserObj['Recently Closed'].push(app);

                let stringToAdd = `${command} ${app}`;

                browserObj['Browser Logs'].push(stringToAdd);

                
            }

        } else if (command == 'Open') {

            browserObj['Open Tabs'].push(app);
            let stringToAdd = `${command} ${app}`;
            browserObj['Browser Logs'].push(stringToAdd);

        } else if (specialCase == 'Clear History and Cache') {

            browserObj['Open Tabs'].splice(0);
            browserObj['Recently Closed'].splice(0);
            browserObj['Browser Logs'].splice(0);
        }
    }


    console.log(`${browserObj['Browser Name']}`);
    console.log(`Open Tabs: ${browserObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserObj['Recently Closed'].join(', ')} `);
    console.log(`Browser Logs: ${browserObj['Browser Logs'].join(', ')}`);

}