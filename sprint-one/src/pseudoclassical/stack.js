var Stack = function() {

this.count = 0;
};

Stack.prototype.push  = function (value) {
	this[this.count] = value;
   this.count++;

}

Stack.prototype.pop  = function () {

   if (this.count > 0 ) {
      this.count--;
     var temp = this[this.count];
     delete this[this.count];
     return temp;

   }
}

Stack.prototype.size  = function () {
   return this.count;

}

