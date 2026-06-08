class Solution {
  compute(head) {
    // Step 1: Reverse the linked list
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let revHead = prev;

    // Step 2: Filter nodes while traversing from right to left
    let dummy = new Node(0); // Dummy node to simplify deletion
    dummy.next = revHead;
    let prevNode = dummy;
    curr = revHead;
    let maxVal = -Infinity;

    while (curr) {
      if (curr.data >= maxVal) {
        // Keep the node and update max
        maxVal = curr.data;
        prevNode = curr;
        curr = curr.next;
      } else {
        // Delete the node
        prevNode.next = curr.next;
        curr = curr.next;
      }
    }
    let filteredHead = dummy.next;

    // Step 3: Reverse the list back to original order
    prev = null;
    curr = filteredHead;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}
