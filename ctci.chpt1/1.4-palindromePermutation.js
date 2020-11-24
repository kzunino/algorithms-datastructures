/* 
CTCI - 1.4

Palindrome Permutation

Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word of a phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words

EXAMPLE
Input: 'Tact Coa'
Output: True (permutations: 'taco cat', 'atco cat', etc)

Input: String
Output: Boolean
Constraints: optimize
Edge Case: empty string, spaces, more than two of same character, integers

Time Complexity: O(n) - because we make one pass through the string
Space Complexity: O(n) - worst case is we fill up the hash table with all unique chars

*/

const palindromePermutation = (str) => {
  // if str even: must be two of every character
  // if str odd: must be one unique char

  if (str.length === 0) return false;

  let hash = {};
  str = str.toLowerCase();

  // if str is even, hash table should be empty
  // if str is odd, hash table should have one unique char

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && hash[str[i]] === undefined) {
      hash[str[i]] = 1;
    } else if (str[i] !== ' ' && hash[str[i]] !== undefined) {
      delete hash[str[i]];
    }
  }
  let hashLen = Object.keys(hash).length;
  if (hashLen === 0) return true;
  else if (hashLen === 1) return true;
  else return false;
};

console.log(
  palindromePermutation('taco cat') === true,
  palindromePermutation('atco cat') === true,
  palindromePermutation(' rac  ecar rara ') === true,
  palindromePermutation('aabbc') === true,
  palindromePermutation('aaaabbbbcc') === true,
  palindromePermutation('aabc') === false,
  palindromePermutation('') === false,
  palindromePermutation('sillyrabbit') === false
);
