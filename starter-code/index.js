var SortedList = function() {
    this.items = []
    this.length = this.items.length
};

SortedList.prototype.add     = function(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort(function(a,b){return a-b})
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1]
}
SortedList.prototype.max = function() {
    return Math.max(...this.items)
}


SortedList.prototype.min     = function() {
    return this.items[0]
}
SortedList.prototype.average = function() {
    var total = 0;
    for(var i = 0; i < this.items.length; i++) {
        total += this.items[i];
    }
    var avg = total / this.items.length;
    return avg
}
SortedList.prototype.sum     = function() {
    var sum = this.items.reduce(function(a, b) { return a + b; }, 0);
    return sum
}

module.exports = SortedList;
