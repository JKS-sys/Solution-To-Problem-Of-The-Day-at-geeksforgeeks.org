// Thu, 10 Jul 2025,

// Find the longest string
// Difficulty: MediumAccuracy: 56.04%Submissions: 21K+Points: 4
// Given an array of strings arr[]. Find the longest string in arr[] such that every prefix of it is also present in the array arr[].

// Note: If multiple strings have the same maximum length, return the lexicographically smallest one.

// Examples:

// Input: arr[] = ["p", "pr", "pro", "probl", "problem", "pros", "process", "processor"]
// Output: pros
// Explanation: "pros" is the longest word with all prefixes ("p", "pr", "pro", "pros") present in the array arr[].
// Input: arr[] = ["ab", "a", "abc", "abd"]
// Output: abc
// Explanation: Both "abc" and "abd" has all the prefixes in arr[]. Since, "abc" is lexicographically smaller than "abd", so the output is "abc".
// Constraints:
// 1 ≤ arr.length() ≤ 103
// 1 ≤ arr[i].length ≤ 103
// Expected Complexities
// Time Complexity: O(n * max(arr[i].size()) )
// Auxiliary Space: O(n * max(arr[i].size()) )

/**
 * @param {string[]} arr
 * @returns {string}
 */

class Solution {
  longestString(arr) {
    let root = { children: {}, isEnd: false };

    for (let word of arr) {
      let node = root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = { children: {}, isEnd: false };
        }
        node = node.children[char];
      }
      node.isEnd = true;
    }

    let best = "";
    for (let word of arr) {
      let node = root;
      let valid = true;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          valid = false;
          break;
        }
        node = node.children[char];
        if (i < word.length - 1 && !node.isEnd) {
          valid = false;
          break;
        }
      }
      if (valid) {
        if (word.length > best.length) {
          best = word;
        } else if (word.length === best.length) {
          if (word < best) {
            best = word;
          }
        }
      }
    }

    return best;
  }
}
