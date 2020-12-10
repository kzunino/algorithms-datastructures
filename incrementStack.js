/* 

Increment stack

Design a stack which supports the following operations.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number
 of elements in the stack or do nothing if the stack reached the maxSize.

void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.

int pop() Pops and returns the top of stack or -1 if the stack is empty.

void inc(int k, int val) Increments the bottom k elements of the stack by val. 
If there are less than k elements in the stack, just increment all the elements in the stack.

EXAMPLE
Input: 
Output: 

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity: 
push() / pop() operates at linear O(n) because worst case is we have

increment() O(n)

Space Complexity: O(1) - no increase to auxiliary space


Optimized version:
Time Complexity:
Space Complexity:

*/

class CustomStack {
  constructor(maxSize) {
    this.capacity = maxSize;
    this.stack = [];
  }

  push(val) {
    if (this.stack.length < this.capacity) {
      this.stack.push(val);
    }
  }

  pop() {
    if (this.stack.length) return this.stack.pop();
    else return -1;
  }

  increment(k, val) {
    if (k > this.stack.length) {
      k = this.stack.length - 1;
    } else k--;
    while (k > -1) {
      this.stack[k] += val;
      k--;
    }
  }
}
