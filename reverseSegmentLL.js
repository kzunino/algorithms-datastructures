/* 

Reverse a segment of a linked list

Given a linked list, reverse the nodes in a given segment.



EXAMPLE
Input:(1 -> 2 -> 3 -> 4 -> 5)  m=2, m=4
Output: (1 -> 4 -> 3 -> 2 -> 5)

Input: linked lists
Output: linked list
Constraints: optimize
Edge Case:

Time Complexity: O(n) - we traverse the list recursively 
Space Complexity: O(1) - 


Optimized version: Turtle Hare two point solution
Time Complexity: O(N)
Space Complexity:O(1)

source: 
https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === n || m > n || !head.next) return head;
  let length = n - m + 1;
  let list = null;
  let start = head;
  let runner = head;
  let end = null;
  let p1 = 1;
  let p2 = 1;

  // moves head pointer to first position
  while (head && p1 !== m) {
    // if no list beginning and head moves, then first saves first node
    if (!list) list = head;
    start = head;
    head = head.next;
    p1++;
  }

  // end position runner
  while (runner && p2 !== n) {
    runner = runner.next;
    end = runner.next;
    p2++;
  }

  // if p1 is beginning, runner will become new head
  if (!list) list = runner;

  //reverses the segment
  let newlistEndNode = reverseSegment(head, length, start);
  newlistEndNode.next = end;
  return list;
};

const reverseSegment = (head, length, start) => {
  // recurses to last position of runner and points start to end
  if (length === 1) {
    start.next = head;
    return head;
  }

  //reverses all nodes in the segment
  let node = reverseSegment(head.next, length - 1, start);
  node.next = head;
  node = node.next;
  return node;
};
