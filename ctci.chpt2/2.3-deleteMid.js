/* 
CTCI - 2.3

Delete A Middle Node From Single Linked List

Implement an algorithm to delete a node in the middle (i.e. any node but the 
first and the last node, not necessarily the exact same middle) of a singly 
linked list, given only access to that node

EXAMPLE
Input: a -> b -> c -> d -> e -> f
Output: a -> b -> d -> e -> f

Input: Node
Output: a -> b -> d -> e -> f
Constraints: optimize
Edge Case: empty list or list with 2 nodes

Time Complexity: O(n) - we traverse the whole list
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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  deleteMidNode(node) {
    if (!node || !node.next) return null;
    // made node the value of the next node and point to the node after
    // to delete node from list
    node.val = node.next.val;
    node.next = node.next.next;
  }
}

let list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
// console.log(list);
let node = list.get(2);

console.log(list.toString());

list.deleteMidNode(node);
console.log(list.toString());
