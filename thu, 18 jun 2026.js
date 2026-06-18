class Solution {
  findCoverage(mat) {
    const n = mat.length;
    const m = mat[0].length;
    let totalCoverage = 0;

    // Left to right: check if there is any 1 to the left
    for (let i = 0; i < n; i++) {
      let hasOne = false;
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === 1) {
          hasOne = true;
        } else if (hasOne) {
          totalCoverage++;
        }
      }
    }

    // Right to left: check if there is any 1 to the right
    for (let i = 0; i < n; i++) {
      let hasOne = false;
      for (let j = m - 1; j >= 0; j--) {
        if (mat[i][j] === 1) {
          hasOne = true;
        } else if (hasOne) {
          totalCoverage++;
        }
      }
    }

    // Top to bottom: check if there is any 1 above
    for (let j = 0; j < m; j++) {
      let hasOne = false;
      for (let i = 0; i < n; i++) {
        if (mat[i][j] === 1) {
          hasOne = true;
        } else if (hasOne) {
          totalCoverage++;
        }
      }
    }

    // Bottom to top: check if there is any 1 below
    for (let j = 0; j < m; j++) {
      let hasOne = false;
      for (let i = n - 1; i >= 0; i--) {
        if (mat[i][j] === 1) {
          hasOne = true;
        } else if (hasOne) {
          totalCoverage++;
        }
      }
    }

    return totalCoverage;
  }
}
