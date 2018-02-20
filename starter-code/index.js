var SortedList = function() { 

this.newList = [];

};



SortedList.prototype.add = function(item) {

	return this.newList.push( item );
	
};

var example = new SortedList();

example.add(5);
example.add(52);
example.add(42);
console.log( 'Function Test ' + example.newList );





// SortedList.prototype.get     = function(pos) {};
// SortedList.prototype.max     = function() {};
// SortedList.prototype.min     = function() {};
// SortedList.prototype.average = function() {};
// SortedList.prototype.sum     = function() {};












module.exports = SortedList;
