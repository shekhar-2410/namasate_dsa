// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.
// Requirements:
// Reverse the digits of a 32-bit signed integer.
// Return 0if the result overflows.
function reverseNum(n) {
  let original = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let remove_num = n % 10;
    rev = rev * 10 + remove_num;
    n = Math.floor(n / 10);
  }
  let int_Max = 2 ** 31 - 1;
  let int_Min = -(2 ** 31);
  if (rev < int_Min || rev > int_Max) {
    return 0;
  }
  return original < 0 ? -rev : rev;
}

console.log(reverseNum(-1234));
