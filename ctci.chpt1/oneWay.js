/* 
CTCI - 1.5

One Way

There are three types of edits that can be performed on strings: insert, remove, or
replace.
Given two strings, write a function to check if they are one edit(or zero edits) away.

EXAMPLE
Input: 'pale', 'ple'
Output: True

Input: String
Output: Boolean
Constraints: optimize
Edge Case: empty string, equal strings, 

Time Complexity: O(n^2) - because we have to compare in order each character to another
Space Complexity: O(n) - construct an edited string

Optimized version:
Time Complexity: O(n) - we only loop once and track the number of edits
Space Complexity: O(1) - variables don't depend on the size of the string

*/

const oneWay = (str1, str2) => {
  let result = false;
  // base cases:
  // diff in len cant be more than one
  // if strings are already the same then 0 edits required
  if (parseInt(str1.length - str2.length) > 1) return result;
  if (str1 === str2) return (result = true);

  // if diff in len is 1 then we know we have to add or remove character
  if (parseInt(str1.length - str2.length) === 1) {
    let longerString = str1.length - str2.length === 1 ? str1 : str2;
    let shorterString = str1.length - str2.length === -1 ? str1 : str2;

    // removes a character and compares edited string with shorter string
    for (let i = 0; i < str1.length; i++) {
      let editedString = longerString.replace(longerString[i], '');
      if (editedString === shorterString) return (result = true);
    }
    // if strings are same length then we need to replace one character
  } else {
    // replace character in str1 with complementary char in str2 and compare
    for (let i = 0; i < str1.length; i++) {
      let editedString;
      if (str1[i] !== str2[i]) editedString = str1.replace(str1[i], str2[i]);
      if (editedString === str2) return (result = true);
    }
  }
  return result;
};

// console.log(oneWay('pale', 'ple') === true);
// console.log(oneWay('pales', 'pale') === true);
// console.log(oneWay('pale', 'bale') === true);
// console.log(oneWay('pale', 'pal') === true);
// console.log(oneWay('pale', 'bake') === false);
// console.log(oneWay('pales', 'bakeetf') === false);
// console.log(oneWay('lake', 'srake') === false);
// console.log(oneWay('lake', 'lake') === true);

// Optimized version:

const oneWayOptimized = (str1, str2) => {
  let edits = 1;
  let maxLen = Math.max(str1.length, str2.length);
  let difference = Math.abs(str1.length - str2.length);

  // if strings diff is greater than 2 return false
  if (difference > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    let str1Char = str1[i];
    let str2Char = str2[j];
    if (str1Char !== str2Char) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (str1Char === str2[j + 1]) {
        //inserted
        j++;
      } else if (str1[i + 1] === str2Char) {
        //removed
        i++;
      }
    }
  }
  return true;
};

console.log(oneWayOptimized('pale', 'ple') === true);
console.log(oneWayOptimized('pales', 'pale') === true);
console.log(oneWayOptimized('pale', 'bale') === true);
console.log(oneWayOptimized('pale', 'pal') === true);
console.log(oneWayOptimized('pale', 'bake') === false);
console.log(oneWayOptimized('pales', 'bakeetf') === false);
console.log(oneWayOptimized('lake', 'srake') === false);
console.log(oneWayOptimized('lake', 'lake') === true);
