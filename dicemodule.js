/* eslint-disable no-unused-vars */
const array = [];

//noppa
const rollDice = (n)=> {
  let x = 0;
  for (i = 0; i < n; i++) {
    x = Math.floor(Math.random()* 6) + 1;
    array.push(x);
  }
  return array;
};
rollDice(10);

//Ensimmäinen funktio (returnNums) palauttaa nopanheiton tulokset merkkijonona jossa numerot on erotettu välilyönnein.
function returnNums(array) {
  console.log('Numbers are: ' + array);
  return array;
}
returnNums(array);

//Toinen funktio (max) palauttaa suurimman arvon
function maksimi(array) {
  console.log('Largest number is ' + Math.max(...array));
  return array;
}
maksimi(array);

//kolmas funktio (min)
function minimi(array) {
  console.log('Smallest number is ' + Math.min(...array));
  return array;
}
minimi(array);

//neljäs funktio (calcAvg) palauttaa kaikkien heittojen keskiarvon.
function calcAvg(array) {
  const total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total / array.length;
}
const average = calcAvg(array);
console.log('Average is '+ average);

