// Sun, 25 May 2025,

// Pythagorean Triplet
// Difficulty: MediumAccuracy: 24.77%Submissions: 227K+Points: 4Average Time: 20m
// Given an array arr[], return true if there is a triplet (a, b, c) from the array (where a, b, and c are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

// Examples:

// Input: arr[] = [3, 2, 4, 6, 5]
// Output: true
// Explanation: a=3, b=4, and c=5 forms a pythagorean triplet.
// Input: arr[] = [3, 8, 5]
// Output: false
// Explanation: No such triplet possible.
// Input: arr[] = [1, 1, 1]
// Output: false
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 103

/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
  pythagoreanTriplet(arr) {
    // Create a frequency map to count occurrences of each number
    const freq = new Map();
    for (const num of arr) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Create a set of squares of all elements for quick lookup
    const squares = new Set();
    for (const num of arr) {
      squares.add(num * num);
    }

    // Get the list of unique elements
    const unique = Array.from(freq.keys());

    // Iterate over all possible pairs (a, b) including same elements
    for (let i = 0; i < unique.length; i++) {
      const a = unique[i];
      for (let j = i; j < unique.length; j++) {
        const b = unique[j];
        const sumSq = a * a + b * b;

        // Check if the sum of squares exists in the squares set
        if (!squares.has(sumSq)) {
          continue;
        }

        // Calculate c and check if it's an integer present in the array
        const c = Math.sqrt(sumSq);
        if (!Number.isInteger(c) || !freq.has(c)) {
          continue;
        }

        // Check different cases to ensure a, b, c are from different indices

        // Case 1: All distinct elements
        if (a !== b && a !== c && b !== c) {
          if (freq.get(a) >= 1 && freq.get(b) >= 1 && freq.get(c) >= 1) {
            return true;
          }
        }
        // Case 2: a and b are same, c is different
        else if (a === b && a !== c) {
          if (freq.get(a) >= 2 && freq.get(c) >= 1) {
            return true;
          }
        }
        // Case 3: a equals c and b is 0 (so a² + 0² = a²)
        else if (a === c && b === 0) {
          if (freq.get(a) >= 2 && freq.get(0) >= 1) {
            return true;
          }
        }
        // Case 4: b equals c and a is 0 (so 0² + b² = b²)
        else if (b === c && a === 0) {
          if (freq.get(b) >= 2 && freq.get(0) >= 1) {
            return true;
          }
        }
        // Case 5: All elements are 0 (0² + 0² = 0²)
        else if (a === 0 && b === 0 && c === 0) {
          if (freq.get(0) >= 3) {
            return true;
          }
        }
      }
    }

    // If no triplet found after all checks
    return false;
  }
}
