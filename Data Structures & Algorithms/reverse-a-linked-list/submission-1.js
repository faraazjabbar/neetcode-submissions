/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = null;
        let temp = head;
        while(temp != null) {
            let next = temp.next;
            temp.next = curr;
            curr = temp;
            temp = next;
        }
        return curr;
    }
}
