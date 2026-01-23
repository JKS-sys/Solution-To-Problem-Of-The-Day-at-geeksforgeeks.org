// Fri, 23 Jan 2026,

// POTD question was https://www.geeksforgeeks.org/problems/maximum-people-visible-in-a-line/1

// Maximum People Visible in a Line

// Difficulty: Medium
// Accuracy: 48.13%
// Submissions: 2K+
// Points: 4

// You are given an array arr[ ], where arr[i] represents the height of the ith person standing in a line.

// A person i can see another person j if:

// height[j] < height[i],
// There is no person k standing between them such that height[k] ≥ height[i].

// Each person can see in both directions (front and back).
// Your task is to find the maximum number of people that any person can see (including themselves).

// Examples:

// Input: arr[] = [6, 2, 5, 4, 5, 1, 6 ]
// Output: 6
// Explanation:
// Person 1 (height = 6) can see five other people at following positions (2, 3, 4, 5. 6) in addition to himself, i.e. total 6.
// Person 2 (height: 2) can see only himself.
// Person 3 (height = 5) is able to see people 2nd, 3rd, and 4th person.
// Person 4 (height = 4) can see himself.
// Person 5 (height = 5) can see people 4th, 5th, and 6th.
// Person 6 (height =1) can only see himself.
// Person 7 (height = 6) can see 2nd, 3rd, 4th, 5th, 6th, and 7th people.
// A maximum of six people can be seen by Person 1, 7th

// Input: arr[] = [1, 3, 6, 4]
// Output: 4
// Explanation:
// Person with height 6 can see persons with heights 1, 3 on the left and 4 on the right, along with himself, giving a total of 4.

// Constraints:
// 1 ≤ arr.size() ≤ 10^4
// 1 ≤ arr[i] ≤ 10^5

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(n)

class Solution {
  maxPeople(arr) {
    const n = arr.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    const stack = [];

    // Calculate left visible

    for (let i = 0; i < n; i++) {
      while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
        stack.pop();
      }
      left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
      stack.push(i);
    }

    // Clear stack
    stack.length = 0;

    // Calculate right visible

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
        stack.pop();
      }
      right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
      stack.push(i);
    }

    // Find maximum total visible (left + right - 1)

    let maxVisible = 0;
    for (let i = 0; i < n; i++) {
      maxVisible = Math.max(maxVisible, left[i] + right[i] - 1);
    }

    return maxVisible;
  }
}
