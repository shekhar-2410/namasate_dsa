let num = 12345;

function countDig(n) {
  let counter = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    counter++;
  }
  console.log(counter);
}

countDig(num);
