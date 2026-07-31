// test the giben digit is palindrome or not

function testPalindrome(n) {
  if (n < 0) return false;
  let original = n;
  let rev = 0;
  while (n > 0) {
    let last_digit = n % 10;
    rev = rev * 10 + last_digit;
    n = Math.floor(n / 10);
  }
  //   if (original === rev) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  return original === rev;
}

console.log(testPalindrome(-121));
