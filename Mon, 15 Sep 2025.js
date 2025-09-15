// Mon, 15 Sep 2025,

// String stack
// Difficulty: MediumAccuracy: 35.83%Submissions: 3K+Points: 4
// You are given two strings pat and tar consisting of lowercase English characters. You can construct a new string s by performing any one of the following operation for each character in pat:

// Append the character pat[i] to the string s.
// Delete the last character of s (if s is empty do nothing).
// After performing operations on every character of pat exactly once, your goal is to determine if it is possible to make the string s equal to string tar.

// Examples:

// Input: pat = "geuaek", tar = "geek"
// Output: true
// Explanation: Append the first three characters of pat to s, resulting in s = "geu". Delete the last character for 'a', leaving s = "ge". Then, append the last two characters 'e' and 'k' from pat to s, resulting in s = "geek", which matches tar.
// Input: pat = "agiffghd", tar = "gfg"
// Output: true
// Explanation: Skip the first character 'a' in pat. Append 'g' and 'i' to s, resulting in s = "gi". Delete the last character for 'f', leaving s = "g". Append 'f', 'g', and 'h' to s, resulting in s = "gfgh". Finally, delete the last character for 'd', leaving s = "gfg", which matches tar.
// Input: pat = "ufahs", tar = "aus"
// Output: false
// Explanation: It is impossible to construct the string tar from pat with the given operations.
// Constraints:
// 1 ≤ pat.size(), tar.size() ≤ 10^5
// Expected Complexities
// Time Complexity: O(n + m)
// Auxiliary Space: O(1)

class Solution {
  stringStack(pat, tar) {
    const n = pat.length;
    const m = tar.length;
    if (m === 0) return true;

    const even_lists = new Array(26);
    const odd_lists = new Array(26);
    for (let i = 0; i < 26; i++) {
      even_lists[i] = [];
      odd_lists[i] = [];
    }

    for (let i = 0; i < n; i++) {
      const c = pat[i];
      const idx = c.charCodeAt(0) - "a".charCodeAt(0);
      if (i % 2 === 0) {
        even_lists[idx].push(i);
      } else {
        odd_lists[idx].push(i);
      }
    }

    const firstChar = tar[0];
    const idx0 = firstChar.charCodeAt(0) - "a".charCodeAt(0);
    if (even_lists[idx0].length === 0 && odd_lists[idx0].length === 0) {
      return false;
    }
    let even0 = even_lists[idx0].length > 0 ? even_lists[idx0][0] : null;
    let odd0 = odd_lists[idx0].length > 0 ? odd_lists[idx0][0] : null;

    for (let j = 1; j < m; j++) {
      const c = tar[j];
      const idx = c.charCodeAt(0) - "a".charCodeAt(0);
      let next_even = null;
      let next_odd = null;

      if (even0 !== null) {
        const list_odd = odd_lists[idx];
        let left = 0;
        let right = list_odd.length;
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (list_odd[mid] <= even0) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        if (left < list_odd.length) {
          next_odd = list_odd[left];
        }
      }

      if (odd0 !== null) {
        const list_even = even_lists[idx];
        let left = 0;
        let right = list_even.length;
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (list_even[mid] <= odd0) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        if (left < list_even.length) {
          next_even = list_even[left];
        }
      }

      even0 = next_even;
      odd0 = next_odd;
      if (even0 === null && odd0 === null) {
        return false;
      }
    }

    if (even0 !== null && (n - even0) % 2 === 1) {
      return true;
    }
    if (odd0 !== null && (n - odd0) % 2 === 1) {
      return true;
    }
    return false;
  }
}
