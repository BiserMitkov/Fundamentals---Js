function demo(arr) {
    let gladiatorBattle = {};

    let index = 0;

    let command = arr[index];

    while (command !== "Ave Cesar") {

        if (command.includes("->")) {

            let el = command.split(" -> ");
            let name = el.shift();
            let skill = el.shift();
            let skillPower = Number(el.shift());

            if (!gladiatorBattle.hasOwnProperty(name)) {

                gladiatorBattle[name] = {
                    [skill]: skillPower,
                };
            } else if (

                gladiatorBattle.hasOwnProperty(name) &&
                !gladiatorBattle[name].hasOwnProperty(skill)
            ) {
                gladiatorBattle[name][skill] = skillPower;
            } else if (
                gladiatorBattle.hasOwnProperty(name) &&
                gladiatorBattle[name].hasOwnProperty(skill) &&
                gladiatorBattle[name][skill] <= skillPower
            ) {
                gladiatorBattle[name][skill] = skillPower;
            }

        } else if (command.includes("vs")) {

            let gladiatorDuel = command.split(" vs ");
            let firstGladiator = gladiatorDuel.shift();
            let secGladiator = gladiatorDuel.shift();

            if (
                gladiatorBattle.hasOwnProperty(firstGladiator) &&
                gladiatorBattle.hasOwnProperty(secGladiator)
            ) {
                let skillPackFirstGladiator = Object.keys(
                    gladiatorBattle[firstGladiator]
                );
                let skillPackSecGladiator = Object.keys(gladiatorBattle[secGladiator]);

                for (let i = 0; i < skillPackFirstGladiator.length; i++) {

                    let currSkill = skillPackFirstGladiator[i];

                    for (let j = 0; j < skillPackSecGladiator.length; j++) {

                        let secCurrSkill = skillPackSecGladiator[j];

                        if (currSkill === secCurrSkill) {

                            let firstGladiatorPower = gladiatorBattle[firstGladiator][currSkill];
                            let secGladiatorPower = gladiatorBattle[secGladiator][secCurrSkill];

                            if (firstGladiatorPower > secGladiatorPower) {

                                delete gladiatorBattle[secGladiator];
                                break;
                            } else if (secGladiatorPower > firstGladiatorPower) {

                                delete gladiatorBattle[firstGladiator];
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }
        index++;
        command = arr[index];
    }

    let entries = Object.entries(gladiatorBattle);

    let sortBySkillsPower = entries.sort((a, b) => {
        let firstSum = 0;
        let secSum = 0;

        let firstValues = Object.values(a[1]);
        let secValues = Object.values(b[1]);

        for (let el of firstValues) {
            firstSum += el;
        }

        for (let secEl of secValues) {
            secSum += secEl;
        }

        return secSum - firstSum || a[0].localeCompare(b[0]);
    });

    for (let currFighter of sortBySkillsPower) {
        let totalPower = 0;

        let name = currFighter.shift();

        let entries = Object.entries(currFighter[0]);

        for (let num of entries) {
            totalPower += num[1];
        }

        let sortedSkills = entries.sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

        console.log(`${name}: ${totalPower} skill`);

        for (let output of sortedSkills) {
            console.log(`- ${output.join(' <!> ')}`);
        }
    }
}