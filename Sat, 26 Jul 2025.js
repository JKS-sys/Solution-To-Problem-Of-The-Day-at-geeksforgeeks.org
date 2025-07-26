// Sat, 26 Jul 2025,

// Majority Element II
// Difficulty: MediumAccuracy: 48.1%Submissions: 176K+Points: 4Average Time: 15m
// You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array.

// Note: The answer should be returned in an increasing format.

// Examples:

// Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: []
// Explanation: The total number of votes are 5. No candidate occur more than floor (5/3) times.
// Constraint:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 105
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  findMajority(arr) {
    const n = arr.length;
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;

    for (let num of arr) {
      if (candidate1 !== null && num === candidate1) {
        count1++;
      } else if (candidate2 !== null && num === candidate2) {
        count2++;
      } else if (count1 === 0) {
        candidate1 = num;
        count1 = 1;
      } else if (count2 === 0) {
        candidate2 = num;
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    }

    count1 = 0;
    count2 = 0;
    for (let num of arr) {
      if (candidate1 !== null && num === candidate1) count1++;
      if (candidate2 !== null && num === candidate2) count2++;
    }

    const result = [];
    if (count1 > n / 3) result.push(candidate1);
    if (count2 > n / 3) result.push(candidate2);

    result.sort((a, b) => a - b);
    return result;
  }
}
