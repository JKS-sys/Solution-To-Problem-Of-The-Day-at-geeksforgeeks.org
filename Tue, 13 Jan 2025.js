// Tue, 13 Jan 2025,

// POTD question was https://www.geeksforgeeks.org/problems/lemonade-change/1

// Bus Ticket Change

// Difficulty: Easy
// Accuracy: 52.02%
// Submissions: 50K+
// Points: 2
// Average Time: 30m

// You are given an array arr[] representing passengers in a queue. Each bus ticket costs 5 coins, and arr[i] denotes the note a passenger uses to pay (which can be 5, 10, or 20). You must serve the passengers in the given order and always provide the correct change so that each passenger effectively pays exactly 5 coins. Your task is to determine whether it is possible to serve all passengers in the queue without ever running out of change.

// Examples:

// Input: arr[] = [5, 5, 5, 10, 20]
// Output: true
// Explanation: From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change we return true.

// Input: arr[] = [5, 5, 10, 10, 20]
// Output: false
// Explanation: From the first two customers in order, we collect two $5 bills. For the next two customers in order, we collect a $10 bill and give back a $5 bill. For the last customer, we can not give the change of $15 back because we only have two $10 bills. Since not every customer received the correct change, the answer is false.

// Constraints:
// 1 ≤ arr.size() ≤ 10^5
// arr[i] contains only [5, 10, 20]

// Expected Complexities:
// Time Complexity: O(n)
// Auxiliary Space: O(1)

class Solution {
  canServe(arr) {
    let count5 = 0;
    let count10 = 0;

    for (let payment of arr) {
      if (payment === 5) {
        // No change needed, just take the 5

        count5++;
      } else if (payment === 10) {
        // Need to give 5 back

        if (count5 > 0) {
          count5--;
          count10++;
        } else {
          return false;
        }
      } else {
        // payment === 20

        // Need to give 15 back

        // Prefer giving 10+5 if possible (saves 5s for future)

        if (count10 > 0 && count5 > 0) {
          // Give one 10 and one 5

          count10--;
          count5--;
        } else if (count5 >= 3) {
          // Give three 5s

          count5 -= 3;
        } else {
          return false;
        }

        // Note: we don't store 20s as they're not useful for change
      }
    }

    return true;
  }
}
