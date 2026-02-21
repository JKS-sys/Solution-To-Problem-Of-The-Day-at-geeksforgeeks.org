class Solution {
    hIndex(citations) {
        const n = citations.length;
        // bucket[i] will store count of papers with exactly i citations,
        // except for i = n, which stores count of papers with >= n citations
        const bucket = new Array(n + 1).fill(0);

        for (const c of citations) {
            if (c >= n) {
                bucket[n]++; // any citation >= n contributes to all h <= n
            } else {
                bucket[c]++;
            }
        }

        let total = 0;
        // Scan from high to low to find the largest h where total >= h
        for (let h = n; h >= 0; h--) {
            total += bucket[h];
            if (total >= h) {
                return h;
            }
        }
        return 0; // fallback, should never be reached given loop covers h=0
    }
}