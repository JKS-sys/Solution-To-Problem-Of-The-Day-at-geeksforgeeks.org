class Solution {
  findPrefixes(arr) {
    // Build a trie to store the frequency of each prefix
    const trie = { count: 0, children: {} };
    for (const word of arr) {
      let node = trie;
      for (const ch of word) {
        if (!node.children[ch]) {
          node.children[ch] = { count: 0, children: {} };
        }
        node = node.children[ch];
        node.count++;
      }
    }

    // Find the shortest unique prefix for each word
    const result = [];
    for (const word of arr) {
      let node = trie;
      let prefix = "";
      for (const ch of word) {
        node = node.children[ch];
        prefix += ch;
        if (node.count === 1) break; // unique prefix found
      }
      result.push(prefix);
    }
    return result;
  }
}
