var SortedList = function() {
this.items = [];
this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item)
    this.items.sort(function(a,b) {
        return a - b
    })
    this.length = this.items.length
}
SortedList.prototype.get     = function(pos) {
    if (pos < 1 || pos > this.length) {
        throw Error("OutOfBounds");
    }
    return this.items[pos-1];

}
SortedList.prototype.max     = function() {
    return Math.max(...this.items)
}
SortedList.prototype.min     = function() {
    return Math.min(...this.items)
}
SortedList.prototype.average = function() {
    var average = 0; var newSum = this.sum();
    average=newSum/this.items.length;
    return average
}
SortedList.prototype.sum     = function() {
    var sum = 0
    for (var i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i];
    }
    return sum
}

module.exports = SortedList;
