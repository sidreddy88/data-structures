var Queue = function(){
  var someInstance = {};
    var count = 0;
    var index = -1;
    var array = [];

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
      array.push (value);
      someInstance[value] = value;
    count++;
    };

  someInstance.dequeue = function(){
    if (count > 0) {
        count--;
        var temp = array.shift();
        delete someInstance[temp];
        return temp;
    }
  };

  someInstance.size = function(){
      return count;
  };

  return someInstance;
};


