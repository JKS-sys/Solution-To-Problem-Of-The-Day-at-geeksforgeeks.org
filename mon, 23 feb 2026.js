class Solution {
    findUnion(a, b) {
        // Use a Set to store distinct elements from both arrays
        const unionSet = new Set();
        
        // Add all elements of first array
        for (let i = 0; i < a.length; i++) {
            unionSet.add(a[i]);
        }
        
        // Add all elements of second array
        for (let i = 0; i < b.length; i++) {
            unionSet.add(b[i]);
        }
        
        // Convert the Set back to an array (order doesn't matter)
        return Array.from(unionSet);
    }
}