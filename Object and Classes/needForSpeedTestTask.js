function demo(input) {

    let numberOfCars = Number(input.shift());
 
    let listOfCars = input.splice(0, numberOfCars).map((el) => el.split('|'));
 
    let cars = {};
 
    for (let currCar of listOfCars) {
 
       let model = currCar.shift();
       let mileage = Number(currCar.shift());
       let fuel = Number(currCar.shift());
 
       cars[model] = {};
       cars[model]['miles'] = mileage;
       cars[model]['fuel'] = fuel;
    }
 
    let newInput = input.map((el) => el.split(' : '));
 
    for (let el of newInput) {
 
       let command = el.shift();
 
       if (command == 'Drive') {
 
          let currModel = el.shift();
          let currDistance = Number(el.shift());
          let neededFuel = Number(el.shift());
 
          if (cars.hasOwnProperty(currModel)) {
 
             if (cars[currModel]['fuel'] >= neededFuel) {
 
                cars[currModel]['miles'] += currDistance;
                cars[currModel]['fuel'] -= neededFuel;
                console.log(`${currModel} driven for ${currDistance} kilometers. ${neededFuel} liters of fuel consumed.`);
 
                if (cars[currModel]['miles'] >= 100000) {
 
                   delete cars[currModel];
                   console.log(`Time to sell the ${currModel}!`);
                }
 
             } else {
                console.log('Not enough fuel to make that ride');
             }
          }
 
       } else if (command == 'Refuel') {
 
          let modelOfTheCar = el.shift();
          let fuelToAdd = Number(el.shift());
 
          if (cars.hasOwnProperty(modelOfTheCar)) {
 
             if (cars[modelOfTheCar]['fuel'] + fuelToAdd > 75) {
 
                console.log(`${modelOfTheCar} refueled with ${75 - cars[modelOfTheCar]['fuel']} liters`);
                cars[modelOfTheCar]['fuel'] = 75;
 
             } else {
                console.log(`${modelOfTheCar} refueled with ${fuelToAdd} liters`);
                cars[modelOfTheCar]['fuel'] += fuelToAdd;
             }
          }
 
       } else if (command == 'Revert') {
 
          let modelName = el.shift();
          let distanceToDecrease = Number(el.shift());
 
          if (cars.hasOwnProperty(modelName)) {
 
             cars[modelName]['miles'] -= distanceToDecrease;
 
             if (cars[modelName]['miles'] <= 10000) {
                cars[modelName]['miles'] = 10000;
 
             } else {
                console.log(`${modelName} mileage decreased by ${distanceToDecrease} kilometers`);
             }
          }
       }
    }
 
    for (let car in cars) {
       let miles = 0;
       let fuel = 0;
 
       for (let key in cars[car]) {
          
          if (key == 'miles') {
             miles = cars[car][key];
          } else {
             fuel = cars[car][key];
          }
       }
 
       console.log(`${car} -> Mileage: ${miles} kms, Fuel in the tank: ${fuel} lt.`);
    }
 }