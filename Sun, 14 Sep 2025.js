// Sun, 14 Sep 2025,

// Gas Station
// Difficulty: MediumAccuracy: 34.79%Submissions: 208K+Points: 4Average Time: 20m
// There are n gas stations along a circular tour. You are given two integer arrays gas[] and cost[], where gas[i] is the amount of gas available at station i and cost[i] is the gas needed to travel from station i to station (i+1). You have a car with an unlimited gas tank and start with an empty tank at some station. Your task is to return the index of the starting station if it is possible to travel once around the circular route in a clockwise direction without running out of gas at any station; otherwise, return -1.

// Note: If a solution exists, it is guaranteed to be unique.

// Examples:

// Input: gas[] = [4, 5, 7, 4], cost[]= [6, 6, 3, 5]
// Output: 2
// Explanation: Start at gas station at index 2 and fill up with 7 units of gas. Your tank = 0 + 7 = 7
// Travel to station 3. Available gas = (7 – 3 + 4) = 8.
// Travel to station 0. Available gas = (8 – 5 + 4) = 7.
// Travel to station 1. Available gas = (7 – 6 + 5) = 6.
// Return to station 2. Available gas = (6 – 6) = 0.
// Input: gas[] = [3, 9], cost[] = [7, 6]
// Output: -1
// Explanation: There is no gas station to start with such that you can complete the tour.
// Constraints:
// 1 ≤ n ≤ 10^6
// 1 ≤ gas[i], cost[i] ≤ 10^3
// Expected Complexities
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  startStation(gas, cost) {
    let n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
      totalGas += gas[i];
      totalCost += cost[i];
      currentGas += gas[i] - cost[i];
      if (currentGas < 0) {
        start = i + 1;
        currentGas = 0;
      }
    }

    if (totalGas < totalCost) {
      return -1;
    } else {
      return start;
    }
  }
}
