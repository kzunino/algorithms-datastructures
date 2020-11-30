/* 
CTCI - 2.1

Return Kth to Last

Implement an algorithm to find the kth to last element in a SSL

EXAMPLE
Input: Kth to last element
Output: node

Input: Kth to last element
Output: node
Constraints: optimize
Edge Case: empty list or with one node

Time Complexity: O(n) - we traverse the whole list if necessary
Space Complexity: O(1)


Optimized version:
Time Complexity:
Space Complexity:

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  toString() {
    let head = this.head;
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result.join(', ');
  }

  findKthElement(k) {
    if (k > this.length) return undefined;

    let count = this.length - k;
    let node = this.head;
    while (count > 0) {
      node = node.next;
      count--;
    }
    return node;
  }

  findKthElementRecursion(k, head = this.head) {
    // recurse to the last item in list
    if (!head) return 0;
    //
    let index = list.findKthElementRecursion(k, head.next) + 1;
    //searches for index count to match Kth element
    // doest return anything
    if (index === k) {
      console.log(k + 'th to the last node is ' + head.val);
    }
    //returns the last index count / size of the list
    return index;
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(2);
list.push(3);
list.push(1);
list.push(4);
// console.log(list);

// console.log(list.findKthElement(2));
// console.log(list.toString());

console.log(list.findKthElementRecursion(2));
