class Solution {
  isBinaryPalindrome(n) {
    // An even number (except 0) cannot be a binary palindrome,
    // because its binary representation starts with 1 and ends with 0.
    if (n % 2 === 0) return false;

    // Find the number of bits in the binary representation of n
    let bits = 0;
    let temp = n;
    while (temp > 0) {
      bits++;
      temp >>= 1;
    }

    // Compare bits from both ends
    for (let i = 0; i < Math.floor(bits / 2); i++) {
      const leftBit = (n >> (bits - 1 - i)) & 1;
      const rightBit = (n >> i) & 1;
      if (leftBit !== rightBit) {
        return false;
      }
    }
    return true;
  }
}
