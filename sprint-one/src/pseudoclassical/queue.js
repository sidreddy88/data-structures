var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.keyArray = [];
};


Queue.prototype.enqueue = function (value) {
  this.keyArray.push (value);
	this[value] = value;
   this.count++;

}

Queue.prototype.dequeue  = function () {

   if (this.count > 0 ) {

      this.count--;
     var temp = this.keyArray.shift();
     delete this[temp];
     return temp;

   }
}

Queue.prototype.size  = function () {
   return this.count;

}


