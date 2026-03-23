class Solution {
    /**
     * @param {number} V
     * @param {number[][]} edges
     * @returns {number}
     */
    longestCycle(V, edges) {
        // outgoing edge for each node, -1 if none
        const out = new Array(V).fill(-1);
        const indeg = new Array(V).fill(0);

        // build graph and indegrees
        for (const [u, v] of edges) {
            out[u] = v;
            indeg[v]++;
        }

        // topological removal of nodes not in cycles
        const queue = [];
        for (let i = 0; i < V; i++) {
            if (indeg[i] === 0) queue.push(i);
        }
        let idx = 0;
        while (idx < queue.length) {
            const u = queue[idx++];
            const v = out[u];
            if (v !== -1) {
                indeg[v]--;
                if (indeg[v] === 0) queue.push(v);
            }
        }

        // remaining nodes with indeg > 0 are part of cycles
        const visited = new Array(V).fill(false);
        let maxLen = -1;

        for (let i = 0; i < V; i++) {
            if (indeg[i] > 0 && !visited[i]) {
                // traverse the cycle starting from i
                let len = 0;
                let cur = i;
                while (!visited[cur]) {
                    visited[cur] = true;
                    cur = out[cur];
                    len++;
                }
                maxLen = Math.max(maxLen, len);
            }
        }

        return maxLen;
    }
}