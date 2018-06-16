let SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    this.items.push(item)
    this.items.sort(function(i1, i2) {
        return i1 - i2;
      });
    this.length++;
}
SortedList.prototype.get = function(pos) {
    return this.items[pos-1], this.length;
}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
