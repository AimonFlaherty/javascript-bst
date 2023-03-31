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
        if(this.root == null) this.root = new Node(data);
        
    }
}
//export default Bst;
module.exports = Bst;