// find the element in the array and return the index of the element if found, otherwise return -1
const array = [4, 2, 0, 10, 8, 13];
function findElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}
let digit = 11;
// console.log(findElement(array, digit));


// write a function that reurn the negative integrers inside array
function findNegInt(arr) {
  let count = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
      temp.push(arr[i]);
    }
  }
  return { count, temp };
}

let Integrs = [2, -9, 17, 0, 1, -10, -4, 8];
let result = findNegInt(Integrs);
// console.log(result);


// write a function which return larget number in array
function findGrtInt(int) {
  let largentInt = int[0];
  for (let i = 0; i < int.length; i++) {
    if (int[i] > largentInt) {
      largentInt = int[i];
    }
  }
  return largentInt;
}

let arraynew = [2, 10, 15, 11, 20, 50, 1, 45];
let resultnew = findGrtInt(arraynew);
console.log(resultnew);
