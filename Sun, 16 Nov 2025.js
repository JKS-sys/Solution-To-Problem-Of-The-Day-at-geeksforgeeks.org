Sun, 16 Nov 2025,

Longest Common Increasing Subsequence
Difficulty: Medium Accuracy: 35.32% Submissions: 11K+ Points: 4

Given two arrays, a[] and b[], find the length of the longest common increasing subsequence(LCIS).

Note:  LCIS refers to a subsequence that is present in both arrays and strictly increases.

Examples:

Input: a[] = [3, 4, 9, 1], b[] = [5, 3, 8, 9, 10, 2, 1]
Output: 2
Explanation: The longest increasing subsequence that is common is [3, 9] and its length is 2.
Input: a[] = [1, 1, 4, 3], b[] = [1, 1, 3, 4]
Output: 2
Explanation: There are two common subsequences [1, 4] and [1, 3] both of length 2.

Constraints:
1 ≤ a.size(), b.size() ≤ 10^3
1 ≤ a[i], b[i] ≤ 10^4

Expected Complexities
Time Complexity: O(n * m)
Auxiliary Space: O(n)