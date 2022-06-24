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

function buildTrieWithLength(words) {
  let root = {};
  for (let word of words) {
    let node = root;
    for (let i of word) {
      if (!node[i]) node[i] = {};
      node = node[i];
    }
    node.end = word.length;
  }
  return root;
}

const TrieArray = [
  "hello",
  "dogmancat",
  "cat",
  "man",
  "dog",
  "catdogdog",
  "catdogdogman",
  "hellocat"
];
const TrieWithLength = buildTrieWithLength(TrieArray);
console.log("Trie with lenght is", TrieWithLength);

function seachConcatWord(
  left,
  original = left,
  node = TrieWithLength,
  count = 0,
  memo = new Set()
) {
  if (memo.has(left)) return;
  if (!left.length && count > 1) answer.push(original);
  for (let char of left) {
    node = node[char];
    if (!node) return;
    if (!node.end) continue;
    let next = left.slice(node.end);
    seachConcatWord(next, original, TrieWithLength, count + 1, memo);
    memo.add(next);
  }
}

let answer = [];
for (let word of TrieArray) seachConcatWord(word);

console.log("The concatable words present in the dictionary are", answer);
