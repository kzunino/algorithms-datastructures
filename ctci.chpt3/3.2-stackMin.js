/* 
CTCI - 3.2

Stack Min

How would you design a stack which, in addition to push and pop,
has a function min with returns the minimum element? Push and Pop and min
should all operate in O(1) time


EXAMPLE
Input: 
Output: min value

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity: O(1) - the min val will always be accessed by last val in min arr
Space Complexity: O(1) - 


Optimized version:
Time Complexity:
Space Complexity:

*/

class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    if (!this.min.length) this.min.push(val);
    else this.min.push(Math.min(val, this.getMin()));
    this.stack.push(val);
  }

  pop() {
    this.min.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}
