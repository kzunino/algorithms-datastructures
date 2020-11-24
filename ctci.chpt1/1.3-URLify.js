/* 
URLify a string soo as to replace all spaces in a string with %20.

O(n) - because in worse case the replace method will traverse the whole method
and not find a value to replace

trim method only iterates over beginning and end of string until it runs out of 
whitespace.
*/

const URLify = (str) => {
  return str.trim().replace(/ /g, '%20');
};

// Input: 'Mr. John Smith    ', 13
// Output: 'Mr.%20John%20Smith'
console.log(URLify('Mr. John Smith    ', 13));
