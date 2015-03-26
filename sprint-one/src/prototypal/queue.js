var Queue = function(){


	var someInstance = Object.create (queueMethods);
	someInstance.count = 0;
	someInstance.keyArray = [];

	return someInstance;
};

var queueMethods = {

    enqueue : function (value) {

      this.keyArray.push (value);
      this[value] = value;
      this.count++;


    },

    dequeue : function () {
      if (this.count > 0) {
      	 this.count--;
         var temp = this.keyArray.shift();
         delete this[temp];
         return temp;
      }
    },

    size : function  () {
       return this.count;


    }


};



