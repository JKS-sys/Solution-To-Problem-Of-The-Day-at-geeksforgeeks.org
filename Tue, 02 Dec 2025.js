// Tue, 02 Dec 2025,

// Maximise String Score
// Difficulty: Medium Accuracy: 49.59% Submissions: 647+ Points: 4
// You are given a string s, and a list of jumps[][] of size n, where each jumps[i] = [s1, s2] denotes that you are allowed to jump from character s1 to s2 in the forward direction.
// Additionally, you are allowed to jump forward from a character to any other occurrence of the same character within the string.

// You start at index 0 of the string. After every valid jump from index i to index j, where s[i] = s1 and s[j] = s2, you earn a score equal to the sum of ASCII values of all characters between the jump except for the characters equals s2, i.e.

// score(i, j) = sum(ascii(s[k]) for i ≤ k < j and s[k] != s[j]).
// Determine the maximum score that can be achieved by performing a sequence of valid jumps starting from index 0.

// Examples:

// Input: s = "forgfg", jumps[][] = [['f', 'r'], ['r', 'g']]
// Output: 429
// Explanation: We can jump from 'f' to 'r' at index 2, this will gives a score equals to sum of ASCII value of 'f', 'o' i.e. 213.
// Now we can jump from 'r' to 'g' at index 5, this will gives a score equals to sum of ASCII value of 'r', 'f' i.e. 216.
// Hence maximum total score obtain will be 429.
// Input: s = "abcda", jumps[][] = [[b, d]]
// Output: 297
// Explanation: We can jump from 'a' to 'a'(as both are same character) at index 4, this will gives a score equals to sum of ASCII value of 'b', 'c', 'd' i.e. 297.
// Hence maximum total score obtain will be 297.
// Constraints:
// 1 ≤ |s| ≤ 2 * 10^5
// 1 ≤ jumps.size() ≤ 676
// There are atleast two distinct characters in s.
// Expected Complexities
// Time Complexity: O(26 * n)
// Auxiliary Space: O(26 * n)

class Solution {
  maxScore(s, jumps) {
    const n = s.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + s.charCodeAt(i);
    }
    const charPrefix = Array.from({ length: 26 }, () =>
      new Array(n + 1).fill(0)
    );
    for (let i = 0; i < n; i++) {
      const c = s.charCodeAt(i) - 97;
      for (let ch = 0; ch < 26; ch++) {
        charPrefix[ch][i + 1] = charPrefix[ch][i];
      }
      charPrefix[c][i + 1] += s.charCodeAt(i);
    }
    const canJump = Array.from({ length: 26 }, () => new Array(26).fill(false));
    for (let i = 0; i < 26; i++) {
      canJump[i][i] = true; // same character jumps
    }
    for (const [from, to] of jumps) {
      const src = from.charCodeAt(0) - 97;
      const dest = to.charCodeAt(0) - 97;
      canJump[src][dest] = true;
    }
    const best = Array.from({ length: 26 }, () =>
      new Array(26).fill(-Infinity)
    );
    const dp = new Array(n).fill(-Infinity);
    dp[0] = 0;
    const firstChar = s.charCodeAt(0) - 97;
    for (let dest = 0; dest < 26; dest++) {
      best[firstChar][dest] = 0 - prefix[0] + charPrefix[dest][0]; // 0 - 0 + 0 = 0
    }
    for (let i = 1; i < n; i++) {
      const currChar = s.charCodeAt(i) - 97;
      let maxVal = -Infinity;
      for (let src = 0; src < 26; src++) {
        if (canJump[src][currChar] && best[src][currChar] !== -Infinity) {
          maxVal = Math.max(maxVal, best[src][currChar]);
        }
      }
      if (maxVal !== -Infinity) {
        dp[i] = maxVal + (prefix[i] - charPrefix[currChar][i]);
      }
      if (dp[i] !== -Infinity) {
        for (let dest = 0; dest < 26; dest++) {
          const val = dp[i] - prefix[i] + charPrefix[dest][i];
          if (val > best[currChar][dest]) {
            best[currChar][dest] = val;
          }
        }
      }
    }
    return Math.max(0, ...dp);
  }
}
