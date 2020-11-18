/*
Given an array nums of n integers, are there elements 
a, b, c in nums such that a + b + c = 0? Find all unique triplets
 in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let results = [];
  // Sorts array so duplicates are more easily tracked and avoided
  nums.sort((a, b) => {
    return a - b;
  });
  // Base cases:
  if (nums.length < 3) return [];
  if (nums.length === 3) {
    if (
      nums.reduce((acc, num) => {
        return acc + num;
      }, 0) === 0
    )
      results.push(nums);
    else return results;
  }

  // Create a for loop with two pointers inside to track values
  for (let i = 0; i < nums.length - 2; i++) {
    // initialize pointers on array
    // [i:0, j:1, 2, 3, 4, k:5]
    //   [-1, 0, 1, 2, -1, -4]
    let j = i + 1;
    let k = nums.length - 1;

    // if this is not first iteration and i reaches a duplicate, skip while loops,
    //  and move onto next full iteration to avoid duplicate values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return results;
};

// Test one:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Test two:
// Input: nums = []
// Output: []
console.log(threeSum([]));

// Test three:
// Input: nums = [0]
// Output: []
console.log(threeSum([0]));

// Test four:
// Input: nums =[-1, 0, 1, 2, -1, -4, 3, 2, 7, -7]
// Output: [
//   [ -7, 0, 7 ],
//   [ -4, 1, 3 ],
//   [ -4, 2, 2 ],
//   [ -1, -1, 2 ],
//   [ -1, 0, 1 ]
// ]
console.log(threeSum([-1, 0, 1, 2, -1, -4, 3, 2, 7, -7]));
