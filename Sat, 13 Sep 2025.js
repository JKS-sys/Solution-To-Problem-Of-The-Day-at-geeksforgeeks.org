// Sat, 13 Sep 2025,

// Minimum Cost to cut a board into squares
// Difficulty: MediumAccuracy: 60.83%Submissions: 24K+Points: 4
// Given a board of dimensions n × m that needs to be cut into n*m squares. The cost of making a cut along a horizontal or vertical edge is provided in two arrays:

// x[]: Cutting costs along the vertical edges (length-wise).
// y[]: Cutting costs along the horizontal edges (width-wise).
// Find the minimum total cost required to cut the board into squares optimally.

// Examples:

// Input: n = 4, m = 6, x[] = [2, 1, 3, 1, 4], y[] = [4, 1, 2]
// Output: 42
// Explanation:

// Initially no. of horizontal segments = 1 & no. of vertical segments = 1.
// Optimal way to cut into square is:
// • Pick 4 (from x) -> vertical cut, Cost = 4 × horizontal segments = 4,
//   Now, horizontal segments = 1, vertical segments = 2.
// • Pick 4 (from y) -> horizontal cut, Cost = 4 × vertical segments = 8,
//   Now, horizontal segments = 2, vertical segments = 2.
// • Pick 3 (from x) -> vertical cut, Cost = 3 × horizontal segments = 6,
//   Now, horizontal segments = 2, vertical segments = 3.
// • Pick 2 (from x) -> vertical cut, Cost = 2 × horizontal segments = 4,
//   Now, horizontal segments = 2, vertical segments = 4.
// • Pick 2 (from y) -> horizontal cut, Cost = 2 × vertical segments = 8,
//   Now, horizontal segments = 3, vertical segments = 4.
// • Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 3,
//   Now, horizontal segments = 3, vertical segments = 5.
// • Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 3,
//   Now, horizontal segments = 3, vertical segments = 6.
// • Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 6,
//   Now, horizontal segments = 4, vertical segments = 6.
// So, the total cost = 4 + 8 + 6 + 4 + 8 + 3 + 3 + 6 = 42.
// Input: n = 4, m = 4, x[] = [1, 1, 1], y[] = [1, 1, 1]
// Output: 15
// Explanation:

// Initially no. of horizontal segments = 1 & no. of vertical segments = 1.
// Optimal way to cut into square is:
// • Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
//   Now, horizontal segments = 2, vertical segments = 1.
// • Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
//   Now, horizontal segments = 3, vertical segments = 1.
// • Pick 1 (from y) -> horizontal cut, Cost = 1 × vertical segments = 1,
//   Now, horizontal segments = 4, vertical segments = 1.
// • Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
//   Now, horizontal segments = 4, vertical segments = 2.
// • Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
//   Now, horizontal segments = 4, vertical segments = 3.
// • Pick 1 (from x) -> vertical cut, Cost = 1 × horizontal segments = 4,
//   Now, horizontal segments = 4, vertical segments = 4
// So, the total cost = 1 + 1 + 1 + 4 + 4 + 4 = 15.
// Constraints:
// 2 ≤ n, m ≤ 10^3
// 1 ≤ x[i], y[j] ≤ 10^3
// Expected Complexities
// Time Complexity: O(n*logn + m*logm)
// Auxiliary Space: O(1)

class Solution {
  minCost(n, m, x, y) {
    x.sort((a, b) => b - a);
    y.sort((a, b) => b - a);

    let i = 0;
    let j = 0;
    let h_segments = 1;
    let v_segments = 1;
    let totalCost = 0;

    while (i < x.length && j < y.length) {
      if (x[i] >= y[j]) {
        totalCost += x[i] * h_segments;
        v_segments++;
        i++;
      } else {
        totalCost += y[j] * v_segments;
        h_segments++;
        j++;
      }
    }
    while (i < x.length) {
      totalCost += x[i] * h_segments;
      i++;
    }
    while (j < y.length) {
      totalCost += y[j] * v_segments;
      j++;
    }
    return totalCost;
  }
}
