var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var arrayofArrays = [];

  if (this._storage.get(i)) {

  	  var presentArray = this._storage.get(i);
      presentArray.push ([k,v]);
      this._storage.set(i,presentArray);


  } else {
  	  arrayofArrays.push ([k,v]);
  	   this._storage.set(i,arrayofArrays);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    var value = null;
    if (this._storage.get(i)){
        var tempArray =  this._storage.get(i);
            for(var i=0;i<tempArray.length;i++){
                if(k === tempArray[i][0]){
                    value = tempArray[i][1];
                }
            }
    }
    return value;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	 // this._storage.set(i,null);

	 if (this._storage.get(i)){
        var tempArray =  this._storage.get(i);
            for(var i=0;i<tempArray.length;i++){
                if(k === tempArray[i][0]){
                    // delete ith index in that array
                    tempArray.splice (i, 1);
                }
            }
            if (tempArray.length === 0) {
            		this._storage.set(i,null);
            }
    }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *insert function  - Complexity is constant
 * retrieve function - Complexity is constant given a good hashing algorithm (no collisions)
 * remove function - Complexiy is constant given a good hashing algorithm (no collisions)

 */
