var BinarySearchTree = function(value){

	var bst = {};
	bst.value = value;
	bst.left = null;
	bst.right = null;
//	bst.children = [];

  bst.insert = function (value){
  var newNode = BinarySearchTree(value);
  if (bst.value=== null){
      bst.value = value;
      return ;
  }

 var recurse = function (node) {
       if (node.value > value){
           // check null for left and right
          if (node.left !== null) {
             recurse (node.left);
          } else {
          	  node.left = newNode;
          }
       } else {
       	  if (node.right !== null) {
                recurse (node.right);
       	  } else {
       	  	  node.right = newNode;
       	  }
     }
 };
   recurse (bst);
};


bst.contains = function (value) {
    var found = false;
    var recurse = function (node) {
        if(node.value === value) {
            found = true;
        }
        if (node.value > value) {
            // check null for left and right
            if (node.left !== null) {
                recurse(node.left);
            }
        } else {
            if (node.right !== null) {
                recurse(node.right);
            }
        }
    }
    recurse (bst);
    return found;

};

bst.depthFirstLog = function (callback) {

    var recurse = function (node) {

            callback(node.value);
             if (node.left !== null) {
            recurse (node.left);
          }
             if (node.right !== null) {
            recurse (node.right);

           }


         };
    recurse (bst);
 };

return bst;

};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert - log(N) because of binary search
 * contains - log(N) because of binary search
 * depthfirstLog - Linear because all nodes need to execute the callback
 */

