class node{
    constructor(data){

        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function search(root,key){
     while(root!=null){
        if(key>root.data)
            root = root.right//pass right subtree
            else if(key<root.data)
                root = root.left
            else 
            return true;
        }
        return false 
     }
 function newNode(item){
    var temp = new node();
    temp.data = item;
    temp.left = temp.right =  null;
    return temp;
 }
 function insert(node,data)
{
    if(node == null)
    return newNode(data)
    if(data<node.data)
      node.right = insert(node.left.data)
    else if(data>node.data)
    node.right = insert(node.right.data)
return node;

}
 var root = null;
 root = insert(root,50,30,20,70);
 if(search(root,50))
 console.log("yes");
else 
console.log("no")