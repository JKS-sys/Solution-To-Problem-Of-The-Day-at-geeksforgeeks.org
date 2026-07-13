class Solution {
  minOperations(b) {
    const MOD = 1000000007;
    const n = b.length;
    // Convert to 0-indexed permutation
    const arr = b.map((x) => x - 1);
    const visited = new Array(n).fill(false);
    const lengths = [];

    // Find all cycle lengths
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        let count = 0;
        let j = i;
        while (!visited[j]) {
          visited[j] = true;
          j = arr[j];
          count++;
        }
        lengths.push(count);
      }
    }

    // Smallest Prime Factor (SPF) sieve up to n
    const spf = new Array(n + 1);
    for (let i = 0; i <= n; i++) spf[i] = i;
    for (let i = 2; i * i <= n; i++) {
      if (spf[i] === i) {
        for (let j = i * i; j <= n; j += i) {
          if (spf[j] === j) spf[j] = i;
        }
      }
    }

    // Maximum exponent for each prime
    const maxExp = new Array(n + 1).fill(0);
    for (let len of lengths) {
      while (len > 1) {
        const p = spf[len];
        let exp = 0;
        while (len % p === 0) {
          len = Math.floor(len / p);
          exp++;
        }
        if (exp > maxExp[p]) {
          maxExp[p] = exp;
        }
      }
    }

    // Compute LCM modulo MOD
    let ans = 1;
    for (let p = 2; p <= n; p++) {
      if (maxExp[p] > 0) {
        // Compute p^maxExp[p] % MOD safely
        let power = 1;
        for (let k = 0; k < maxExp[p]; k++) {
          power = (power * p) % MOD;
        }
        ans = (ans * power) % MOD;
      }
    }

    return ans;
  }
}
