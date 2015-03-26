var Stack = function() {
	var someInstance = {};
   someInstance.count = 0;
   extend (someInstance, stackMethods);

 return someInstance;

};


 var stackMethods = {

    push :  function  (value){
    	this[this.count] = value;
        this.count++;
	},

	pop : function (){
    if(this.count>0) {
    	this.count--;
        var temp = this[this.count];
        delete this[this.count];
        return temp;
      }
	},

	size : function () {
         return this.count;

	}
}

var extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
}

