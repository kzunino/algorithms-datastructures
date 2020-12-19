/* 
CTCI - 4.2
 
Minimal Tree

Given a sorted (increasing order) array with unique integer elements,
write an algorithm to create a binary search tree with minimal height.


EXAMPLE
Input: 
Output: 

Input:
Output: 
Constraints:  
Edge Case:

Time Complexity:

Space Complexity: 


Optimized version:
Time Complexity:
Space Complexity:

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const makeMinTree = (values) => {
  let tree = new BinarySearchTree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1);
  }
  return tree;
};

const add = (tree, values, start, end) => {
  if (start === end) {
    tree.insert(values[start]);
  } else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    tree.insert(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
};

let minTree = makeMinTree(values);
console.log(JSON.stringify(minTree.root));
