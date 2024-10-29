/**
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
var detectCycle = function(head)  {
    let p=head;
    let t=head;
    while(p!=null&&p.next!=null){
         p=p.next.next;
         t=t.next;
         if(p===t){
             p=head;
             while(p!=t){
                 p=p.next;
                 t=t.next;
             }
             return p;
         }
    }
    return null;
 };