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

Time Complexity: O(nm) - we traverse both list
Space Complexity: O(n) -creating new list or O(n + k) -plus any spaces when doing recursion forwards


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
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
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

const sumListsRecursiveReversed = (list1_head, list2_head, carry = 0) => {
  //Base case
  if (!list1_head && !list2_head && carry === 0) return null;

  // create the first node
  const newNode = new Node();
  let sum = carry;

  // add values to sum
  if (list1_head) sum += list1_head.val;
  if (list2_head) sum += list2_head.val;

  // add sum mod 10 to new node
  newNode.val = sum % 10;

  // update carry
  carry = Math.floor(sum / 10);

  list1_head ? (list1_head = list1_head.next) : null;
  list2_head ? (list2_head = list2_head.next) : null;

  // calls self with updated values
  const nextNewNode = sumListsRecursiveReversed(list1_head, list2_head, carry);

  //links nodes together
  newNode.next = nextNewNode;

  return newNode;
};

// Reversed order linked list

// let list1 = new SinglyLinkedList();
// list1.push(7);
// list1.push(1);
// list1.push(6);

// let list2 = new SinglyLinkedList();
// list2.push(5);
// list2.push(9);
// list2.push(2);

//  Non Recursive
// console.log(sumListsReversed(list1, list2));

//Recursive
// console.log(sumListsRecursiveReversed(list1.head, list2.head));

// forward ordered lists
let list1 = new SinglyLinkedList();
list1.push(6);
list1.push(0);
list1.push(0);
list1.push(0);

let list2 = new SinglyLinkedList();
list2.push(2);
list2.push(0);
list2.push(0);

// Forward recursive - Not my solution =(

class PartialSum {
  constructor() {
    this.nodeSum = null;
    this.carry = 0;
  }
}

function addLists(list1, list2) {
  const len1 = list1.length; // 3
  const len2 = list2.length; // 3

  if (len1 < len2) list1 = padList(list1, len2 - len1);
  else list2 = padList(list2, len1 - len2);

  list1 = list1.head;
  list2 = list2.head;

  const sum = addListsHelper(list1, list2);

  if (!sum.carry) return sum.nodeSum;
  else return insertBefore(sum.nodeSum, sum.carry);
}

//    00

function addListsHelper(list1, list2) {
  if (!list1 && !list2) return new PartialSum();

  // traverses all the way to the end of linked list recursively
  // first node gets next = null, then next node.next = previous partialSum
  const sum = addListsHelper(list1.next, list2.next),
    value = sum.carry + list1.val + list2.val,
    fullResult = insertBefore(sum.nodeSum, value % 10);

  sum.nodeSum = fullResult; // , 0, 0, null
  sum.carry = Math.floor(value / 10);
  return sum;
}

function padList(list, padding) {
  for (let i = 0; i < padding; i++) {
    list.unShift(0);
  }

  return list;
}

function insertBefore(list, value) {
  const node = new Node(value);
  if (list) node.next = list;
  return node;
}

console.log(addLists(list1, list2));
