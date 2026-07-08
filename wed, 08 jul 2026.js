
class Solution {
    countCoordinates(mat) {
        const n = mat.length;
        const m = mat[0].length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        // Reachability from Station P (top and left boundaries)
        const canReachP = Array.from({ length: n }, () => Array(m).fill(false));
        const queueP = [];
        // Top row
        for (let j = 0; j < m; j++) {
            canReachP[0][j] = true;
            queueP.push([0, j]);
        }
        // Left column (skip (0,0) already added)
        for (let i = 1; i < n; i++) {
            canReachP[i][0] = true;
            queueP.push([i, 0]);
        }

        let headP = 0;
        while (headP < queueP.length) {
            const [r, c] = queueP[headP++];
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < m &&
                    !canReachP[nr][nc] && mat[nr][nc] >= mat[r][c]) {
                    canReachP[nr][nc] = true;
                    queueP.push([nr, nc]);
                }
            }
        }

        // Reachability from Station Q (bottom and right boundaries)
        const canReachQ = Array.from({ length: n }, () => Array(m).fill(false));
        const queueQ = [];
        // Bottom row
        for (let j = 0; j < m; j++) {
            canReachQ[n - 1][j] = true;
            queueQ.push([n - 1, j]);
        }
        // Right column (skip (n-1,m-1) already added)
        for (let i = 0; i < n - 1; i++) {
            canReachQ[i][m - 1] = true;
            queueQ.push([i, m - 1]);
        }

        let headQ = 0;
        while (headQ < queueQ.length) {
            const [r, c] = queueQ[headQ++];
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < m &&
                    !canReachQ[nr][nc] && mat[nr][nc] >= mat[r][c]) {
                    canReachQ[nr][nc] = true;
                    queueQ.push([nr, nc]);
                }
            }
        }

        // Count cells that can reach both stations
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (canReachP[i][j] && canReachQ[i][j]) {
                    count++;
                }
            }
        }
        return count;
    }
}