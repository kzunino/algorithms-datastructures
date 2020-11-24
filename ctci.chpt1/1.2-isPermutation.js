/*
Check Permutation

- Check to see if a string is a permutation of another string

-O(n) - one loop makes a comparison inside both arrays

-Js sort method uses merge sort in FF and timsort in chrome which both have N log N
time complexity

js split method O(n * k) where k is the delimeter for split function


*/

const checkPermutation = (str1, str2) => {
  let result = true;
  if (str1.length !== str2.length) return (result = false);

  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  console.log(arr1);
  console.log(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return (result = false);
  }
  return result;
};

// input str1 = 'hello' str2 = 'olleh'
// output: true
console.log(checkPermutation('hello', 'olleh'));

// input str1 = 'abcdefg' str2 = 'abcdegf'
// output: true
console.log(checkPermutation('abcdefg', 'abcdegf'));

// input str1 = 'abcd123' str2 = '123abcd'
// output: true
console.log(checkPermutation('abcd123', '123abcd'));

// input str1 = 'bobby' str2 = 'boby'
// output: false
console.log(checkPermutation('bobby', 'boby'));

// input str1 = 'abcd123' str2 = '123abcde'
// output: false
console.log(checkPermutation('abcd123', '123abcde'));
