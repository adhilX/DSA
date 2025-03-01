class TrieNode {
    constructor() {
        this.children = {}; // Stores the children nodes
        this.isEnd = false; // Indicates if the node represents the end of a word
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode(); // Root node of the Trie
    }

    insert(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode(); // Create a new node if the character doesn't exist
            }
            node = node.children[char]; // Move to the next node
        }
        node.isEnd = true; // Mark the end of the word
    }

    search(word){
        let node = this.traverse(word);
        return node ? node.isEnd : false; // Return true if the word exists and is marked as end
    }

    startsWith(prefix) {
        return this.traverse(prefix) !== null; // Return true if the prefix exists
    }

    traverse(str) {
        let node = this.root;
        for (let char of str) {
            if (!node.children[char]) return null; // Return null if the character doesn't exist
            node = node.children[char]; // Move to the next node
        }
        return node; // Return the final node after traversing the string
    }

      // Find suggestions based on a prefix
      autocomplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return []; // If prefix not found, return empty array
            node = node.children[char];
        }
        return this.findWords(node, prefix);
    }

    // Helper function to collect words from a given node
    findWords(node, prefix) {
        let words = [];
        if (node.isEnd) words.push(prefix);

        for (let char in node.children) {
            words.push(...this.findWords(node.children[char], prefix + char));
        }
        return words;
    }

    

    remove(word) {
        function removeWordHelper(node, word, depth) {
            if (!node) return false;

            if (depth === word.length) {
                if (!node.isEnd) return false; // Word doesn't exist
                node.isEnd = false; // Unmark the end of the word
                return Object.keys(node.children).length === 0; // Return true if the node has no children
            }

            const char = word[depth];
            const nextNode = node.children[char];

            if (!nextNode) return false; // Character doesn't exist

            let shouldDeleteChild = removeWordHelper(nextNode, word, depth + 1);

            if (shouldDeleteChild) {
                delete node.children[char]; // Delete the child node
                return Object.keys(node.children).length === 0 && !node.isEnd; // Return true if the node has no children and is not end of another word
            }

            return false;
        }

        return removeWordHelper(this.root, word, 0); // Start the removal process and return the result
    }
}

// Example Usage:
let trie = new Trie();
trie.insert('adhi');
trie.insert('adhil');
trie.insert('chinnu')
trie.insert('chikku')
console.log(trie.remove('chikku')); // true, Removes 'adhi'
console.log(trie.search('adhil')); // true
console.log(trie.search('adh')); // false
console.log(trie.autocomplete('ch')); // ['adhil']
