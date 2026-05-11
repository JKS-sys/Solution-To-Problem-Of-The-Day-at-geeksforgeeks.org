class Solution {
  palindromePair(arr) {
    // Map to store frequency of each string
    const count = new Map();
    for (const s of arr) {
      count.set(s, (count.get(s) || 0) + 1);
    }

    // Helper to check palindrome
    const isPalindrome = (str) => {
      let l = 0,
        r = str.length - 1;
      while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
      }
      return true;
    };

    // Helper to reverse a string
    const reverse = (str) => str.split("").reverse().join("");

    // Check each string in the array
    for (const s of arr) {
      const len = s.length;
      // Try all possible splits
      for (let k = 0; k <= len; k++) {
        const left = s.substring(0, k);
        const right = s.substring(k);

        // Case 1: left is palindrome -> we can prepend reverse(right) to form palindrome
        if (isPalindrome(left)) {
          const req = reverse(right);
          if (count.has(req)) {
            if (req !== s || count.get(s) > 1) {
              return true;
            }
          }
        }

        // Case 2: right is palindrome -> we can append reverse(left) to form palindrome
        if (isPalindrome(right)) {
          const req = reverse(left);
          if (count.has(req)) {
            if (req !== s || count.get(s) > 1) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }
}
