var SortedList = function(items, length) {
	this.items = [];
	this.length = 0;
};

SortedList.prototype.add     = function(item) {
	this.items.push(item);
	this.items.sort((a,b) => {
		return a-b;
	});
	this.length++;
}


SortedList.prototype.get     = function(pos) {
	if (pos < 1 || pos > this.items.length) {
		throw Error("OutOfBounds");
	}
	return this.items[pos-1];
}


SortedList.prototype.max     = function() {
	return Math.max(...this.items);
}


SortedList.prototype.min     = function() {
	return Math.min(...this.items);
}

SortedList.prototype.average = function() {
	var total = 0;
	for (var i = 0; i < this.items.length; i++) {
		total += this.items[i];
	}	
	return total / this.items.length;
}


SortedList.prototype.sum     = function() {
	var total = 0;
	for (var i = 0; i < this.items.length; i++) {
		total += this.items[i];
	}

	return total;
}

module.exports = SortedList;
