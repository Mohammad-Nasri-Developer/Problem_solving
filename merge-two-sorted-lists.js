// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // Initialize the value (default 0)
    this.next = (next === undefined ? null : next); // Initialize the next pointer (default null)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node with a value (can be any value, often 0 or negative infinity)
    // This node simplifies the merging logic as we don't need to handle attaching to an empty list.
    let dummy = new ListNode();

    // Set a current pointer to the dummy node, used to traverse and build the merged list.
    let current = dummy;

    // Loop as long as both list1 and list2 have nodes remaining (not null).
    while (list1 !== null && list2 !== null) {
        // Compare the values of the current nodes in list1 and list2.
        if (list1.val <= list2.val) {
            // If list1's value is smaller or equal, attach it to the merged list.
            current.next = list1;
            // Move list1 to the next node.
            list1 = list1.next;
        } else {
            // Otherwise, attach the node from list2.
            current.next = list2;
            // Move list2 to the next node.
            list2 = list2.next;
        }

        // In both cases, move the current pointer to the newly attached node.
        current = current.next;
    }

    // After the loop, one list might still have remaining nodes.
    // Attach any remaining nodes from the non-empty list to the end of the merged list.
    current.next = (list1 !== null) ? list1 : list2;

    // Return the merged list, starting from the node after the dummy node (which doesn't hold data).
    return dummy.next;
};

// Example usage with ListNode structures:
let list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(2, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);