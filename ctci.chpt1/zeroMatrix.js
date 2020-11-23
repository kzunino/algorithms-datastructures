/* 
CTCI - 1.7

** I didn't solve this one on my own =(

Rotate Matrix 90 degrees

Given an image represented by N xN matrix, where each pixel in the image is 
represented by an integer, write a method to rotate the image by 90 degrees in place.

EXAMPLE
Input: NxN matrix
Output: NxN matrix rotated

Input: nxm matrix
Output: rotated 90 degree matrix
Constraints: rotate in place
Edge Case: empty matrix 

Time Complexity: O(2N^2) ? nested for loops and then we iterate again to change col
Space Complexity: O(n)

Optimized version:
Time Complexity:
Space Complexity:

*/

const zeroMatrix = (matrix) => {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix;

  let colToZero = new Set();

  // Iterate over rows
  for (let i = 0; i < matrix.length; i++) {
    // If row includes a zero, save column coordinate and change row
    if (matrix[i].includes(0)) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          colToZero.add(j);
        }
        // since we know 0 exists in row change all values to 0 after saving to set
        matrix[i][j] = 0;
      }
    }
  }

  // Now we need to change the columns
  matrix.forEach((row) => {
    //if column elem is not 0 then we need to check if we logged its coordinate
    if (row[0] !== 0) {
      colToZero.forEach((column) => {
        row[column] = 0;
      });
    }
  });

  return matrix;
};

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 0, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrix3 = [];

const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [0, 14, 15, 16],
];

console.log(zeroMatrix(matrix1));
console.log(zeroMatrix(matrix2));
console.log(zeroMatrix(matrix3));
console.log(zeroMatrix(matrix4));
console.log(zeroMatrix(matrix5));
