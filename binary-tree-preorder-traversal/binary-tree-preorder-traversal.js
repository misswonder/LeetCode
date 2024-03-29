/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    
    if(!root) return [];
    if(root.length === 1) return root.val;
    
    let data = [];
    const traverse = (node) => {
        data.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    
    traverse(root);
    return data;
    
};