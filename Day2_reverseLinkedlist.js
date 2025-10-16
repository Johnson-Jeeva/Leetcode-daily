/**
 * Problem: Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/
 *
 * Approach:
 * - Use iterative pointer reversal (prev, curr, temp).
 * - Keep track of previous node to reverse the links.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (this.size === 1) return head;

  let prev = null;
  let curr = head;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};