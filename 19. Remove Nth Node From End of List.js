/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    let leftPointer = dummy;
    let rightPointer = head;


    // 1 create a gap of n nodes between the leftPointer and rightPointer
    while (n > 0 && rightPointer) {
        rightPointer = rightPointer.next;
        n -= 1;
    }

    // 2 keep moving them until right pointer reach the end.
    while (rightPointer){
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    // 3 removing the nth node from the end of the linked list.
    leftPointer.next = leftPointer.next.next; //(this act like skip)
    return dummy.next;
};