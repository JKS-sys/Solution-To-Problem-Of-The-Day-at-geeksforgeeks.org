// Thu, 24 Jul 2025,

// Last Moment Before All Ants Fall Out
// Difficulty: MediumAccuracy: 78.57%Submissions: 4K+Points: 4
// We have a wooden plank of length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second, with some moving left and others right.
// When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time. When an ant reaches one end of the plank at a time t, it falls out of the plank immediately.

// Given an integer n and two integer arrays left[] and right[], the positions of the ants moving to the left and the right, return the time when the last ant(s) fall out of the plank.

// Examples :

// Input: n = 4, left[] = [2], right[] = [0, 1, 3]
// Output: 4

// Explanation: As seen in the above image, the last ant falls off the plank at t = 4.
// Input:  n = 4, left[] = [], right[] = [0, 1, 2, 3, 4]
// Output: 4

// Explanation: All ants are going to the right, the ant at index 0 needs 4 seconds to fall.
// Input: n = 3, left[] = [0], right[] = [3]
// Output: 0
// Explanation: The ants will fall off the plank as they are already on the end of the plank.
// Constraints:
// 1 ≤ n ≤ 105
// 0 ≤ left.length, right.length ≤ n + 1
// 0 ≤ left[i], right[i] ≤ n
// 1 ≤ left.length + right.length ≤ n + 1
// All values of left and right are unique, and each value can appear only in one of the two arrays.
// Expected Complexities
// Time Complexity: O(n + m)
// Auxiliary Space: O(1)

class Solution {
  getLastMoment(n, left, right) {
    let ans = 0;
    for (let x of left) {
      ans = Math.max(ans, x);
    }
    for (let x of right) {
      ans = Math.max(ans, n - x);
    }
    return ans;
  }
}
