class Solution {
  getCount(n, d) {
    // Since constraints say d ≥ 1, this check is for safety.
    if (d <= 0) return n;

    // Smallest candidate: numbers ≤ d cannot satisfy because
    // x - sumDigits(x) ≤ x ≤ d < d + (positive sumDigits)
    let start = d + 1;
    if (start > n) return 0;

    // The maximum possible digit sum for numbers ≤ 1e9 is 81 (for 999,999,999).
    // Therefore x - sumDigits(x) ≥ x - 81.
    // Setting x = d + 81 guarantees the condition holds.
    let end = Math.min(n, d + 81);

    // Helper to compute sum of digits
    const sumDigits = (num) => {
      let s = 0;
      while (num > 0) {
        s += num % 10;
        num = Math.floor(num / 10);
      }
      return s;
    };

    // Scan the small interval [start, end] – at most 81 numbers.
    // Since the condition is monotonic, the first hit is the smallest valid number.
    for (let x = start; x <= end; x++) {
      if (x - sumDigits(x) >= d) {
        return n - x + 1;
      }
    }

    // No number ≤ n satisfies the condition
    return 0;
  }
}
