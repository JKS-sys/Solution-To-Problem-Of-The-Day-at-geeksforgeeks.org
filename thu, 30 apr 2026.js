class Solution {
  isMaxHeap(arr) {
    const n = arr.length;
    // Check only nodes that have at least one child
    for (let i = 0; i < Math.floor(n / 2); i++) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      // Left child exists and violates max-heap property
      if (left < n && arr[i] < arr[left]) return false;
      // Right child exists and violates max-heap property
      if (right < n && arr[i] < arr[right]) return false;
    }
    return true;
  }
}
