// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseStr(str) {
  let strLength = str.length;
  let lenH = Math.floor(strLength / 2);
  for (let i = 0; i < lenH; i++) {
    let temp = str[i];
    str[i] = str[strLength - 1 - i];
    str[strLength - 1 - i] = temp;
  }
  return str;
}

// Why this works:
// - We reverse the array in place by swapping pairs from the two ends.
// - `i` moves from the start toward the middle.
// - `strLength - 1 - i` gives the matching index from the end.
// - `temp` stores the left value so it is not lost during the swap.
// - We only need to loop until half the array because each swap fixes two positions.
// - For odd-length arrays, the middle element stays unchanged.
// - Time complexity: O(n)
// - Extra space: O(1)

console.log(reverseStr(["H","a","n","n","a","h"]));
