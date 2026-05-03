class Solution {
  // Function to sort array in descending order of set bit count
  sortBySetBitCount(arr) {
    // Helper function to count set bits using Brian Kernighan's Algorithm
    const countSetBits = (n) => {
      let count = 0;
      while (n) {
        n &= n - 1; // clears the lowest set bit
        count++;
      }
      return count;
    };

    // Stable sort in descending order of set bit count
    arr.sort((a, b) => countSetBits(b) - countSetBits(a));

    return arr;
  }
}
