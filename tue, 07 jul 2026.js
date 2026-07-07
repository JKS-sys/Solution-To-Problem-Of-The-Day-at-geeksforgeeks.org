/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} arr
 * @returns {number}
 */
class Solution {
    largestArea(n, m, arr) {
        // If there are no blocked cells, the entire grid is unblocked.
        if (arr.length === 0) {
            return n * m;
        }

        // Extract blocked rows and columns.
        const blockedRows = arr.map(cell => cell[0]);
        const blockedCols = arr.map(cell => cell[1]);

        // Sort them to find gaps easily.
        blockedRows.sort((a, b) => a - b);
        blockedCols.sort((a, b) => a - b);

        // Compute maximum consecutive unblocked rows.
        let maxRowGap = blockedRows[0] - 1; // gap before the first blocked row
        for (let i = 1; i < blockedRows.length; i++) {
            const gap = blockedRows[i] - blockedRows[i - 1] - 1;
            if (gap > maxRowGap) maxRowGap = gap;
        }
        const lastRowGap = n - blockedRows[blockedRows.length - 1];
        if (lastRowGap > maxRowGap) maxRowGap = lastRowGap;

        // Compute maximum consecutive unblocked columns.
        let maxColGap = blockedCols[0] - 1; // gap before the first blocked column
        for (let i = 1; i < blockedCols.length; i++) {
            const gap = blockedCols[i] - blockedCols[i - 1] - 1;
            if (gap > maxColGap) maxColGap = gap;
        }
        const lastColGap = m - blockedCols[blockedCols.length - 1];
        if (lastColGap > maxColGap) maxColGap = lastColGap;

        return maxRowGap * maxColGap;
    }
}