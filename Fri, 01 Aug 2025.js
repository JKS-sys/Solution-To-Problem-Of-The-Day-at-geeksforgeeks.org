// Fri, 01 Aug 2025,

// Balancing Consonants and Vowels Ratio
// Difficulty: MediumAccuracy: 63.95%Submissions: 864+Points: 4
// You are given an array of strings arr[], where each arr[i] consists of lowercase english alphabets. You need to find the number of balanced strings in arr[] which can be formed by concatinating one or more contiguous strings of arr[].
// A balanced string contains the equal number of vowels and consonants.

// Examples:

// Input: arr[] = ["aeio", "aa", "bc", "ot", "cdbd"]
// Output: 4
// Explanation: arr[0..4], arr[1..2], arr[1..3], arr[3..3] are the balanced substrings with equal consonants and vowels.
// Input: arr[] = ["ab", "be"]
// Output: 3
// Explanation: arr[0..0], arr[0..1], arr[1..1] are the balanced substrings with equal consonants and vowels.
// Input: arr[] = ["tz", "gfg", "ae"]
// Output: 0
// Explanation: There is no such balanced substring present in arr[] with equal consonants and vowels.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i].size() ≤ 105
// Total number of lowercase english characters in arr[] is lesser than 105.
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  countBalanced(arr) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let n = arr.length;
    let values = new Array(n);

    for (let i = 0; i < n; i++) {
      let s = arr[i];
      let countV = 0;
      for (let char of s) {
        if (vowels.has(char)) {
          countV++;
        }
      }
      values[i] = 2 * countV - s.length;
    }

    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + values[i];
    }

    let map = new Map();
    map.set(0, 1);
    let count = 0;
    for (let i = 1; i <= n; i++) {
      let p = prefix[i];
      if (map.has(p)) {
        let freq = map.get(p);
        count += freq;
        map.set(p, freq + 1);
      } else {
        map.set(p, 1);
      }
    }

    return count;
  }
}
