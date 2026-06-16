/**
 * @param {number[][]} queries
 * @return {number[]}
 */
class Solution {
  constructList(queries) {
    // result array initially contains the starting value 0
    const result = [0];
    let xorAll = 0;

    for (const [type, x] of queries) {
      if (type === 0) {
        // Insert x transformed by the current cumulative XOR
        result.push(x ^ xorAll);
      } else {
        // Update the cumulative XOR applied to all elements
        xorAll ^= x;
      }
    }

    // Apply the final cumulative XOR to all stored values
    for (let i = 0; i < result.length; i++) {
      result[i] ^= xorAll;
    }

    // Sort and return
    result.sort((a, b) => a - b);
    return result;
  }
}
