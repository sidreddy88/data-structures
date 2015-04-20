

var Graph = function(){
	this.allNodes = {};
};

Graph.prototype.addNode = function(node){
	this.allNodes[node] = {};
};

Graph.prototype.contains = function(node){
    if(this.allNodes[node]){
        return true;
    }
    else{
        return false;
    }

};

Graph.prototype.removeNode = function(node){
    if(this.contains(node)){
    delete this.allNodes[node];
    }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if (this.allNodes[fromNode][toNode]) {
		return true;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
    this.allNodes[fromNode][toNode] = toNode;
    this.allNodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if (this.allNodes[fromNode][toNode]) {
       delete this.allNodes[fromNode][toNode];
       delete this.allNodes[toNode][fromNode];
	}
};

Graph.prototype.forEachNode = function(cb){
    for(key in this.allNodes){
        cb(key);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



