/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
class Solution {
  lexicographicallySmallest(s, k) {
    const n = s.length;

    // Step 1: Correct the value of k
    // Check if n is a power of 2
    if ((n & (n - 1)) === 0) {
      k = Math.floor(k / 2);
    } else {
      k = k * 2;
    }

    // Step 2: If removal is impossible or results in empty string
    if (k >= n) {
      return "-1";
    }

    // Step 3: Build lexicographically smallest string by removing exactly k characters
    const stack = [];
    for (const char of s) {
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] > char) {
        stack.pop();
        k--;
      }
      stack.push(char);
    }

    // Step 4: If there are still characters to remove, remove from the end
    while (k > 0) {
      stack.pop();
      k--;
    }

    return stack.join("");
  }
}
