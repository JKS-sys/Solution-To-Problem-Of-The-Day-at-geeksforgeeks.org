"use strict";

class Solution {
  // Helper: modular exponentiation with BigInt
  modPow(a, e, mod) {
    let res = 1n;
    while (e > 0n) {
      if (e & 1n) res = (res * a) % mod;
      a = (a * a) % mod;
      e >>= 1n;
    }
    return res;
  }

  computeValue(n) {
    const MOD = 1000000007n;
    const nBig = BigInt(n);
    let ans = 1n;

    // C(2n, n) = product_{i=1}^{n} (n + i) / i
    for (let i = 1n; i <= nBig; i++) {
      ans = (ans * (nBig + i)) % MOD;
      // Multiply by modular inverse of i
      ans = (ans * this.modPow(i, MOD - 2n, MOD)) % MOD;
    }

    return Number(ans);
  }
}
