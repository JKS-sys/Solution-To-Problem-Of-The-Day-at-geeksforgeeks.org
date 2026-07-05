
class Solution {
    maxCharGap(s) {
        // Array to store the first occurrence index of each lowercase letter.
        // Initialize with -1 to indicate the character hasn't been seen yet.
        const firstIndex = new Array(26).fill(-1);
        let maxGap = -1;

        for (let i = 0; i < s.length; i++) {
            const charCode = s.charCodeAt(i) - 97; // 'a' -> 0, 'b' -> 1, ...
            
            if (firstIndex[charCode] !== -1) {
                // Character seen before: calculate gap and update maxGap.
                const gap = i - firstIndex[charCode] - 1;
                if (gap > maxGap) {
                    maxGap = gap;
                }
            } else {
                // First occurrence: store its index.
                firstIndex[charCode] = i;
            }
        }

        return maxGap;
    }
}
