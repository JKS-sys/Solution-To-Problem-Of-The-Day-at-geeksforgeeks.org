class Solution {
  URLify(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") {
        result.push("%", "2", "0");
      } else {
        result.push(s[i]);
      }
    }
    return result.join("");
  }
}
