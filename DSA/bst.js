
// Definition of a TreeNode representing a node in a binary tree
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Definition of a BSTIterator
  class BSTIterator {
    constructor(root) {
      // Stack to store nodes
      this.stack = [];
      // Populate the stack with nodes from the leftmost path
      this.populateStack(root);
    }
  
    // Helper function to populate the stack with nodes from the leftmost path
    populateStack(node) {
      while (node !== null) {
        this.stack.push(node);
        node = node.left;
      }
    }
  
    
    hasNext() {
      // If the stack is not empty, there is a next smallest number
      return this.stack.length > 0;
    }
    next() {
      // Check if there is a next smallest number
      if (!this.hasNext()) {
        return null;
      }
  
      // Pop the top node from the stack
      const current = this.stack.pop();
  
      // If the popped node has a right subtree, populate stack with leftmost nodes of the right subtree
      if (current.right !== null) {
        this.populateStack(current.right);
      }
  
      // Return the value of the popped node (the next smallest number)
      return current.val;
    }
  }
  // Input: {1 2 3 -1 -1 4 -1 -1 5 -1 -1};
  const root = new TreeNode(1);          
root.left = new TreeNode(2);              
root.right = new TreeNode(3);             
root.right.left = new TreeNode(4);        
root.right.right = new TreeNode(5);      


  const iterator = new BSTIterator(root);
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  