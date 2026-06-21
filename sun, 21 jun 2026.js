class Solution {
  /**
   * @param {string} s
   * @returns {string}
   */
  chooseSwap(s) {
    const n = s.length;
    // first[c] stores the first occurrence index of character c in s
    const first = new Array(26).fill(-1);
    for (let i = 0; i < n; i++) {
      const idx = s.charCodeAt(i) - 97; // 'a' is 97
      if (first[idx] === -1) {
        first[idx] = i;
      }
    }

    for (let i = 0; i < n; i++) {
      const curChar = s[i];
      const curCode = curChar.charCodeAt(0) - 97;

      // look for the smallest character that is:
      // - smaller than curChar
      // - present in the string
      // - its first occurrence is after index i
      for (let c = 0; c < curCode; c++) {
        if (first[c] !== -1 && first[c] > i) {
          const swapChar = String.fromCharCode(c + 97);
          // perform the global swap
          const arr = s.split("");
          for (let j = 0; j < n; j++) {
            if (arr[j] === curChar) {
              arr[j] = swapChar;
            } else if (arr[j] === swapChar) {
              arr[j] = curChar;
            }
          }
          return arr.join("");
        }
      }
    }
    // no swap improves the string
    return s;
  }
}
