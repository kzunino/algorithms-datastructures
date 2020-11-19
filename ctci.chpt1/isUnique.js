/* 
Is Unique 

- implement an algorithm to determine if a string has all unique 
characters and cannot use additional structures



*/

// O(n) worst case
// space complexity is O(n)

const isUnique = (str) => {
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
// saves on space complexity
function stringIsUnique(str) {
  for (i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
