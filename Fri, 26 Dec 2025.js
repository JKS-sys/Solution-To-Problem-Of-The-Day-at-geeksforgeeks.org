Fri, 26 Dec 2025,

POTD question was https://www.geeksforgeeks.org/problems/kth-missing-positive-number-in-a-sorted-array/1

Kth Missing Positive Number

Difficulty: Medium
Accuracy: 53.02%
Submissions: 45K+
Points: 4

Given a sorted array of distinct positive integers arr, find the kth positive number missing from arr.

Example 1:
Input: arr = [2, 3, 4, 7, 11], k = 5
Output: 9
Explanation: Missing numbers are 1, 5, 6, 8, 9, 10... The 5th missing number is 9.

Example 2:
Input: arr = [1, 2, 3], k = 2
Output: 5
Explanation: Missing numbers are 4, 5, 6... The 2nd missing number is 5.

Example 3:
Input: arr = [3, 5, 9, 10, 11, 12], k = 2
Output: 2
Explanation: Missing numbers are 1, 2, 4, 6... The 2nd missing number is 2.

Constraints:
1 <= arr.size() <= 10^5
1 <= k <= 10^5
1 <= arr[i] <= 10^6

Expected Time & Space Complexity:
Time Complexity: O(log n)
Space Complexity: O(1)

class Solution {
    kthMissing(arr, k) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            let missing = arr[mid] - (mid + 1);
            
            if (missing < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left + k;
    }
}