// Sat, 07 Jun 2025,

// Longest Span in two Binary Arrays
// Difficulty: MediumAccuracy: 48.22%Submissions: 13K+Points: 4
// Given two binary arrays, a1[] and a2[]. Find the length of longest common span (i, j) where j>= i such that a1[i] + a1[i+1] + .... + a1[j] =  a2[i] + a2[i+1] + ... + a2[j].

// Examples:

// Input: a1[] = [0, 1, 0, 0, 0, 0], a2[] = [1, 0, 1, 0, 0, 1]
// Output: 4
// Explanation: The longest span with same sum is from index 1 to 4 following zero based indexing.
// Input: a1[] = [0, 1, 0, 1, 1, 1, 1], a2[] = [1, 1, 1, 1, 1, 0, 1]
// Output: 6
// Explanation: The longest span with same sum is from index 1 to 6 following zero based indexing.
// Constraints:
// 1 <= a1.size() = a2.size() <= 106
// 0 <= a1[i], a2[i] <= 1

class Solution {
  longestCommonSum(a1, a2) {
    const n = a1.length;
    let prefix1 = 0;
    let prefix2 = 0;
    let maxLen = 0;
    const diffMap = new Map();
    diffMap.set(0, -1);

    for (let i = 0; i < n; i++) {
      prefix1 += a1[i];
      prefix2 += a2[i];
      const currDiff = prefix1 - prefix2;

      if (diffMap.has(currDiff)) {
        const prevIndex = diffMap.get(currDiff);
        maxLen = Math.max(maxLen, i - prevIndex);
      } else {
        diffMap.set(currDiff, i);
      }
    }

    return maxLen;
  }
}
