// Wed, 10 Sep 2025,

// Largest number in one swap
// Difficulty: EasyAccuracy: 31.06%Submissions: 5K+Points: 2
// Given a string s, return the lexicographically largest string that can be obtained by swapping at most one pair of characters in s.

// Examples:

// Input: s = "768"
// Output: "867"
// Explanation: Swapping the 1st and 3rd characters(7 and 8 respectively), gives the lexicographically largest string.
// Input: s = "333"
// Output: "333"
// Explanation: Performing any swaps gives the same result i.e "333".
// Constraints:
// 1 ≤ |s| ≤ 10^5
// '0' ≤ s[i] ≤ '9'
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  largestSwap(s) {
    let n = s.length;
    let arr = s.split("");
    let lastOccurrence = new Array(10).fill(-1);
    for (let i = 0; i < n; i++) {
      let num = parseInt(arr[i]);
      lastOccurrence[num] = i;
    }
    for (let i = 0; i < n; i++) {
      let currentDigit = parseInt(arr[i]);
      for (let d = 9; d > currentDigit; d--) {
        if (lastOccurrence[d] > i) {
          let j = lastOccurrence[d];
          [arr[i], arr[j]] = [arr[j], arr[i]];
          return arr.join("");
        }
      }
    }
    return s;
  }
}
