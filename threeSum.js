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
  for (let i = 0; nums.length - 2; i++) {}
};

// Test one:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Test two:
// Input: nums = []
// Output: []
console.log(threeSum([]));
