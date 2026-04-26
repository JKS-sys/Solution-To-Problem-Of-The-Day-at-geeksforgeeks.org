class Solution {
    commonElements(a, b, c) {
        let i = 0, j = 0, k = 0;
        const n1 = a.length, n2 = b.length, n3 = c.length;
        const result = [];

        while (i < n1 && j < n2 && k < n3) {
            const x = a[i], y = b[j], z = c[k];

            if (x === y && y === z) {
                result.push(x);
                // skip all duplicates of x in each array
                while (i < n1 && a[i] === x) i++;
                while (j < n2 && b[j] === y) j++;
                while (k < n3 && c[k] === z) k++;
            } else if (x <= y && x <= z) {
                // x is the smallest
                while (i < n1 && a[i] === x) i++;
            } else if (y <= x && y <= z) {
                // y is the smallest
                while (j < n2 && b[j] === y) j++;
            } else {
                // z is the smallest
                while (k < n3 && c[k] === z) k++;
            }
        }

        return result;
    }
}