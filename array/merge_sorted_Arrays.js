// You are given two integer arrays nums1 and nums2, sorted
// in non-decreasing order, and two integers m and n, representing
// the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1. To accommodate this,
// nums1 has a length of m + n, where the first m elements denote the
// elements that should be merged, and the last n elements are set to
// 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

function sortMerge(nums1, m, nums2, n) {
  let num1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && num1Copy[p1] < nums2[p2])) {
      nums1[i] = num1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}
console.log(sortMerge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Explanation:
// - First, copy the first m elements of nums1 into num1Copy because nums1 will be overwritten.
// - Use two pointers:
//   - p1 for num1Copy
//   - p2 for nums2
// - Use i as the write pointer for nums1.
// - The loop runs m + n times because the final merged array has total length m + n.
// - The condition `p2 >= n` handles the corner case when nums2 is fully exhausted.
// - The condition `p1 < m` ensures we do not read past the end of num1Copy.
// - If nums2 is finished, copy from num1Copy.
// - If num1Copy[p1] is smaller, copy it into nums1.
// - Otherwise, copy nums2[p2] into nums1.
// - After copying from one array, move that array’s pointer forward.
// - This keeps the array sorted while merging.
