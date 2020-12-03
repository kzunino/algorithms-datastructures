/* 

Reverse a linked list

Given a linked list, reverse the nodes



EXAMPLE
Input:(1 -> 2 -> 3 -> 4 -> 5 -> null)
Output: (5 -> 4 -> 3 -> 2 -> 1 ->null)

Input: linked lists
Output: reversed list
Constraints: optimize
Edge Case:

Time Complexity: O(n) - we traverse the list
Space Complexity: O(1) - 


Optimized version: Turtle Hare two point solution
Time Complexity: O(N)
Space Complexity:O(1)

source: 
https://leetcode.com/problems/reverse-linked-list/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev,
    next = null;

  while (head) {
    next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }
  return prev;
};

// Recursive solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;

  const reversedNodes = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedNodes;
};
