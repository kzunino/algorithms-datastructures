/* 
CTCI - 2.8

Loop Detection

Given a linked list which might contain a loop, implement an algorithm that
returns the node at the beginning of the loop (if one exists).



EXAMPLE
Input:(A -> B -> C -> D -> E -> C)
Output: (C)

Input: linked lists
Output: Node where loop begins
Constraints: optimize
Edge Case: no list

Time Complexity: O(n) - we traverse the list
Space Complexity: O(n) - hash table / set might grow as large as list


Optimized version: Turtle Hare two point solution
Time Complexity: O(N)
Space Complexity:O(1)

*/

/**
 * 
 * https://leetcode.com/problems/linked-list-cycle-ii/

OPTIMIZED SOLUTION: Slow and Fast Two Point Solution


- slow pointer traverses one node at a time
- fast pointer traverses two nodes at a time
- if fast pointer reaches end of list then there is no loop
- if there is a loop, fast pointer and slow pointer will meet
- when the two pointers meet the slow pointer gets reset to the head,
and fast pointer begins iterating one space at a time.
- when they meet again it will be the starting node for the loop



 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

/**
 * 
 
https://leetcode.com/problems/linked-list-cycle-ii/

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let set = new Set();

  while (head) {
    set.add(head);
    if (set.has(head.next)) return head.next;
    else head = head.next;
  }

  return null;
};

// Iterative solution with hash table
/* 
 Source to run the solutions on Leetcode since I didn't manually create
looped linked list
 
    https://leetcode.com/problems/linked-list-cycle/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let hash = {};

  while (head) {
    if (!head.next) return false;
    if (hash[head.val] === head.next.val) return true;
    else {
      hash[head.val] = head.next.val;
      head = head.next;
    }
  }

  return false;
};
