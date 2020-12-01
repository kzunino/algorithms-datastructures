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
Space Complexity: O(n) - hash table might grow as large as list


Optimized version:
Time Complexity:
Space Complexity:

*/

/* 
 Source to run the solutions on Leetcode since I didn't manually create
looped linked list
 
    https://leetcode.com/problems/linked-list-cycle/
 */

// Iterative solution with has table

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
