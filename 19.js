/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let res=[];
    while(head!=null){
        res.push(head.val);
        head=head.next;
    }
    for(let i=0,j=res.length-1;i<j;i++,j--){
        if(res[i]!=res[j]){
            return false;
        }
    }
    return true;
};