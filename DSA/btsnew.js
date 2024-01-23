class nodetree{
    constructor(data){
        this.value = data;
        this.left = null;
        this.right =null;

    }
}
class BSTIterator{
    constructor(root){
      this.stack=[]
      this.populatestack(root)
    }

populatestack(node){
       while(node !== null)
       {
        this.stack.push(node);
        node.left =node
       }
}
hasnext(){
    return this.stack.length>0;
}
next(){
    if(!this.hasnext()) 
    return null
}
}
const root = new nodetree(1)
root.left = new nodetree(2);
root.right = new nodetree(3);
root.right.left = new nodetree(4);
root.right.right = new nodetree(5)



// const iterator = new BSTIterator(root);

// console.log(iterator.stack)

