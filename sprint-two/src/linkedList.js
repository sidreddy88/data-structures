var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node (value);
    if (list.head === null) {
    //  list.node = newNode;
      list.head = newNode;
      list.tail = newNode;
    } else {
       list.tail.next = newNode;
       list.tail = newNode;
    }
      console.log(list);
  };

  list.removeHead = function(){
      if(list.head!==null){
          var temp;
          if(list.head.next!==null){
              var node = list.head;
              temp = list.head.value;
              list.head = list.head.next;
              delete node;
          }
          else{
              temp = list.head.value;
              list.head = null;
          }
          return temp;
      }
  };

  list.contains = function(target){

    while (list.head !== null){
        if (list.head.value === target){
          return true
        }
        list.head = list.head.next;

    }
      return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addtail function complexity is constant we are just looking at one node
 * removehead function complexity is constant we are just looking at one node
 * contains is linear in the worst case scenario we need to loop through all the values.
 */
