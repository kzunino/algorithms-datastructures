/* 
CTCI - 1.6

String Compression

Implement a method to perform basic string compression suing the counts of 
repeated characters.

EXAMPLE
Input: 'aabcccccaaa'
Output: 'a2b1c5a3'

Input: String
Output: String
Constraints: optimize
Edge Case: if string cannot be compressed more return original string 

Time Complexity: O(n) - one loop
Space Complexity: O(n) - worst case scenario you compress one character and rebuild
string 

Optimized version:
Time Complexity:
Space Complexity:

*/

const compressString = (str) => {
  let compressed = '';
  let count = 1;
  let i = 0;
  let j = i + 1;

  while (i < str.length) {
    if (str[i] === str[j]) {
      count++;
      j++;
    } else if (str[i] !== str[j]) {
      compressed += str[i] + count;
      count = 1;
      i = j;
      j++;
    }
  }
  if (compressed.length >= str.length) return str;
  else return compressed;
};

console.log(compressString('aabcccccaaa') === 'a2b1c5a3');
console.log(compressString('aabbcc') === 'aabbcc');
console.log(compressString('aaabbbcccd') === 'a3b3c3d1');
console.log(compressString('AAaaBBCCCDD') === 'A2a2B2C3D2');
