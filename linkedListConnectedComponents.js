/* 

Reverse a linked list

Given a linked list and a subset of values, output the number of components 
that are either isolated in the subset or grouped in the subset



EXAMPLE
Input:(0-> 1 -> 2 -> 3 -> 4 -> 5 -> null) G=[0,1,3]
Output: 2

Input: linked list and value subset
Output: number of connected components
Constraints: optimize
Edge Case:

Time Complexity: O(n) - we traverse the list
Space Complexity: O(g) - create a hashmap the size of array


Optimized version: 
Time Complexity:
Space Complexity:

source: 
https://leetcode.com/problems/linked-list-components/
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let hash = {};
  let output = 0;
  G.forEach((val) => (hash[val] = true));

  //traverse th whole list one time checking if value is in hashtable
  // if it is, traverse until next val isn't in table
  // increment output and continue checking for other components
  while (head) {
    if (hash[head.val]) {
      while (head && hash[head.val]) {
        head = head.next;
      }
      output++;
    }
    head ? (head = head.next) : (head = null);
  }
  return output;
};
