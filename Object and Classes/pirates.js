function demo(input) {

    let towns = {};
 
    let index = 0;
    let el = input[index];
 
    while (el !== 'Sail') {
 
       let [town, population, gold] = el.split('||');
 
       if (!towns.hasOwnProperty(town)) {
 
          towns[town] = {};
          towns[town]['population'] = Number(population);
          towns[town]['gold'] = Number(gold);
       } else {
          towns[town]['population'] += Number(population);
          towns[town]['gold'] += Number(gold);
       }
 
       index++;
       el = input[index];
    }
 
    let sailIndex = input.indexOf('Sail');
    let newInput = input.slice(sailIndex + 1);
 
    let currIndex = 0;
    let command = newInput[currIndex];
 
    while (command !== 'End') {
 
       if (command.includes('Plunder')) {
 
          let [currCommand, city, population, gold] = command.split('=>');
 
          if (towns.hasOwnProperty(city)) {
 
             population = Number(population);
             gold = Number(gold);
 
             towns[city]['population'] -= population;
             towns[city]['gold'] -= gold;
 
             if (towns[city]['population'] <= 0 || towns[city]['gold'] <= 0) {
                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
                delete towns[city];
 
             } else {
                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
             }
          }
 
       } else if (command.includes('Prosper')) {
 
          let [currCommand, city, gold] = command.split('=>');
          gold = Number(gold);
 
          if (gold >= 0) {
 
             if (towns.hasOwnProperty(city)) {
 
                towns[city]['gold'] += gold;
             }
             console.log(`${gold} gold added to the city treasury. ${city} now has ${towns[city]['gold']} gold.`);
          } else {
             console.log(`Gold added cannot be a negative number!`);
          }
       }
 
       currIndex++;
       command = newInput[currIndex];
    }
 
    let countOfTowns = Object.keys(towns);
 
    if (countOfTowns.length > 0) {
 
       console.log(`Ahoy, Captain! There are ${countOfTowns.length} wealthy settlements to go to:`);
 
       for (let town in towns) {
          let people = 0;
          let gold = 0;
 
          for (let key in towns[town]) {
             
             if (key == 'population') {
                people = towns[town][key];
             } else {
                gold = towns[town][key];
             }
          }
          console.log(`${town} -> Population: ${people} citizens, Gold: ${gold} kg`);
       }
 
    } else {
       console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
 
 
 
 
 }