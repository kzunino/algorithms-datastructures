/* 
CTCI - 1.7

** I didn't solve this one on my own =(

Rotate Matrix 90 degrees

Given an image represented by N xN matrix, where each pixel in the image is 
represented by an integer, write a method to rotate the image by 90 degrees in place.

EXAMPLE
Input: NxN matrix
Output: NxN matrix rotated

Input: nxn matrix
Output: rotated 90 degree matrix
Constraints: rotate in place
Edge Case: empty matrix 

Time Complexity: O(n^2) - two loops
Space Complexity: O(1) - variables don't change based on matrix size

Optimized version:
Time Complexity:
Space Complexity:

*/

const rotateMatrix = (m) => {
  // n - 1 for positions in array
  n = m.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      let temp = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = temp;
    }
  }
  return m;
};

console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  rotateMatrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
console.log(rotateMatrix([])),
  console.log(rotateMatrix([[]])),
  console.log(rotateMatrix([[1]]));
