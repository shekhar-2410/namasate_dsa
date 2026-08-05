// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place. The order of the elements may
// be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal
// to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums
// contain the elements which are not equal to val. The remaining
// elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

function remNum(num, val) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    console.log("before", { i, x, current: num[i], array: [...num] });
    if (val !== num[i]) {
      num[x] = num[i];
      x++;
    }
    console.log("after", { i, x, array: [...num] });
  }
  return x ;
}

// Why this works:
// - `val` is the value we want to remove from the array.
// - `i` scans every element one by one.
// - `x` is the next position where we should write a value we want to keep.
// - If `num[i]` is not equal to `val`, we copy it to `num[x]` and then move `x`.
// - If `num[i]` equals `val`, we skip it.
// - This keeps all non-`val` values at the front of the array.
// - The function returns `x`, which is the count of kept elements.
// - Time complexity: O(n)
// - Extra space: O(1)

console.log(remNum([3, 2, 2, 3], 3));
