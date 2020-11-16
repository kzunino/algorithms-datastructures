/* 
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order. 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15];
let target = 13;

var twoSum = function (nums, target) {
  let numObject = {};

  for (let i = 0; nums.length; i++) {
    let complement = target - nums[i];
    if (numObject[complement] !== undefined) {
      return [numObject[complement], i];
    }
    numObject[nums[i]] = i;
  }
};

console.log(twoSum(nums, target));

/* 

First step is creating an object or hashmap to keep track of all integers.

The first loop through will be undefined and then we add the first number and index 
from the array.

then we check to see if the complementary number has been added before the new element
being evaluated.

O(n) because for the worst case scenario we only loop over the array one time
    - however, space complexity goes up because we are caching data in the object

*/

/* Naive Solution */

// Use two for loops to loop over entire array and try to check each solution against
// one another.

// O(n^2) because in the worst case scenario we have to check each value against each other,
// which requires two for loops
