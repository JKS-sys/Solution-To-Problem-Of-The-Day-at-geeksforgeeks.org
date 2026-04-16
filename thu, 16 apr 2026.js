class Solution {
  myAtoi(s) {
    let i = 0;
    const n = s.length;
    const MAX = 2147483647; // 2^31 - 1
    const MIN = -2147483648; // -2^31

    // 1. Skip leading whitespaces
    while (i < n && s[i] === " ") {
      i++;
    }

    // 2. Check sign
    let sign = 1;
    if (i < n && (s[i] === "+" || s[i] === "-")) {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }

    // 3. Read digits
    let result = 0;
    while (i < n && s[i] >= "0" && s[i] <= "9") {
      const digit = s.charCodeAt(i) - "0".charCodeAt(0);

      // 4. Overflow check
      if (sign === 1) {
        // Check if result * 10 + digit > MAX
        if (result > Math.floor((MAX - digit) / 10)) {
          return MAX;
        }
      } else {
        // Check if - (result * 10 + digit) < MIN
        if (-result < Math.ceil((MIN + digit) / 10)) {
          return MIN;
        }
      }

      result = result * 10 + digit;
      i++;
    }

    // No digits read case is automatically handled (result remains 0)
    return sign * result;
  }
}
