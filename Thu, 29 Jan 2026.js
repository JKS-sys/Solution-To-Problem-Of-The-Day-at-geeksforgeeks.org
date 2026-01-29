// Thu, 29 Jan 2026,

// POTD question https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1

// Stream First Non-repeating
// Difficulty: MediumAccuracy: 31.65%Submissions: 234K+Points: 4Average Time: 15m

// Given a string s consisting of only lowercase alphabets, for each index i in the string (0 ≤ i < n), find the first non-repeating character in the prefix s[0..i]. If no such character exists, use '#'.

// Examples:

// Input: s = "aabc"
// Output: a#bb
// Explanation:
// At i=0 ("a"): First non-repeating character is 'a'.
// At i=1 ("aa"): No non-repeating character, so '#'.
// At i=2 ("aab"): First non-repeating character is 'b'.
// At i=3 ("aabc"): Non-repeating characters are 'b' and 'c'; 'b' appeared first, so 'b'.

// Input: s = "bb"
// Output: "b#"
// Explanation:
// At i=0 ("b"): First non-repeating character is 'b'.
// At i=1 ("bb"): No non-repeating character, so '#'.

// Constraints:
// 1 ≤ s.size() ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  firstNonRepeating(s) {
    // Frequency count for each character
    const freq = new Array(26).fill(0);

    // Store indices of characters that might be first non-repeating
    // We'll use a queue structure but implement with an array and pointers
    const queue = new Array(26).fill(-1);
    let head = 0,
      tail = 0;

    let result = "";

    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i) - 97; // 'a' -> 0

      // Update frequency
      freq[charCode]++;

      // If this is the first time seeing this character, add to queue
      if (freq[charCode] === 1) {
        queue[tail++] = charCode;
      }

      // Remove from front of queue if the character is now repeating
      while (head < tail && freq[queue[head]] > 1) {
        head++;
      }

      // Get result for current prefix
      if (head < tail) {
        result += String.fromCharCode(queue[head] + 97);
      } else {
        result += "#";
      }
    }

    return result;
  }
}
