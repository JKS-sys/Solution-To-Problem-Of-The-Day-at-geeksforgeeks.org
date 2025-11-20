// Thu, 20 Nov 2025,

// Make Strings Equal
// Difficulty: Medium Accuracy: 58.77% Submissions: 861+ Points: 4

// Given two strings s and t, consisting of lowercase English letters. You are also given, a 2D array transform[][] of size n*2, where each entry [x, y] means that you are allowed to transform character x into character y and an array cost[], where cost[i] is the cost of transforming transform[i][0] into transform[i][1]. You can apply any transformation any number of times on either string.

// Your task is to find the minimum total cost required to make the strings identical. If it is impossible to make the two strings identical using the available transformations, return -1.

// Examples:

// Input: s = "abcc", t = "bccc", transform[][] = [['a', 'b'], ['b', 'c'], ['c', 'a']], cost[] = [2, 1, 4]
// Output: 3
// Explanation: We can convert both strings into "bccc" with a cost of 3 using these operations:
// transform at Position 0 in s: a -> b (cost 2)
// transform at Position 1 in s: b -> c (cost 1)
// Other characters already match.
// Input: s = "az", t = "dc", transform[][] = [['a', 'b'], ['b', 'c'], ['c', 'd'], ['a', 'd'], ['z', 'c']], cost[] = [5, 3, 2, 50, 10]
// Output: 20
// Explanation: We can convert both strings into "dc" with a cost of 20 using these operations:
// transform at Position 0 in s: a -> d by path a->b->c->d (cost 5+3+2=10)
// transform at Position 1 in s: z -> c (cost 10)
// Input: s = "xyz", t = "xzy", transform[][] = [['x', 'y'], ['x', 'z']], cost[] = [3, 3]
// Output: -1
// Explanation: It is not possible to make the two strings equal.

// Constraints:
// 1 ≤ s.size() = t.size() ≤ 10^5
// 1 ≤ transform.size() = cost.size() ≤ 500
// 'a' ≤ transform[i][0], transform[i][1] ≤ 'z'
// 1 ≤ cost[i] ≤ 500

// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  minCost(s, t, transform, cost) {
    const n = s.length;
    const k = transform.length;
    const dist = Array.from({ length: 26 }, () =>
      Array(26).fill(Number.MAX_SAFE_INTEGER)
    );
    for (let i = 0; i < 26; i++) {
      dist[i][i] = 0;
    }
    for (let i = 0; i < k; i++) {
      const fromChar = transform[i][0];
      const toChar = transform[i][1];
      const from = fromChar.charCodeAt(0) - "a".charCodeAt(0);
      const to = toChar.charCodeAt(0) - "a".charCodeAt(0);
      dist[from][to] = Math.min(dist[from][to], cost[i]);
    }
    for (let k = 0; k < 26; k++) {
      for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
          if (
            dist[i][k] < Number.MAX_SAFE_INTEGER &&
            dist[k][j] < Number.MAX_SAFE_INTEGER
          ) {
            dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
          }
        }
      }
    }
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
      const sIdx = s[i].charCodeAt(0) - "a".charCodeAt(0);
      const tIdx = t[i].charCodeAt(0) - "a".charCodeAt(0);
      if (sIdx === tIdx) {
        continue;
      }
      let minCost = Number.MAX_SAFE_INTEGER;
      for (let target = 0; target < 26; target++) {
        if (
          dist[sIdx][target] < Number.MAX_SAFE_INTEGER &&
          dist[tIdx][target] < Number.MAX_SAFE_INTEGER
        ) {
          minCost = Math.min(minCost, dist[sIdx][target] + dist[tIdx][target]);
        }
      }
      if (minCost === Number.MAX_SAFE_INTEGER) {
        return -1;
      }
      totalCost += minCost;
    }
    return totalCost;
  }
}
