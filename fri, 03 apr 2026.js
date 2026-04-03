class Solution {
  diagView(mat) {
    const n = mat.length;
    const result = [];

    // sum = row + col, ranges from 0 to 2*(n-1)
    for (let sum = 0; sum <= 2 * (n - 1); sum++) {
      // first row of this diagonal
      let startRow = Math.max(0, sum - (n - 1));
      // last row of this diagonal
      let endRow = Math.min(n - 1, sum);
      for (let row = startRow; row <= endRow; row++) {
        const col = sum - row;
        result.push(mat[row][col]);
      }
    }

    return result;
  }
}
