/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
class Solution {
  areIsomorphic(s1, s2) {
    // If lengths are different, they cannot be isomorphic
    if (s1.length !== s2.length) return false;

    // Use arrays to store mappings (for ASCII characters, 256 is enough)
    const mapS1toS2 = new Array(256).fill(-1);
    const mapS2toS1 = new Array(256).fill(-1);

    for (let i = 0; i < s1.length; i++) {
      const c1 = s1.charCodeAt(i);
      const c2 = s2.charCodeAt(i);

      if (mapS1toS2[c1] === -1 && mapS2toS1[c2] === -1) {
        // No mapping exists yet, create a new one
        mapS1toS2[c1] = c2;
        mapS2toS1[c2] = c1;
      } else if (mapS1toS2[c1] !== c2 || mapS2toS1[c2] !== c1) {
        // Inconsistent mapping found
        return false;
      }
    }

    return true;
  }
}
