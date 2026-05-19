class Solution {
  minSteps(arr, start, end) {
    // If already at the target
    if (start === end) return 0;

    const MOD = 1000;
    // Distance array: -1 means unvisited
    const dist = new Array(MOD).fill(-1);
    // Remove duplicates from arr to avoid redundant checks
    const factors = [...new Set(arr)];

    // BFS queue (managing with a front pointer for O(1) dequeue)
    const queue = [start];
    dist[start] = 0;
    let front = 0;

    while (front < queue.length) {
      const current = queue[front++];
      const nextDist = dist[current] + 1;

      for (const factor of factors) {
        const next = (current * factor) % MOD;
        if (dist[next] === -1) {
          // Early exit as soon as we reach the end
          if (next === end) return nextDist;
          dist[next] = nextDist;
          queue.push(next);
        }
      }
    }

    // Target not reachable
    return -1;
  }
}
