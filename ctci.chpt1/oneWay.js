/* 
CTCI - 1.5

One Way

There are three types of edits that can be performed on strings: insert, remove, or
replace.
Given two strings, write a function to check if they are one edit(or zero edits) away.

EXAMPLE
Input: 'pale', 'ple'
Output: True

Input: Strings
Output: Boolean
Constraints: optimize
Edge Case: empty string

Time Complexity: O(n^2) - because we have to compare in order each character to another
Space Complexity: O(n) - construct an edited string

*/

const oneWay = (str1, str2) => {
  let result = false;
  // base cases:
  if (parseInt(str1.length - str2.length) > 1) return result;
  if (str1 === str2) return (result = true);

  // if diff in len is 1 then we know we have to add or remove character
  if (parseInt(str1.length - str2.length) === 1) {
    let longerString = str1.length - str2.length === 1 ? str1 : str2;
    let shorterString = str1.length - str2.length === -1 ? str1 : str2;

    for (let i = 0; i < str1.length; i++) {
      let editedString = longerString.replace(longerString[i], '');
      if (editedString === shorterString) return (result = true);
    }
  } else {
    for (let i = 0; i < str1.length; i++) {
      let editedString;
      if (str1[i] !== str2[i]) editedString = str1.replace(str1[i], str2[i]);
      if (editedString === str2) return (result = true);
    }
  }
  return result;
};

console.log(oneWay('pale', 'ple') === true);
console.log(oneWay('pales', 'pale') === true);
console.log(oneWay('pale', 'bale') === true);
console.log(oneWay('pale', 'pal') === true);
console.log(oneWay('pale', 'bake') === false);
console.log(oneWay('pales', 'bakeetf') === false);
console.log(oneWay('lake', 'srake') === false);
console.log(oneWay('lake', 'lake') === true);
