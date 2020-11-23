/* 
CTCI - 1.9

String Rotation 

Assume you have a method isSubstring, which checks if one word is a substring of another.
Given two strings, s1, s2, write code to check if s2 is a rotation of s1 using
only one call to isSubstring.



EXAMPLE
Input: waterbottle, terbottlewa
Output: true

Input: string
Output: boolean
Constraints: only make one call to isSubstring
Edge Case: empty string, matching strings, strings with diff len 

Time Complexity: O(n) - constant because we loop through each character and compare
Space Complexity: O(1) - we change the string in place

Optimized version:
Time Complexity:
Space Complexity:

*/

const isSubstring = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  //Rotate first character and check it against st2
  for (let i = 0; i < s1.length; i++) {
    let temp = s1[0];
    s1 = s1.slice(1);
    s1 += temp;
    if (s1 === s2) return true;
  }
  return false;
};

console.log(
  isSubstring('waterbottle', 'terbottlewa') === true,
  isSubstring('', '') === true,
  isSubstring('waterbottle', 'waterbottle') === true,
  isSubstring('water', 'waterbottle') === false,
  isSubstring('javascript', 'scriptjava') === true,
  isSubstring('django', 'python') === false,
  isSubstring('patagonia', 'goniapata') === true
);

// Alternate solution
//    erbottlewat
// waterbottlewaterbottle

const isSubstring2 = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  let s1s1 = s1 + s1;
  if (s1s1.includes(s2)) return true;
  return false;
};

console.log(
  isSubstring2('waterbottle', 'terbottlewa') === true,
  isSubstring2('', '') === true,
  isSubstring2('waterbottle', 'waterbottle') === true,
  isSubstring2('water', 'waterbottle') === false,
  isSubstring2('javascript', 'scriptjava') === true,
  isSubstring2('django', 'python') === false,
  isSubstring2('patagonia', 'goniapata') === true
);
