class Solution {
  /**
   * @param {number} n
   * @returns {string[]}
   */
  graycode(n) {
    const total = 1 << n; // 2^n
    const result = [];
    for (let i = 0; i < total; i++) {
      // Compute Gray code: i XOR (i >> 1)
      const gray = i ^ (i >> 1);
      // Convert to binary string with leading zeros to length n
      const binaryStr = gray.toString(2).padStart(n, "0");
      result.push(binaryStr);
    }
    return result;
  }
}
