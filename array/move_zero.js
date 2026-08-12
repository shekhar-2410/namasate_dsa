// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

function moveZero(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
   
  }
 

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
}
moveZero([0, 1, 0, 3, 12]);

// Move Zeroes:
// - i scans every element
// - x stores the next position for non-zero values
// - if nums[i] !== 0, copy nums[i] to nums[x] and x++
// - after first loop, x is the index where zero filling should start
// - second loop starts from i = x and fills remaining positions with 0