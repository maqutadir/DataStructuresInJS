function buildTrie(words) {
  let root = {};
  for (let word of words) {
    let node = root;
    for (let i of word) {
      if (!node[i]) node[i] = {};
      node = node[i];
    }
    node.word = word;
  }
  return root;
}

const Trie = buildTrie(["hello", "there", "cat", "catdog", "mouse"]);

console.log("The trie is", Trie);
