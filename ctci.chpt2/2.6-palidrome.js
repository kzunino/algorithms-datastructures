/* 
CTCI - 2.6

Palidrome

Implement a function to check if a linked list is a palindrome.



EXAMPLE
Input: (B -> O -> B)
Output: true

Input: linked list
Output: boolean
Constraints: optimize
Edge Case: no list

Time Complexity: O(n) - we traverse both list
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
}

let list1 = new SinglyLinkedList();
list1.push('b');
list1.push('o');
list1.push('b');

let list2 = new SinglyLinkedList();
list2.push('r');
list2.push('a');
list2.push('c');
list2.push('e');
list2.push('c');
list2.push('a');
list2.push('r');

let list3 = new SinglyLinkedList();
list3.push('r');
list3.push('a');
list3.push('c');
list3.push('e');
list3.push('c');

let list4 = new SinglyLinkedList();
list4.push('r');
list4.push('a');

// O(n) time / 0(n) space
const isPalindrome = (list) => {
  if (!list || list.length < 3) return false;

  let listVals = [];
  let nodePointer = list.head;
  while (nodePointer) {
    listVals.push(nodePointer.val);
    nodePointer = nodePointer.next;
  }
  let forward = listVals.join('');
  let reversed = listVals.reverse().join('');

  if (forward === reversed) return true;
  else return false;
};

console.log(
  isPalindrome(list1) === true,
  isPalindrome(list2) === true,
  isPalindrome(list3) === false,
  isPalindrome(list4) === false
);

// Recursive solution

class MirrorNode {
  constructor(head) {
    this.node = head;
    this.result = true;
  }
}

const isPalindromeRecursive = (list) => {
  let palindrome = checkPalindrome(list.head, list.length);
  return palindrome.result;
};

const checkPalindrome = (head, length) => {
  if (length === 0) return new MirrorNode(head);
  if (length === 1) return new MirrorNode(head.next);

  const compareNode = checkPalindrome(head.next, length - 2);
  if (!compareNode.result || !compareNode.node) return compareNode;

  compareNode.result = head.val === compareNode.node.val;
  compareNode.node = compareNode.node.next;

  return compareNode;
};

console.log(
  isPalindromeRecursive(list1) === true,
  isPalindromeRecursive(list2) === true,
  isPalindromeRecursive(list3) === false,
  isPalindromeRecursive(list4) === false
);
