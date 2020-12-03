/* 

Reverse a linked list

Determine an integer is a palindrome without converting it to a string


EXAMPLE
Input: 121
Output: true

Input: Integer
Output: Boolean
Constraints: optimize
Edge Case: negative numbers cant be palindromes

Time Complexity: O(log10 (n)) - we divide the input by 10 for every iteration
Space Complexity: O(1) - 


Optimized version: Turtle Hare two point solution
Time Complexity: O(N)
Space Complexity:O(1)

source: 
https://leetcode.com/problems/palindrome-number/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const reverseNumber = (x) => {
    let reverse = 0;
    while (x > 0) {
      reverse = reverse * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return reverse;
  };

  if (x === reverseNumber(x)) return true;
  else return false;
};
