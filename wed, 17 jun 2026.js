class Solution {
  maxProduct(n) {
    // Base case: n = 2 or 3, at least one cut mandatory
    if (n === 2) return 1; // 1 * 1
    if (n === 3) return 2; // 2 * 1

    // For n >= 4, we can use 3's optimally
    let threes = Math.floor(n / 3);
    let remainder = n % 3;

    if (remainder === 1) {
      // 3*1 is worse than 2*2, so use one less 3 and make it 4
      threes--;
      remainder = 4;
    } else if (remainder === 0) {
      remainder = 1; // multiply by 1 is neutral
    }
    // remainder is now 2, 4, or 1 (when n is multiple of 3)

    // Compute 3^threes * remainder
    return Math.pow(3, threes) * remainder;
  }
}
