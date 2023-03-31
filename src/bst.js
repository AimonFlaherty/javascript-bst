class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Bst{
    constructor(){
        this.root = null;
    }
    insert(data){
        
        function recursiveInsert(node, data){
            if(node == null){
                return new Node(data);
            }
            else if(node.data < data) node.right = recursiveInsert(node.right, data);
            else if(node.data > data) node.left = recursiveInsert(node.left, data);
            return node;
        }
        this.root = recursiveInsert(this.root, data);
        
    }
    size(){
        function traverse(node){
            let sum = 0;
            if(node == null) return 0;
            sum = sum + traverse(node.left);
            sum = sum + traverse(node.right);
            return sum + 1;
        }
        return traverse(this.root);
    }
    inOrder(){
        const list =[];
        return this.inorderRecursive(this.root, list);
    }
    inorderRecursive(node, list){
        if(node == null) return list;
        list = this.inorderRecursive(node.left, list);
        list.push(node.data);
        list = this.inorderRecursive(node.right, list);
        return list;
    }
    
}

//export default Bst;
module.exports = Bst;