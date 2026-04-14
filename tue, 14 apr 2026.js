class Solution {
  /**
   * @param {string} s
   * @returns {string}
   */
  removeSpaces(s) {
    // Remove all space characters (' ') from the string
    return s.replace(/ /g, "");
  }
}
