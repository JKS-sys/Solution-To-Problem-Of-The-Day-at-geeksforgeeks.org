// Tue, 27 Jan 2026,

// POTD was https://www.geeksforgeeks.org/problems/word-search/1

// Word Search
// Difficulty: MediumAccuracy: 32.69%Submissions: 86K+Points: 4Average Time: 20m

// You are given a matrix mat[][] of size n*m containing english alphabets and a string word. Check if the word exists on the mat[][] or not. The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used more than once.

// Examples :

// Input: mat[][] = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: true
// Explanation: Word "GEEK" can be found in the given grid as follows.

// Input: mat[][] = [['T', 'E', 'U'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"
// Output: false
// Explanation: Word "GEEK" cannot be found in the given grid.

// Input: mat[][] = [['A', 'B', 'A'], ['B', 'A', 'B']], word = "AB"
// Output: true
// Explanation: There are multiple ways to construct the word "AB".

// Constraints:
// 1 ≤ n, m ≤ 6
// 1 ≤ word.size() ≤ 15
// mat and word consists of only lowercase and uppercase English letters.
// Expected Complexities
// Time Complexity: O(n * m * 3^k)
// Auxiliary Space: O(k)

class Solution {
  isWordExist(mat, word) {
    const n = mat.length;
    const m = mat[0].length;

    // Helper function for DFS

    const dfs = (i, j, index) => {
      // If we've matched all characters

      if (index === word.length) {
        return true;
      }

      // Check boundaries and character match

      if (i < 0 || i >= n || j < 0 || j >= m || mat[i][j] !== word[index]) {
        return false;
      }

      // Temporarily mark cell as visited

      const temp = mat[i][j];
      mat[i][j] = "#";

      // Check all 4 directions

      const found =
        dfs(i + 1, j, index + 1) ||
        dfs(i - 1, j, index + 1) ||
        dfs(i, j + 1, index + 1) ||
        dfs(i, j - 1, index + 1);

      // Restore the cell value (backtrack)

      mat[i][j] = temp;

      return found;
    };

    // Try starting from each cell

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === word[0]) {
          if (dfs(i, j, 0)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
