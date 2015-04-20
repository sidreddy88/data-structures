var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
    extend(newTree,treeMethods);

  return newTree;
};

var extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
};

var treeMethods = {};

treeMethods.addChild = function(value){
    var newNode = Tree(value);

	if (this.value === null){
		this.value = value;
	} else {
        this.children.push(newNode);
    }
};

treeMethods.contains = function(target){
var found = false;
var recurse = function(node){
    if(node.value===target){
        found =  true;
    }
    else{
        for(var i=0; i< node.children.length;i++){
            recurse(node.children[i]);
        }
    }
}
    recurse(this);
    return found;
};
/*


*/

/*
 * Complexity: What is the time complexity of the above functions?
 * the complexity for the add child function is constant since we are pushing the element to array
 * the complexity for contains function is linear because in the worst case, we might have to loop through all the elements
 */
