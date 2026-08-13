// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Input: nums[2,2,1]
// Output  : 1

// Input: nums[4,1,2,1,2]
// Output  : 4

// Input: nums[1]
// Output  : 1

function singleNumber(nums) {
  let xor = 0;
  let singlecount = 0;
  let doubleCout = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  console.log(xor);
}
singleNumber([2,2,1]);
