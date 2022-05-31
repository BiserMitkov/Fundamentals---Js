function demo(input) {

    let countOfHeroes = Number(input.shift());

    let listOfHeroes = input.splice(0, countOfHeroes);

    let heroes = {};

    for (let heroe of listOfHeroes) {
        
        let [heroName, hp, mp] = heroe.split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes[heroName] = { hp, mp};
    }

    let index = 0;
    let currCommand = input[index];

    while (currCommand !== 'End') {

        let [command] = currCommand.split(' - ');

        if (command == 'CastSpell') {

            let currSpell = currCommand.split(' - ');
            currSpell.shift();
            let [heroName, neededMp, spell] = currSpell;
            neededMp = Number(neededMp);

            if (heroes[heroName]['mp'] >= neededMp) {
                heroes[heroName]['mp'] -= neededMp;
                console.log(`${heroName} has successfully cast ${spell} and now has ${heroes[heroName]['mp']} MP!`);

            } else {
                console.log(`${heroName} does not have enough MP to cast ${spell}!`);
            }

        } else if (command == 'TakeDamage') {

            let currDamage = currCommand.split(' - ');
            currDamage.shift();
            let [heroName, damage, nameOfDamage] = currDamage;
            heroes[heroName]['hp'] -= Number(damage);

            if (heroes[heroName]['hp'] > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${nameOfDamage} and now has ${heroes[heroName]['hp']} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${nameOfDamage}!`);
                delete heroes[heroName];
            }

        } else if (command == 'Recharge') {
            let currRecharge = currCommand.split(' - ');
            currRecharge.shift();
            let [heroName, rechargeForAdding] = currRecharge;
            rechargeForAdding = Number(rechargeForAdding);
            let newCharge = Math.min(200, heroes[heroName]['mp'] + rechargeForAdding);
            
            if (newCharge >= 200) {
                console.log(`${heroName} recharged for ${200 - heroes[heroName]['mp']} MP!`);
                heroes[heroName]['mp'] = 200;
            } else {
                console.log(`${heroName} recharged for ${rechargeForAdding} MP!`); 
                heroes[heroName]['mp'] = newCharge;
            }

        } else if (command == 'Heal') {

            let currHealth = currCommand.split(' - ');
            currHealth.shift();

            let [heroName, healthAdding] = currHealth;
            healthAdding = Number(healthAdding);

            let newHealth = Math.min(100, heroes[heroName]['hp'] + healthAdding);

            if (newHealth >= 100) {
                console.log(`${heroName} healed for ${100 - heroes[heroName]['hp']} HP!`);
                heroes[heroName]['hp'] = 100;

            } else {
                console.log(`${heroName} healed for ${healthAdding} HP!`);
                heroes[heroName]['hp'] = newHealth;
            }
        }

        index++;
        currCommand = input[index];
    }

    for (let key in heroes) {

        console.log(key);

        for (let ent in heroes[key]) {
            
            if (ent == 'hp') {

                console.log(`  HP: ${heroes[key][ent]}`);
            } else {
                console.log(`  MP: ${heroes[key][ent]}`);
            }
        }
        
    }
}