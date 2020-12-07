/* 
CTCI - 3.3

Stack of Plates

Imagine a literal stack of places. If the stack gets too high, it might topple.
Therefore, in real lfe, we would likely start a new stack when the previous stack
exceeds some threshold. Implement a data structure setOfStacks that mimics this.
SetofStacks should be composed of several stack and should create a new stack 
once the previous one exceeds capacity. SetOfStacks should be composed of push(),
pop() and should behave like normal.

Followup:
Implement a function popAt(index) which performs a pop operation on a specific
sub-stack


EXAMPLE
Input: 
Output: min value

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity: push() operates at constant time / pop() at O(n) likely needs 
to iterate over all stacks to find empty stack / popAt(index) O(n logN) - sorts 
the index arr

Space Complexity: O(1) - no increase to auxiliary space


Optimized version:
Time Complexity:
Space Complexity:


https://leetcode.com/problems/dinner-plate-stacks/

*/

/**
 * @param {number} capacity
 *
 * solution passes the test but in large data sets its very slow and fails last
 * leetcode test.
 * Needs to be optimized
 */

class DinnerPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
    this.emptyStackIndices = [];
  }

  push(val) {
    let lastStack = this.stacks.length - 1;
    //checks to see if any empty stacks, if not then pushes to last stack or
    // creates a new stack
    if (this.emptyStackIndices.length) {
      this.stacks[this.emptyStackIndices[0]].push(val);
      this.emptyStackIndices.shift();
    } else if (this.stacks[lastStack].length < this.capacity) {
      this.stacks[lastStack].push(val);
    } else if (this.stacks[lastStack].length === this.capacity) {
      this.stacks.push([val]);
    }
  }

  pop() {
    let lastStack = this.stacks.length - 1;

    // if last stack is empty, decrement stacks to find last item
    while (lastStack > -1) {
      if (this.stacks[lastStack].length > 0) {
        return this.stacks[lastStack].pop();
      }
      lastStack--;
    }
    return -1;
  }

  popAtStack(index) {
    //if pop at stack we track indices of stacks not holding a value
    // this solution allows stacks to be empty rather than eliminate the stack
    // and reassign indices
    if (this.stacks[index]) {
      if (this.stacks[index].length > 0) {
        this.emptyStackIndices.push(index);
        this.emptyStackIndices.sort((a, b) => {
          return a - b;
        });
        return this.stacks[index].pop();
      } else return -1;
    } else return -1;
  }
}
