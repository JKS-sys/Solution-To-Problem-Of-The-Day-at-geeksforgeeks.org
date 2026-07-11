class Solution {
    longestPath(mat, xs, ys, xd, yd) {
        const n = mat.length;
        const m = mat[0].length;
        
        // If source or destination is blocked, return -1
        if (mat[xs][ys] === 0 || mat[xd][yd] === 0) return -1;
        
        // Visited array to avoid revisiting cells
        const visited = Array.from({ length: n }, () => new Array(m).fill(false));
        let maxLen = -1;
        
        // Direction vectors: up, down, left, right
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        const dfs = (x, y, len) => {
            // Reached destination: update maximum path length (number of steps)
            if (x === xd && y === yd) {
                maxLen = Math.max(maxLen, len);
                return;
            }
            
            visited[x][y] = true;
            
            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
                    mat[nx][ny] === 1 && !visited[nx][ny]) {
                    dfs(nx, ny, len + 1);
                }
            }
            
            visited[x][y] = false; // backtrack
        };
        
        dfs(xs, ys, 0);
        return maxLen;
    }
}