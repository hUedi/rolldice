/* eslint-disable no-unused-vars */

function rollDice(n) {
  let x = 0;
  for (i = 0; i < n; i++) {
    x = Math.floor(Math.random()* 6) + 1;
    taulukko.push(x);
  }
  return taulukko;
}
/*const diceArray = [0, 1, 2, 3, 4, 5, 6];
const returnNums = rollDice();
const max = rollDice();
const min = rollDice();
const calcAvg = rollDice();
const n = 10;*/

/*
//Ensimmäinen funktio (returnNums) palauttaa nopanheiton tulokset merkkijonona jossa numerot on erotettu välilyönnein.
console.log('Numbers are: ' + returnNums);
//Toinen funktio (max) palauttaa suurimman arvon
console.log('Largest number is ') + (Math.max());
//kolmas funktio (min)
console.log('Smallest number is ' + Math.min());
//neljäs funktio (calcAvg) palauttaa kaikkien heittojen keskiarvon.
console.log('Average is ' + calcAvg);
*/