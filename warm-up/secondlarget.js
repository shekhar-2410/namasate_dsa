// write a function which return 2larget number in array

function findGrtInt(int) {
  let largentInt = -Infinity;
  let secondargentInt = -Infinity;

  for (let i = 0; i < int.length; i++) {
    let current = int[i];
    if (current > largentInt) {
      secondargentInt = largentInt;
      largentInt = current;
    } else if (current < largentInt && current > secondargentInt) {
      secondargentInt = current;
    }
  }

  return { largentInt, secondargentInt };
}

let arraynew = [2, 10, 15, 11, 20, 1, 41, 45];
let resultnew = findGrtInt(arraynew);
console.log(resultnew);
