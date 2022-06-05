function demo(string) {
    let health = 100;
  
    let bitcoins = 0;
  
    let arr = [];
    arr.push(string);
  
    let finalArr = arr.toString().split("|");
  
    let lengthOfFinalArr = finalArr.length;
  
    let roomCounter = 0;
  
    for (let i = 0; i < lengthOfFinalArr; i++) {
      let el = finalArr[i].split(" ");
  
      let currMonsterOrPotion = el.shift();
  
      roomCounter++;
  
      if (currMonsterOrPotion !== "potion" && currMonsterOrPotion !== "chest") {
        let currAttack = Number(el.shift());
  
        health -= currAttack;
  
        if (health > 0) {
          console.log(`You slayed ${currMonsterOrPotion}.`);
        } else {
          console.log(`You died! Killed by ${currMonsterOrPotion}.`);
          console.log(`Best room: ${roomCounter}`);
          return;
        }
      } else if (currMonsterOrPotion === "potion") {
        let potion = Number(el.shift());
  
        let result = health + potion;
  
        if (result > 100) {
          let finalRes = 100 + potion;
          finalRes = finalRes - result;
          console.log(`You healed for ${finalRes} hp.`);
          health += finalRes;
          console.log(`Current health: ${health} hp.`);
        } else {
          console.log(`You healed for ${potion} hp.`);
  
          health += potion;
  
          console.log(`Current health: ${health} hp.`);
        }
      } else if (currMonsterOrPotion === "chest") {
        let coins = Number(el.shift());
  
        bitcoins += coins;
  
        console.log(`You found ${coins} bitcoins.`);
      }
    }
  
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }