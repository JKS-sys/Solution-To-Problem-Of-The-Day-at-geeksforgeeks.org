class Solution {
  subarrayXor(arr, k) {
    // Map to store frequency of prefix XOR values
    const freq = new Map();
    // Base case: prefix XOR 0 before the array starts
    freq.set(0, 1);

    let count = 0;
    let xor = 0;

    for (let num of arr) {
      // Update running XOR
      xor ^= num;

      // We need previous XOR = xor ^ k
      const target = xor ^ k;
      if (freq.has(target)) {
        count += freq.get(target);
      }

      // Update frequency of current XOR
      freq.set(xor, (freq.get(xor) || 0) + 1);
    }

    return count;
  }
}
