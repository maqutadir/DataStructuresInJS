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

function searchTrie(node, n, word) {
  if (n === word.length + 1) return false;
  if (node && node.word && n === word.length) {
    return node.word;
  }
  const letter = word[n];
  if (!node) {
    return false;
  } else {
    return searchTrie(node[letter], n + 1, word);
  }
}

const wordExist = (word = "hello") => {
  console.log(
    "The given word",
    searchTrie(Trie, 0, word) ? searchTrie(Trie, 0, word) : "doesnot exist"
  );
};

wordExist("Snowstrom");
wordExist("Cat");
wordExist("mouse");
console.log("The trie is", Trie);
