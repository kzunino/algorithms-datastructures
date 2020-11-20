/* 
Is Unique 

- implement an algorithm to determine if a string has all unique 
characters and cannot use additional structures

-then try without additional data structures

*/

// O(n) worst case but maybe O(1) because string will never be evaluated if more than
// 128 characters
// space complexity is O(n)

const isUnique = (str) => {
  // if string is greater than 128 characters then false --ASCII has only 128 chars
  if (str.length > 128) return false;
  let charactersObj = {};
  for (let i = 0; i < str.length; i++) {
    if (charactersObj[str[i]] === undefined) {
      charactersObj[str[i]] = true;
    } else {
      return false;
    }
  }
  return true;
};

// input 'hello'
// output: false
console.log(isUnique('hello'));

// input: 'hi'
// output: 'true'
console.log(isUnique('hi'));

// input: 'abcdefghijk'
// output: 'true'
console.log(isUnique('abcdefghijk'));

// input 'abcdeefghijkl'
// output: 'false'
console.log(isUnique('abcdeefghijkl'));

// without a data structure we can search to see if there are two occurrences of
// saves on space complexity because we don't add any additional storage
function stringIsUnique(str) {
  for (i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
