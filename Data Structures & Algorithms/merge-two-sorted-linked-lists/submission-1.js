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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;
        let dummy = {val: 0, next: null}
        let res = dummy;

        while(p1 && p2) {
            if(p1.val <= p2.val) {
                    res.next = p1;
                    p1 = p1.next;
            } else {
                    res.next = p2;
                    p2 = p2.next;
            }
            res = res.next
           
        }
         if(!p1) {
                res.next = p2;
            } else if(!p2) {
                res.next = p1;
            }
        return dummy.next;
    }
}
