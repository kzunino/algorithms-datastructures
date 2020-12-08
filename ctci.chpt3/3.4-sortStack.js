/* 
CTCI - 3.5

Sort Stack

Write a program to sort a stack such that the smallest items are on the top. You
can use an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the follwing operations. push, pop, peek,
and isEmpty.

EXAMPLE
Input: 
Output: 

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity: push() operates at linear O(n) because worst case is we have
to bubble the value to the end of the stack. The swapping itself is constant time

Space Complexity: O(1) - no increase to auxiliary space


Optimized version:
Time Complexity:
Space Complexity:

*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (!this.stack.length) this.stack.push(val);
    else {
      this.stack.push(val);
      let lastIdx = this.stack.length - 1;
      let prevIdx = this.stack.length - 2;

      while (
        this.stack[lastIdx] > this.stack[prevIdx] ||
        this.stack[prevIdx] > 0
      ) {
        [this.stack[prevIdx], this.stack[lastIdx]] = [
          this.stack[lastIdx],
          this.stack[prevIdx],
        ];

        lastIdx = prevIdx;
        prevIdx = lastIdx - 1;
      }
    }
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.stack);
