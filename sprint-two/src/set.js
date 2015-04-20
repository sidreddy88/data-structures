var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

	this._storage[item] = item;

 };

setPrototype.contains = function(item){
	if (this._storage[item]) {
		return true;
	}
	return false;
};

setPrototype.remove = function(item){
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add function - is constant because we are using an object
 contains complexity is constant because we are using an object
 remove complexity is constant because we are using an object
 */

