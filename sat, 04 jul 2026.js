class Solution {
  countSubstring(s) {
    const n = s.length;
    if (n === 0) return 0;

    // Prefix sums: +1 for '1', -1 for '0'
    const P = new Array(n + 1);
    P[0] = 0;
    for (let i = 1; i <= n; i++) {
      P[i] = P[i - 1] + (s[i - 1] === "1" ? 1 : -1);
    }

    // Frequency array for prefix sums, offset by n to handle negative indices
    const offset = n;
    const freq = new Array(2 * n + 1).fill(0);
    freq[P[0] + offset] = 1;

    let ans = 0;
    // For j = 1, we count how many previous prefix sums are < P[1]
    let less = P[1] > 0 ? 1 : 0;
    ans += less;
    freq[P[1] + offset]++;

    // For j = 2 to n, compute 'less' in O(1) using the recurrence
    for (let j = 2; j <= n; j++) {
      if (P[j] === P[j - 1] + 1) {
        // Prefix sum increased by 1
        less = less + freq[P[j - 1] + offset];
      } else {
        // Prefix sum decreased by 1
        less = less - freq[P[j - 1] - 1 + offset];
      }
      ans += less;
      freq[P[j] + offset]++;
    }

    return ans;
  }
}
