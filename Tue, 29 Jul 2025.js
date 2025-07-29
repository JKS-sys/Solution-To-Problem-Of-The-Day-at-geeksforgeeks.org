// Tue, 29 Jul 2025,

// ASCII Range Sum
// Difficulty: MediumAccuracy: 64.02%Submissions: 1K+Points: 4
// Given a string s consisting of lowercase English letters, for every character whose first and last occurrences are at different positions, calculate the sum of ASCII values of characters strictly between its first and last occurrence.
// Return all such non-zero sums (order does not matter).

// Examples:

// Input: s = "abacab"
// Output: [293, 294]
// Explanation: characters 'a' and 'b' appear more than once:
// 'a' : between positions 1 and 5 → characters are b, a, c and ascii sum is 98 + 97 + 99 = 294.
// 'b' : between positions 2 and 6 → characters are a, c, a and ascii sum is 97 + 99 + 97 = 293.
// Input: s = "acdac"
// Output: [197, 199]
// Explanation: characters 'a' and 'c' appear more than once:
// 'a' : between positions 1 and 4 → characters are c, d and ascii sum is 99 + 100 = 199.
// 'c' : between positions 2 and 5 → characters are d, a and ascii sum is 100 + 97 = 197.
// Constraints:
// 1 ≤ s.size() ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  asciirange(s) {
    const n = s.length;
    let first = new Array(26).fill(-1);
    let last = new Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
      let code = s.charCodeAt(i) - 97;
      if (first[code] === -1) {
        first[code] = i;
      }
      last[code] = i;
    }

    let result = [];
    for (let c = 0; c < 26; c++) {
      if (first[c] !== -1 && first[c] < last[c]) {
        let start = first[c] + 1;
        let end = last[c] - 1;
        if (start <= end) {
          let sum = 0;
          for (let j = start; j <= end; j++) {
            sum += s.charCodeAt(j);
          }
          result.push(sum);
        }
      }
    }
    result.sort((a, b) => a - b);
    return result;
  }
}
