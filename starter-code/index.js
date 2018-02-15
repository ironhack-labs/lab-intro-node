var SortedList = function(items, length) {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
	this.items.push(item);
	this.items.sort((a, b)=> {
		return a-b;
	});
	this.length++;
}
SortedList.prototype.get     = function(pos) {
	return this.items[pos - 1];
}
SortedList.prototype.max     = function() {
	return Math.max(... this.items);
}
SortedList.prototype.min     = function() {
	return Math.min(... this.items);
}
SortedList.prototype.average = function() {
	this.sum = 0;
	for (let i = 0; i < this.items.length; i++) {
		this.sum += this.items[i];
	} return this.sum / this.length;
	
}
SortedList.prototype.sum     = function() {
	this.sum = 0;
	for (let i = 0; i < this.items.length; i++) {
		this.sum += this.items[i];
	} return this.sum;
}

module.exports = SortedList;
