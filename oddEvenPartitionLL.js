/* 

Odd Even Linked List

Given a singly linked list, group all odd nodes together followed
 by the even nodes. Please note here we are talking about the node
  number and not the value in the nodes.

You should try to do it in place. The program should run in O(1)
space complexity and O(nodes) time complexity.

EXAMPLE
Input: 121
Output: true

Input: Linked list
Output: ordered linked list
Constraints: optimize
Edge Case: empty list

Time Complexity: O(n) - Touch each node of the list once
Space Complexity: O(1) 


Optimized version: 
Time Complexity: 
Space Complexity:

source: 
https://leetcode.com/problems/odd-even-linked-list/

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

var oddEvenList = function (head) {
  if (!head) return head;
  let curr = head;
  let runner = head.next;
  const evenHead = head.next;

  while (curr.next && runner.next) {
    if (curr.next && runner.next) {
      curr.next = runner.next;
      curr = curr.next;
    }

    if (curr.next && runner.next) {
      runner.next = curr.next;
      runner = runner.next;
    } else runner.next = null;
  }

  curr.next = evenHead;
  return head;
};
