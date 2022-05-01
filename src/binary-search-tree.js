const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.headOfTree = null;
  }

  root() {
    return this.headOfTree
  }

  add( data ) {
    this.headOfTree = addNode(this.headOfTree, data);

      function addNode(node, data) {
        if (!node) {
          return new Node(data)
        }

        if (node.data === data) {
          return node;
        }

        if (data < node.data) {
          node.left = addNode(node.left, data)
        } else {
          node.right = addNode(node.right, data)
        }
        return node;
      }
  }

  has( data ) {
    return hasNode(this.headOfTree, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ?
        hasNode(node.left, data) :
        hasNode(node.right, data);
    }
  }

  find( data ) {
    return findNode (this.headOfTree, data);

    function findNode (node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      return data < node.data ?
      findNode(node.left, data) :
      findNode(node.right, data);
    }
  }

  remove( data ) {
    this.headOfTree = removeNode(this.headOfTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node;
        }

        if (!node.right) {
          node = node.left
          return node;
        }

        let minimalFromRightSubTree = node.right;
        while (minimalFromRightSubTree.left) {
          minimalFromRightSubTree = minimalFromRightSubTree.left;
        }
        node.data = minimalFromRightSubTree.data

        node.right = removeNode(node.right, minimalFromRightSubTree.data)

        return node;
      }
    }
  }

  min() {
    if (!this.headOfTree) {
      return;
    }

    let node = this.headOfTree
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.headOfTree) {
      return;
    }

    let node = this.headOfTree
    while (node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};