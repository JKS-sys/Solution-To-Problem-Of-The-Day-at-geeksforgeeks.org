class Solution {
  /**
   * @param {string} s
   * @return {string[]}
   */
  validParenthesis(s) {
    // Helper to check if a string has valid parentheses
    const isValid = (str) => {
      let bal = 0;
      for (let ch of str) {
        if (ch === "(") bal++;
        else if (ch === ")") bal--;
        if (bal < 0) return false;
      }
      return bal === 0;
    };

    // BFS queue and visited set
    let queue = [s];
    let visited = new Set([s]);
    let resultSet = new Set();
    let found = false;

    while (queue.length > 0) {
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const cur = queue.shift();

        // Check if current string is valid
        if (isValid(cur)) {
          resultSet.add(cur);
          found = true;
        }

        // If we already found valid strings at this level, do not generate next level
        if (found) continue;

        // Generate all strings by removing one parenthesis
        for (let j = 0; j < cur.length; j++) {
          const ch = cur[j];
          if (ch === "(" || ch === ")") {
            const next = cur.slice(0, j) + cur.slice(j + 1);
            if (!visited.has(next)) {
              visited.add(next);
              queue.push(next);
            }
          }
        }
      }
      // If any valid string was found in this level, stop BFS
      if (found) break;
    }

    // Convert set to sorted array
    const result = Array.from(resultSet);
    result.sort();
    return result;
  }
}
