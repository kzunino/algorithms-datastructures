/* 
CTCI - 2.4

Partition

Write code to partition a linked list around a value x, such that all nodes less
than x come before all nodes greater than or equal to x. 
(Important: The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions).

Create two empty linked lists and add values based on the partition value
iterate over the original list and sort the values. 
At the end combine the lower list and the greater list 


EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

Input: node partition value
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
Constraints: optimize
Edge Case: no head returns undefined

Time Complexity: O(n) - we traverse the whole list
Space Complexity: O(1) - only reassigning nodes


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

  partition(x) {
    let head = this.head;
    if (!head) return undefined;
    // Create two new singly linked lists
    // (don't worry about the tail as we traverse only from the head)
    const smallerListHead = new SinglyLinkedList();
    const greaterListHead = new SinglyLinkedList();
    // pointer to traverse list
    let node = head;

    // pointers to traverse new linked lists
    let lessPointer = smallerListHead;
    let morePointer = greaterListHead;

    // while node exists check if node val > or < partition
    while (node) {
      if (node.val < x) {
        //if less than, initialize next attribute on LL
        lessPointer = lessPointer.next = node;
      } else {
        morePointer = morePointer.next = this.tail = node;
      }
      node = node.next;
    }
    // points links smaller list to greater list and severs other values
    lessPointer.next = greaterListHead.next;
    // severs the trailing values from original node list
    morePointer.next = null;
    return smallerListHead.next;
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(5);
list.push(8);
list.push(5);
list.push(10);
list.push(2);
list.push(1);

// console.log(list);

console.log(JSON.stringify(list.partition(5)));
