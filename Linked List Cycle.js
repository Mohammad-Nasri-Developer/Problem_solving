
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function hasCycle(head) {
    // If the list is empty or has only one node, there's no cycle
    if (!head || !head.next) {
        return false;
    }

    // Initialize two pointers
    let slow = head;         // Slow pointer starts at the head
    let fast = head.next;    // Fast pointer starts at the second node

    // Traverse the linked list
    while (fast && fast.next) {
        // If slow and fast pointers meet, it means there's a cycle
        if (slow === fast) {
            return true; // Cycle detected
        }
        // Move slow pointer one step forward
        slow = slow.next;
        // Move fast pointer two steps forward
        fast = fast.next.next;
    }

    // If we reach here, it means there's no cycle
    return false;
}
