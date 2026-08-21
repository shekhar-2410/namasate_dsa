// Question:
// /Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDup(array) {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[x]) {
      x = x + 1;
      array[x] = array[i];
    }
  }
  return x + 1;
}

z// Why this works:
// - This is for a sorted array, so duplicate values stay next to each other.
// - `i` scans every element from left to right.
// - `x` tracks the last unique position we have kept.
// - If `array[i]` is different from `array[x]`, it means we found a new unique value.
// - Then we move `x` forward and copy that value into the next unique slot.
// - The first `x + 1` items of the same array are the unique values.
// - Time complexity: O(n)
// - Extra space: O(1)

let uniqueArr = removeDup([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(uniqueArr);

