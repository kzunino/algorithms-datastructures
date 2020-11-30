/* 
CTCI - 2.7

Intersection

Given two (singly) linked lists, determine if the two lists intersect. Return
the intersecting node. Note that the intersection is defined based on reference,
not value. That is, if the kth node of the first linked list is the exact same node
by reference as the jth node of the second linked list then they are intersecting.



EXAMPLE
Input: (1 -> 2 -> 3 -> 4 ->5 ) (6 -> 7 -> 8 -> 3 -> 4 -> 5)
Output: (3 ->)

Input: 2 linked lists
Output: intersecting node or null
Constraints: optimize
Edge Case: no list

Time Complexity: O(n) - we traverse the list
Space Complexity: O(1) - no added data structures


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
}

let list1 = new SinglyLinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

let list2 = new SinglyLinkedList();
list2.push(6);
list2.push(7);
list2.push(8);
list2.push(3);
list2.push(4);
list2.push(5);

let list3 = new SinglyLinkedList();
list3.push('r');
list3.push('a');
list3.push('c');
list3.push('e');
list3.push('c');

let list4 = new SinglyLinkedList();
list4.push('r');
list4.push('a');

const isIntersecting = (l1, l2) => {
  if (!l1 || !l2) return null;
  const len1 = l1.length;
  const len2 = l2.length;
  let diff = Math.abs(len1 - len2);
  let shorter, longer;
  let node = null;

  if (len1 > len2) {
    shorter = l2.head;
    longer = l1.head;
  } else {
    count = len1;
    shorter = l1.head;
    longer = l2.head;
  }

  // traverses the list one time comparing the nodes ahead
  while (shorter) {
    //shortens longer list because intersection cant be before this point
    // due to the fact that the lists are equal after the intersection
    if (diff > 0) {
      longer = longer.next;
      diff--;
    } else {
      if (shorter.next.val === longer.next.val) return (node = longer.next);
      else {
        shorter = shorter.next;
        longer = longer.next;
      }
    }
  }

  return node;
};

console.log(isIntersecting(list1, list2));
