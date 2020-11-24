/* 
CTCI - 1.8

Zero Matrix

Write and algorithm such that if an element in an M x N matrix is 0, its entire
row and column are set to 0.

EXAMPLE
Input: NxM matrix
Output: NxM matrix with col & rows zeroed out

Input: NxM matrix
Output: Matrix with zeroed columns 
Constraints: rotate in place, optimize 
Edge Case: empty matrix 

Time Complexity: O(NM + NM) ? nested for loops and then we iterate again to change col
Space Complexity: O(M) - set relies on size of the columns

Optimized version:
Time Complexity:
Space Complexity:

*/
const zeroMatrix = (matrix) => {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix;

  // use a set because columns wont repeat
  let colToZero = new Set();

  // Iterate over rows
  for (let i = 0; i < matrix.length; i++) {
    let zeroWholeRow = false;
    // If row includes a zero, save column coordinate and change row
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroWholeRow = true;
        colToZero.add(j);
      }
    }
    // changes whole row to 0 after finding column coordinate
    if (zeroWholeRow) matrix[i].fill(0);
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
