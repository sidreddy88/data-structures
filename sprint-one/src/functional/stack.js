var Stack = function(){
  var someInstance = {};
   var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
      someInstance[count] = value;
      count++;
  };

  someInstance.pop = function(){

      if(count>0) {
        count--;
        var temp = someInstance[count];
          delete someInstance[count];
          return temp;
      }

  };

  someInstance.size = function(){
     return count;
  };

  return someInstance;
};
