class Solution {
public:
    vector<int> nextPalindrome(vector<int>& num) {
        int n = num.size();
        vector<int> res = num;   // copy of the original
        
        // Step 1: Mirror the left half to the right half
        int left = n / 2 - 1;
        int right = (n % 2 == 0) ? n / 2 : n / 2 + 1;
        while (left >= 0) {
            res[right] = res[left];
            left--;
            right++;
        }
        
        // Step 2: Check if the mirrored number is greater than the original
        bool greater = false;
        for (int i = 0; i < n; i++) {
            if (res[i] > num[i]) {
                greater = true;
                break;
            } else if (res[i] < num[i]) {
                greater = false;
                break;
            }
        }
        
        // Step 3: If not greater, increment the middle and mirror again
        if (!greater) {
            int carry = 1;
            int mid = (n - 1) / 2;   // middle index (for odd length) or left middle (for even)
            int i = mid;
            while (i >= 0 && carry) {
                int sum = res[i] + carry;
                res[i] = sum % 10;
                carry = sum / 10;
                i--;
            }
            
            // Special case: all digits were 9 → need an extra digit
            if (carry) {
                res = vector<int>(n + 1, 0);
                res[0] = 1;
                res[n] = 1;
                return res;
            }
            
            // Mirror again after increment
            left = n / 2 - 1;
            right = (n % 2 == 0) ? n / 2 : n / 2 + 1;
            while (left >= 0) {
                res[right] = res[left];
                left--;
                right++;
            }
        }
        
        return res;
    }
};