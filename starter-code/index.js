var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
        return a - b;
    });
}

SortedList.prototype.get     = function(pos) {
    return pos > this.items.length ? "OutOfBounds" : this.items[pos - 1];
}
SortedList.prototype.max     = function() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : "EmptySortedList";
}
SortedList.prototype.min     = function() {
    return this.items.length > 0 ? this.items[0] : "EmptySortedList";
}
SortedList.prototype.average = function() {
    var total = this.items.reduce(function(sum, num){
        return sum + num;
    }, 0);
    return this.items.length > 0 ? total/this.items.length : "EmptySortedList";
}
SortedList.prototype.sum     = function() {
    var total = this.items.reduce(function(sum, num){
        return sum + num;
    }, 0);
    return this.items.length > 0 ? total : "EmptySortedList";
}

module.exports = SortedList;
