class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertHelper = (node, val) => {
      if (node === null) {
        return new Node(val);
      }

      if (val < node.val) {
        node.left = insertHelper(node.left, val);
      } else {
        node.right = insertHelper(node.right, val);
      }

      return node;
    };

    this.root = insertHelper(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current !== null) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findHelper = (node, val) => {
      if (node === null) {
        return undefined;
      } else if (val === node.val) {
        return node;
      } else if (val < node.val) {
        return findHelper(node.left, val);
      } else {
        return findHelper(node.right, val);
      }
    };

    return findHelper(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    };

    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];

    if (this.root === null) return result;

    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.val);

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    return result;
  }
}

module.exports = BinarySearchTree;
