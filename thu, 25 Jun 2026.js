class Solution {
  /**
   * @param {number} n
   * @returns {number[]}
   */
  increasingNumbers(n) {
    // Single digit numbers: 0 is included
    if (n === 1) {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    // No such numbers possible if n > 9 (only digits 1-9 can be used)
    if (n > 9) {
      return [];
    }

    const result = [];

    const backtrack = (start, currentNumber, digitsLeft) => {
      if (digitsLeft === 0) {
        result.push(currentNumber);
        return;
      }
      // We need to pick `digitsLeft` more digits, so the last possible start is 10 - digitsLeft
      const end = 10 - digitsLeft;
      for (let i = start; i <= end; i++) {
        backtrack(i + 1, currentNumber * 10 + i, digitsLeft - 1);
      }
    };

    // First digit can be from 1 to 9 (0 is not allowed for n >= 2)
    backtrack(1, 0, n);
    return result;
  }
}
