var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
        return a-b
    });
    this.length++;
}

SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}

SortedList.prototype.max     = function() {
    return this.items[this.length-1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    return this.sum()/this.length;
}
SortedList.prototype.sum     = function() {
    if (this.items.length > 0){
    return this.items.reduce(function(a, b) {
        return a+b;
        })
    } else {
        return [];
    }
}
module.exports = SortedList;
