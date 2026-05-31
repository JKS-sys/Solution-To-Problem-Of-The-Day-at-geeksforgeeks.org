class Solution {
  isSumOfConsecutive(n) {
    // A positive integer can be expressed as the sum of two or more
    // consecutive positive integers if and only if it is NOT a power of 2.
    return (n & (n - 1)) !== 0;
  }
}
