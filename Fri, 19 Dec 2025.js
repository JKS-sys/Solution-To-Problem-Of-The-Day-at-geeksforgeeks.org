// Fri, 19 Dec 2025,

// POTD question was www.geeksforgeeks.org/problems/bus-conductor--170647/1

// Bus Conductor
// Difficulty: Easy Accuracy: 75.3% Submissions: 23K+ Points: 2

// You are conductor of a bus. You are given two arrays chairs[] and passengers[] of equal length, where chairs[i] is the position of the ith chair and passengers[j] is the position of the jth passenger. You may perform the following move any number of times:

//     Increase or decrease the position of the ith passenger by 1 (i.e., moving the ith passenger from position x to x+1 or x-1)

// Return the minimum number of moves required to move each passenger to get a chair.
// Note: Although multiple chairs can occupy the same position, each passenger must be assigned to exactly one unique chair.

// Examples:

// Input: chairs[] = [3, 1, 5], passengers[] = [2, 7, 4]
// Output: 4
// Explanation: The passengers are moved as follows:
// - The first passenger is moved from position 2 to position 1 using 1 move.
// - The second passenger is moved from position 7 to position 5 using 2 moves.
// - The third passenger is moved from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

// Input: chairs[] = [2, 2, 6, 6], passengers[] = [1, 3, 2, 6]
// Output: 4
// Explanation: Note that there are two chairs at position 2 and two chairs at position 6.
// The passangers are moved as follows:
// - The first passenger is moved from position 1 to position 2 using 1 move.
// - The second passenger is moved from position 3 to position 6 using 3 moves.
// - The third passenger is not moved.
// - The fourth passenger is not moved.
// In total, 1 + 3 + 0 + 0 = 4 moves were used.

// Constraints:
// 1 ≤ n ≤ 10^5
// 1 ≤ chairs[i], passengers[j] ≤ 10^4
// Expected Complexities
// Time Complexity: O(n log n)
// Auxiliary Space: O(1)

/**
 * @param {number[]} chairs
 * @param {number[]} passengers
 * @returns {number}
 */
class Solution {
  findMoves(chairs, passengers) {
    // sort both arrays

    chairs.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);

    let totalMoves = 0;
    const n = chairs.length;

    // calculate the sum of absolute differences

    for (let i = 0; i < n; i++) {
      totalMoves += Math.abs(chairs[i] - passengers[i]);
    }

    return totalMoves;
  }
}
