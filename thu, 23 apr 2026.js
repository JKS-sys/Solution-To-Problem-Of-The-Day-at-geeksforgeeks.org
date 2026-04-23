class Solution {
    canSplit(arr) {
        let total = arr.reduce((sum, val) => sum + val, 0);
        if (total % 2 !== 0) return false;
        
        let target = total / 2;
        let prefix = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            prefix += arr[i];
            if (prefix === target) return true;
        }
        return false;
    }
}