/* 
CTCI - 2.4

Partition

You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1's digit is t the head of
the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not
allowed to "cheat" and just convert the linked list to an integer).



EXAMPLE
Input: (7 -> 1 -> 8) +  (5 -> 9 -> 2)
Output: (2 -> 1-> 9 )

Input: linked list
Output: (2 -> 1-> 9 )
Constraints: optimize
Edge Case: 

Time Complexity: O(n) - we traverse the whole list
Space Complexity: O(n) -creating new list


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

  unShift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

const sumListsReversed = (list1, list2) => {
  const newList = new SinglyLinkedList();
  let sum = 0;
  let carry = 0;
  let l1 = list1.head;
  let l2 = list2.head;

  while (l1 || l2 || carry) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    newList.unShift((sum + carry) % 10);
    carry = Math.floor(sum / 10);
    sum = 0;
  }

  return newList;
};

// Reversed order linked list

let list = new SinglyLinkedList();
list.push(7);
list.push(1);
list.push(6);

let list2 = new SinglyLinkedList();
list2.push(5);
list2.push(9);
list2.push(2);

//  Non Recursive
// console.log(sumListsReversed(list1, list2));

//Recursive
// console.log(list.sumListsRecursiveReversed(list2));
