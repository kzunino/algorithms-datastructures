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

// Slightly optimized: keep track of last stack with values in and decrement so pop
// doesnt have to loop through all stacks.... still too slow

class DinnerPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
    this.emptyStackIndeces = [];
    this.lastStackWithValues = 0;
  }

  push(val) {
    let lastStack = this.stacks.length - 1;

    if (this.emptyStackIndeces.length) {
      this.stacks[this.emptyStackIndeces[0]].push(val);
      this.emptyStackIndeces.shift();
    } else if (this.stacks[lastStack].length < this.capacity) {
      this.stacks[lastStack].push(val);
      this.lastStackWithValues++;
    } else if (this.stacks[lastStack].length === this.capacity) {
      this.stacks.push([val]);
      this.lastStackWithValues++;
    }
  }

  pop() {
    // let lastStack = this.stacks.length - 1
    let lastStack = Math.ceil(this.lastStackWithValues / this.capacity) - 1;
    // if last stack is empty, decrement stacks to find last item
    while (lastStack > -1) {
      if (this.stacks[lastStack].length > 0) {
        return this.stacks[lastStack].pop();
      }
      lastStack--;
      this.lastStackWithValues - 2;
    }
    return -1;
  }

  popAtStack(index) {
    if (this.stacks[index]) {
      if (this.stacks[index].length > 0) {
        this.emptyStackIndeces.push(index);
        this.emptyStackIndeces.sort((a, b) => {
          return a - b;
        });
        return this.stacks[index].pop();
      } else return -1;
    } else return -1;
  }
}

// Optimized solution from leetcode

class DinnerPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [];
    this.sortedEmptyArraySlotIndex = []; // big -> small
  }

  push(value) {
    // O(1)
    if (this.sortedEmptyArraySlotIndex.length === 0) {
      // no empty array slots, append value the end
      this.stacks.push(value);
    } else {
      this.stacks[this.sortedEmptyArraySlotIndex.pop()] = value; // add value to the first empty slot
    }
  }

  pop() {
    // amortized O(1)? in most cases? O(n) worst case (n = number of contiguous empty slots)
    let value = this.stacks.pop();
    while (this.stacks.length && value === undefined) {
      // if value had been removed by popAtStack e.g. [value1, undefined, undefined, undefined]
      value = this.stacks.pop();
    }
    return value === undefined ? -1 : value;
  }

  popAtStack(index) {
    // O(n)
    // locate stack in the array
    const stackStartIndex = index * this.capacity;
    const stackEndIndex = stackStartIndex + this.capacity - 1;

    for (let i = stackEndIndex; i >= stackStartIndex; i--) {
      if (this.stacks[i] !== undefined) {
        // find the last non-empty value in the stack
        const returnValue = this.stacks[i];
        this.stacks[i] = undefined; // remove value from array
        insertSorted(this.sortedEmptyArraySlotIndex, i); // add index to empty slots, sort big -> small
        return returnValue;
      }
    }

    return -1;
  }
}

function insertSorted(sortedArray, value) {
  // the value in the correct place in a sorted array
  sortedArray.push(value);
  let index = sortedArray.length - 1;
  while (sortedArray[index] > sortedArray[index - 1]) {
    [sortedArray[index], sortedArray[index - 1]] = [
      sortedArray[index - 1],
      sortedArray[index],
    ]; // swap
    index--;
  }
}
