/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
class Solution {
  getLastDigit(a, b) {
    // If exponent is "0", a^0 = 1 for any a (including 0^0, as per typical problem assumption)
    if (b === "0") return 1;

    // Get the last digit of a
    const base = parseInt(a[a.length - 1]);

    // If base is 0, last digit is always 0 for any positive exponent
    if (base === 0) return 0;

    // Digits with period 1
    if (base === 1 || base === 5 || base === 6) return base;

    // Determine the cycle period
    // base 2,3,7,8 have period 4; base 4,9 have period 2
    let period;
    if (base === 4 || base === 9) {
      period = 2;
    } else {
      period = 4; // base is 2, 3, 7, or 8
    }

    // Compute b % period using the large string b
    let rem = 0;
    for (let i = 0; i < b.length; i++) {
      rem = (rem * 10 + parseInt(b[i])) % period;
    }

    // If remainder is 0, we use the full period as exponent (since b > 0)
    if (rem === 0) {
      rem = period;
    }

    // Use precomputed cycles for the last digit
    // For period 4: 2->[2,4,8,6], 3->[3,9,7,1], 7->[7,9,3,1], 8->[8,4,2,6]
    // For period 2: 4->[4,6], 9->[9,1]
    const cycles = {
      2: [2, 4, 8, 6],
      3: [3, 9, 7, 1],
      4: [4, 6],
      7: [7, 9, 3, 1],
      8: [8, 4, 2, 6],
      9: [9, 1],
    };

    // rem is 1-indexed, so index = rem - 1
    return cycles[base][rem - 1];
  }
}
