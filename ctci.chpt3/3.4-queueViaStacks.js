/* 
CTCI - 3.4

Queue via Stacks

Implement a MyQueue class which implements a queue using two stacks


EXAMPLE
Input: 
Output: 

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity: push() operates at constant time / remove() - O(N) has to push
values to queue stack

Space Complexity: O(1) - no increase to auxiliary space


Optimized version:
Time Complexity:
Space Complexity:




*/

class MyQueue {
  constructor() {
    this.newStack = [];
    this.oldStack = [];
  }

  // always pushes to the stack
  push(val) {
    this.newStack.push(val);
  }

  // removes from the old stack in FIFO
  //  reverses the new stack and pops off values
  remove() {
    if (this.oldStack.length === 0) {
      if (this.this.newStack.length > 0) {
        while (this.newStack.length > 0) {
          this.oldStack.push(this.newStack.pop());
        }
      } else return undefined;
    } else return this.oldStack.pop();
  }
}
